/*
// eslint-disable-next-line import/consistent-type-specifier-style
import type { ProfilePointer } from "nostr-tools/lib/types/nip19";
// eslint-disable-next-line import/consistent-type-specifier-style
import type { NIP05Result } from "nostr-tools/lib/types/nip05";
import {
  generatePrivateKey,
  getEventHash,
  getPublicKey,
  getSignature,
  nip04,
  nip19,
  validateEvent,
  verifiedSymbol,
  verifySignature,
  type Event,
  type VerifiedEvent,
} from "nostr-tools";
import {
  BASE_NIP05_URL,
  BASE_RW_RELAYS,
  DM_KIND,
  GROUP_TIME_GAP_IN_SECONDS,
  METADATA_KIND,
  PRIVATE_KEY_IDB_NAME,
  PUBLIC_KEY_IDB_NAME,
  TIME_FORMAT,
} from "components/apps/Messenger/constants";
import {
  type ChatEvents,
  type DecryptedContent,
  type NostrEvents,
  type NostrProfile,
  type ProfileData,
} from "components/apps/Messenger/types";
import { type MenuItem } from "contexts/menu/useMenuContextState";
import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_SECOND } from "utils/constants";

export const getRelayUrls = async (): Promise<string[]> => {
  if (window.nostr?.getRelays) {
    try {
      return [
        ...new Set([
          ...BASE_RW_RELAYS,
          ...Object.entries(await window.nostr.getRelays()).map(([url]) =>
            url.endsWith("/") ? url.slice(0, -1) : url
          ),
        ]),
      ];
    } catch {
      // Ignore failure to get relays
    }
  }

  return BASE_RW_RELAYS;
};

export const toHexKey = (key: string): string => {
  if (
    key.startsWith("nprofile") ||
    key.startsWith("npub") ||
    key.startsWith("nsec")
  ) {
    try {
      const { data } = nip19.decode(key);

      if (typeof data === "string") return data;

      if (
        typeof data === "object" &&
        typeof (data as ProfilePointer).pubkey === "string"
      ) {
        return (data as ProfilePointer).pubkey;
      }
    } catch {
      return key;
    }
  }

  return key;
};

export const getPrivateKey = (): string =>
  localStorage.getItem(PRIVATE_KEY_IDB_NAME) || "";

export const maybeGetExistingPublicKey = async (): Promise<string> => {
  const idbKey = localStorage.getItem(PUBLIC_KEY_IDB_NAME) || "";
  let publicKey = "";

  try {
    publicKey = (await window.nostr?.getPublicKey()) || "";
  } catch {
    // Ignore failure to get public key
  }

  return publicKey || idbKey || "";
};

export const getPublicHexKey = (existingPublicKey?: string): string => {
  if (existingPublicKey) return toHexKey(existingPublicKey);

  const newPrivateKey = generatePrivateKey();
  const newPublicKey = getPublicKey(newPrivateKey);

  localStorage.setItem(PUBLIC_KEY_IDB_NAME, newPublicKey);
  localStorage.setItem(PRIVATE_KEY_IDB_NAME, newPrivateKey);

  return toHexKey(newPublicKey);
};

export const getKeyFromTags = (tags: string[][] = []): string => {
  const [, key = ""] = tags.find(([tag]) => tag === "p") || [];

  return key;
};

const decryptedContent: DecryptedContent = {};

export const decryptMessage = async (
  id: string,
  content: string,
  pubkey: string
): Promise<string | false> => {
  if (decryptedContent[id] || decryptedContent[id] === false) {
    return decryptedContent[id];
  }

  decryptedContent[id] = content;

  try {
    const message = await (window.nostr?.nip04
      ? window.nostr.nip04.decrypt(pubkey, content)
      : nip04.decrypt(toHexKey(getPrivateKey()), pubkey, content));

    decryptedContent[id] = message;

    return message;
  } catch {
    decryptedContent[id] = "";

    return "";
  }
};

const encryptMessage = async (
  content: string,
  pubkey: string
): Promise<string> => {
  try {
    return await (window.nostr?.nip04
      ? window.nostr.nip04.encrypt(pubkey, content)
      : nip04.encrypt(toHexKey(getPrivateKey()), pubkey, content));
  } catch {
    // Ignore failure to decrypt
  }

  return "";
};

export const getMessages = (
  authorPublicKey: string,
  recipientPublicKey?: string,
  since = 0
): NostrEvents => ({
  enabled: Boolean(authorPublicKey) || Boolean(recipientPublicKey),
  filter: [
    {
      ...(recipientPublicKey ? { "#p": [recipientPublicKey] } : {}),
      authors: [authorPublicKey],
      kinds: [DM_KIND],
      since,
    },
    {
      ...(recipientPublicKey ? { authors: [recipientPublicKey] } : {}),
      "#p": [authorPublicKey],
      kinds: [DM_KIND],
      since,
    },
  ],
});

const ascCreatedAt = (a: Event, b: Event): number =>
  a.created_at - b.created_at;

export const descCreatedAt = (a: Event, b: Event): number =>
  b.created_at - a.created_at;

export const shortTimeStamp = (timestamp: number): string => {
  const now = Date.now();
  const time = new Date(timestamp * MILLISECONDS_IN_SECOND).getTime();
  const diff = now - time;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) return `${weeks}w`;
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  if (seconds < 10) return "now";

  return `${seconds}s`;
};

export const copyKeyMenuItems = (
  hexKey: string,
  nsecHex?: string
): MenuItem[] => [
  {
    action: () => navigator.clipboard?.writeText(nip19.npubEncode(hexKey)),
    label: "Copy npub address",
  },
  ...(nsecHex
    ? [
        {
          action: () =>
            navigator.clipboard?.writeText(nip19.nsecEncode(nsecHex)),
          label: "Copy nsec address",
        },
      ]
    : [
        {
          action: () => navigator.clipboard?.writeText(hexKey),
          label: "Copy hex address",
        },
      ]),
];

const signEvent = async (event: Event): Promise<Event> => {
  let signedEvent = event as VerifiedEvent;

  signedEvent.pubkey = window.nostr?.getPublicKey
    ? await window.nostr.getPublicKey()
    : getPublicKey(getPrivateKey());
  signedEvent.id = getEventHash(event);

  if (window.nostr?.signEvent) {
    signedEvent = (await window.nostr.signEvent(signedEvent)) as VerifiedEvent;
  } else {
    signedEvent.sig = getSignature(signedEvent, toHexKey(getPrivateKey()));
  }

  if (validateEvent(signedEvent) && verifySignature(signedEvent)) {
    signedEvent[verifiedSymbol] = true;
  }

  return signedEvent;
};

const getUnixTime = (): number => Math.floor(Date.now() / 1000);

export const createProfileEvent = async (
  profile: ProfileData
): Promise<Event> =>
  signEvent({
    content: JSON.stringify(profile),
    created_at: getUnixTime(),
    kind: METADATA_KIND,
    tags: [] as string[][],
  } as Event);

export const createMessageEvent = async (
  message: string,
  recipientPublicKey: string
): Promise<Event> =>
  signEvent({
    content: await encryptMessage(message, recipientPublicKey),
    created_at: getUnixTime(),
    kind: DM_KIND,
    tags: [["p", recipientPublicKey]],
  } as Event);

const VALID_PICTURE_PROTOCOLS = new Set(["http", "https", "data"]);

export const dataToProfile = (
  publicKey: string,
  data?: ProfileData,
  created_at?: number
): NostrProfile => {
  const {
    about,
    banner,
    display_name,
    name,
    nip05,
    npub,
    picture,
    username,
    website,
  } = data || {};
  const [protocol = ""] = picture?.split(":") || [];

  return {
    about,
    banner,
    created_at,
    data,
    nip05,
    picture: VALID_PICTURE_PROTOCOLS.has(protocol) ? picture : undefined,
    userName:
      display_name ||
      name ||
      username ||
      (
        npub ||
        (publicKey.startsWith("npub") ? publicKey : nip19.npubEncode(publicKey))
      ).slice(0, 12),
    website,
  };
};

export const getPublicHexFromNostrAddress = (key: string): string => {
  const nprofile = key.startsWith("nprofile");
  const nsec = key.startsWith("nsec");

  if (nprofile || nsec || key.startsWith("npub")) {
    try {
      const { data } = nip19.decode(key) || {};
      const hex = nprofile
        ? (data as ProfilePointer)?.pubkey
        : (data as string);

      return nsec ? getPublicKey(hex) : hex;
    } catch {
      return "";
    }
  }

  try {
    return toHexKey(nip19.npubEncode(key));
  } catch {
    return "";
  }
};

const verifiedNip05Addresses: Record<string, string | number> = {};

const TIMEOUT_ERRORS = new Set([408, 504]);

export const getNip05Domain = async (
  nip05address?: string,
  pubkey?: string
): Promise<string> => {
  if (!nip05address || !pubkey) return "";

  try {
    const [userName, domain] = nip05address.split("@");

    if (verifiedNip05Addresses[pubkey] === domain) return domain;
    if (
      typeof verifiedNip05Addresses[pubkey] === "number" &&
      !TIMEOUT_ERRORS.has(verifiedNip05Addresses[pubkey] as number)
    ) {
      return "";
    }

    const nostrJson = await fetch(
      `https://${domain}${BASE_NIP05_URL}?name=${userName}`
    );

    if (nostrJson.ok) {
      const { names = {} } = ((await nostrJson.json()) as NIP05Result) || {};
      let verified = false;

      if (userName === "_") {
        const [userKey, ...otherKeys] = Object.values(names);
        const keyValue = otherKeys.length === 0 ? userKey : names[userName];

        verified = keyValue === pubkey;
      } else if (names[userName]) {
        verified = names[userName] === pubkey;
      }

      if (verified) {
        verifiedNip05Addresses[pubkey] = domain;
      }

      return verified ? domain : "";
    }
    verifiedNip05Addresses[pubkey] = nostrJson.status;
  } catch {
    verifiedNip05Addresses[pubkey] = 0;
  }

  return "";
};

export const getWebSocketStatusIcon = (status?: number): string => {
  switch (status) {
    case WebSocket.prototype.CONNECTING:
      return "🟡";
    case WebSocket.prototype.OPEN:
      return "🟢";
    case WebSocket.prototype.CLOSING:
      return "🟠";
    default:
      return "🔴";
  }
};

export const convertImageLinksToHtml = (content: string): string =>
  content.replace(
    /https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp)/gi,
    (match) => `<img decoding="async" loading="lazy" src="${match}" />`
  );

export const convertNewLinesToBreaks = (content: string): string =>
  content.replace(/\n/g, "<br />");

export const prettyChatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * MILLISECONDS_IN_SECOND);
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  ).getTime();
  const dateTimestamp = date.getTime();
  const datePretty = date.toLocaleString("en-US", TIME_FORMAT);

  if (dateTimestamp > today) return datePretty;
  if (dateTimestamp > yesterday) return `Yesterday at ${datePretty}`;
  if (dateTimestamp > today - 6 * MILLISECONDS_IN_DAY) {
    return date.toLocaleString("en-US", {
      ...TIME_FORMAT,
      weekday: "long",
    });
  }

  return date.toLocaleString("en-US", {
    ...TIME_FORMAT,
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const groupChatEvents = (events: Event[]): ChatEvents => {
  if (events.length === 0) return [];

  const sortedEvents = events.sort(ascCreatedAt);
  const [oldestEvent, ...remainingEvents] = sortedEvents;
  const groupedEvents: ChatEvents = [
    [prettyChatTimestamp(oldestEvent.created_at), [oldestEvent]],
  ];

  remainingEvents.forEach((event) => {
    const { created_at } = event;
    const [, lastGroupedEvents] = groupedEvents[groupedEvents.length - 1];
    const { created_at: last_created_at } =
      lastGroupedEvents[lastGroupedEvents.length - 1];

    if (Math.abs(created_at - last_created_at) < GROUP_TIME_GAP_IN_SECONDS) {
      lastGroupedEvents.push(event);
    } else {
      groupedEvents.push([prettyChatTimestamp(created_at), [event]]);
    }
  });

  return groupedEvents;
};
*/
// Path: components/apps/Messenger/functions.ts
import type { ProfilePointer } from "nostr-tools/lib/types/nip19";
import type { NIP05Result } from "nostr-tools/lib/types/nip05";
import {
  generatePrivateKey,
  getEventHash,
  getPublicKey,
  getSignature,
  nip04,
  nip19,
  validateEvent,
  verifiedSymbol,
  verifySignature,
  type Event,
  type VerifiedEvent,
} from "nostr-tools";
import {
  BASE_NIP05_URL,
  BASE_RW_RELAYS,
  DM_KIND,
  GROUP_TIME_GAP_IN_SECONDS,
  METADATA_KIND,
  PRIVATE_KEY_IDB_NAME,
  PUBLIC_KEY_IDB_NAME,
  TIME_FORMAT,
} from "components/apps/Messenger/constants";
import {
  type ChatEvents,
  type DecryptedContent,
  type NostrEvents,
  type NostrProfile,
  type ProfileData,
} from "components/apps/Messenger/types";
import { type MenuItem } from "contexts/menu/useMenuContextState";
import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_SECOND } from "utils/constants";

// Helper function to check if a string is a valid hexadecimal
const isValidHex = (str: string): boolean => /^[0-9a-fA-F]+$/.test(str);

// Function to encode a public key to npub format if necessary
const getEncodedPublicKey = (publicKey: string): string => {
  if (publicKey.startsWith("npub")) return publicKey;
  if (!isValidHex(publicKey)) {
    console.error("Invalid public key format detected:", publicKey);
    return publicKey;
  }
  return nip19.npubEncode(publicKey);
};

export { getEncodedPublicKey, isValidHex };

// Function to retrieve relay URLs, including user's relays if available
export const getRelayUrls = async (): Promise<string[]> => {
  if (window.nostr?.getRelays) {
    try {
      return [
        ...new Set([
          ...BASE_RW_RELAYS,
          ...Object.entries(await window.nostr.getRelays()).map(([url]) =>
            url.endsWith("/") ? url.slice(0, -1) : url
          ),
        ]),
      ];
    } catch {
      // Ignore failure to get relays
    }
  }

  return BASE_RW_RELAYS;
};

// Record to map user IDs to public keys
export const userIdToPublicKey: Record<string, string> = {
  RDIUser1: "18dd27310b057e9de6b35f2e4f609ae5bac352773fa4cab7d098c5ea8389e7d9",
  RDIUser2: "e4d65367cfb6c3b6fad9709f5084ac4929ebfed4099da150d9fc7d9efc5dc87b",
  RDIUser3: "yourPublicKeyForRDIUser3", // Replace with the actual public key
  RDIUser4: "yourPublicKeyForRDIUser4", // Replace with the actual public key
  RDIUser5: "yourPublicKeyForRDIUser5", // Replace with the actual public key
};

// Function to get a public key from the userIdToPublicKey map
export const getPublicKeyForUser = (userId: string): string => {
  const publicKey = userIdToPublicKey[userId];
  console.log(`User ID: ${userId}, Public Key: ${publicKey}`);
  if (!publicKey || !isValidHex(publicKey)) {
    console.error(`Invalid public key for user: ${userId}`);
    return "";
  }
  return publicKey;
};

// Function to convert various key formats to hexadecimal format
export const toHexKey = (key: string): string => {
  if (
    key.startsWith("nprofile") ||
    key.startsWith("npub") ||
    key.startsWith("nsec")
  ) {
    try {
      const { data } = nip19.decode(key);

      if (typeof data === "string") return data;

      if (
        typeof data === "object" &&
        typeof (data as ProfilePointer).pubkey === "string"
      ) {
        return (data as ProfilePointer).pubkey;
      }
    } catch {
      return "";
    }
  }

  return key;
};

// Function to get public key in hexadecimal format from various key formats
export const getPublicHexFromNostrAddress = (key: string): string => {
  const nprofile = key.startsWith("nprofile");
  const nsec = key.startsWith("nsec");

  if (nprofile || nsec || key.startsWith("npub")) {
    try {
      const { data } = nip19.decode(key) || {};
      const hex = nprofile
        ? (data as ProfilePointer)?.pubkey
        : (data as string);

      return nsec ? getPublicKey(hex) : hex;
    } catch {
      return "";
    }
  }

  if (isValidHex(key)) {
    return key;
  }

  return "";
};

// Function to get the private key from local storage
export const getPrivateKey = (): string =>
  localStorage.getItem(PRIVATE_KEY_IDB_NAME) || "";

// Function to get existing public key or generate a new one
export const maybeGetExistingPublicKey = async (): Promise<string> => {
  const idbKey = localStorage.getItem(PUBLIC_KEY_IDB_NAME) || "";
  let publicKey = "";

  try {
    publicKey = (await window.nostr?.getPublicKey()) || "";
  } catch {
    // Ignore failure to get public key
  }

  return publicKey || idbKey || "";
};

// Function to get public key in hexadecimal format, generating a new key pair if necessary
export const getPublicHexKey = (existingPublicKey?: string): string => {
  if (existingPublicKey) return toHexKey(existingPublicKey);

  const newPrivateKey = generatePrivateKey();
  const newPublicKey = getPublicKey(newPrivateKey);

  localStorage.setItem(PUBLIC_KEY_IDB_NAME, newPublicKey);
  localStorage.setItem(PRIVATE_KEY_IDB_NAME, newPrivateKey);

  return toHexKey(newPublicKey);
};

// Function to extract a public key from event tags
export const getKeyFromTags = (tags: string[][] = []): string => {
  const [, key = ""] = tags.find(([tag]) => tag === "p") || [];

  return key;
};

// Cache for decrypted content
const decryptedContent: DecryptedContent = {};

// Function to decrypt a message
export const decryptMessage = async (
  id: string,
  content: string,
  pubkey: string
): Promise<string | false> => {
  if (decryptedContent[id] || decryptedContent[id] === false) {
    console.log(`Returning cached decrypted content for ID: ${id}`);
    return decryptedContent[id];
  }

  decryptedContent[id] = content;
  console.log(
    `Attempting to decrypt message with ID: ${id}, Content: ${content}, Pubkey: ${pubkey}`
  );

  try {
    // Convert user ID to hex public key format
    const userPublicKey = getPublicKeyForUser(pubkey);
    if (!userPublicKey) {
      console.error(`Invalid public key for user: ${pubkey}`);
      throw new Error("Invalid user public key");
    }

    // Convert and validate the public key
    const hexPubKey = toHexKey(userPublicKey);
    if (!isValidHex(hexPubKey)) {
      console.error(`Invalid hex key format for public key: ${hexPubKey}`);
      throw new Error("Invalid hex key format for public key");
    }
    console.log(`Converted hex public key: ${hexPubKey}`);

    const privateKey = toHexKey(getPrivateKey());
    if (!isValidHex(privateKey)) {
      console.error(`Invalid hex key format for private key: ${privateKey}`);
      throw new Error("Invalid hex key format for private key");
    }
    console.log(`Private Key: ${privateKey}`);

    const message = await (window.nostr?.nip04
      ? window.nostr.nip04.decrypt(hexPubKey, content)
      : nip04.decrypt(privateKey, hexPubKey, content));

    decryptedContent[id] = message;
    console.log(`Decrypted message: ${message}`);
    return message;
  } catch (error) {
    console.error(
      `Error decrypting message with ID: ${id}, Content: ${content}, Pubkey: ${pubkey}`,
      error
    );
    decryptedContent[id] = false;
    return false;
  }
};

// Function to encrypt a message
const encryptMessage = async (
  content: string,
  pubkey: string
): Promise<string> => {
  try {
    return await (window.nostr?.nip04
      ? window.nostr.nip04.encrypt(pubkey, content)
      : nip04.encrypt(toHexKey(getPrivateKey()), pubkey, content));
  } catch (error) {
    console.error("Error encrypting message:", error);
    return "";
  }
};

// Function to get messages with filters for author and recipient public keys
export const getMessages = (
  authorPublicKey: string,
  recipientPublicKey?: string,
  since = 0
): NostrEvents => ({
  enabled: Boolean(authorPublicKey) || Boolean(recipientPublicKey),
  filter: [
    {
      ...(recipientPublicKey ? { "#p": [recipientPublicKey] } : {}),
      authors: [authorPublicKey],
      kinds: [DM_KIND],
      since,
    },
    {
      authors: [recipientPublicKey || ""],
      "#p": [authorPublicKey],
      kinds: [DM_KIND],
      since,
    },
  ],
});

// Function to check for valid NIP-05 identifier
export const isValidNIP05 = async (nip05: string): Promise<boolean> => {
  if (typeof nip05 !== "string") return false;

  const parts = nip05.split("@");

  if (parts.length !== 2) return false;

  try {
    const result = await (
      await fetch(`${BASE_NIP05_URL}${parts[1]}/.well-known/nostr.json`)
    ).json();

    if (typeof result.names === "object") {
      return Object.values(result.names).includes(parts[0]);
    }
  } catch {
    // Ignore fetch error
  }

  return false;
};

// Function to fetch NIP-05 profile data
export const fetchNIP05Profile = async (
  nip05: string
): Promise<NIP05Result | undefined> => {
  if (!nip05) return undefined;

  try {
    const profile = await (
      await fetch(
        `${BASE_NIP05_URL}${nip05.split("@")[1]}/.well-known/nostr.json`
      )
    ).json();

    return profile.names ? { names: profile.names } : undefined;
  } catch {
    return undefined;
  }
};

// Function to create an encrypted direct message event
export const createEncryptedMessageEvent = async (
  content: string,
  pubkey: string
): Promise<Event | undefined> => {
  const hexPubKey = toHexKey(pubkey);

  if (!hexPubKey) {
    console.error("Invalid recipient public key");
    return undefined;
  }

  const encryptedContent = await encryptMessage(content, hexPubKey);

  if (!encryptedContent) {
    console.error("Failed to encrypt message");
    return undefined;
  }

  const event: Event = {
    content: encryptedContent,
    created_at: Math.floor(Date.now() / MILLISECONDS_IN_SECOND),
    kind: DM_KIND,
    pubkey: getPublicHexKey(),
    tags: [["p", hexPubKey]],
    id: "", // Initialize with an empty string
    sig: "", // Initialize with an empty string
  };

  event.id = getEventHash(event);
  event.sig = getSignature(event, getPrivateKey());

  if (!validateEvent(event) || !verifySignature(event)) {
    console.error("Failed to create a valid message event");
    return undefined;
  }

  return event;
};

// Function to sort events in ascending order by creation time
const ascCreatedAt = (a: Event, b: Event): number =>
  a.created_at - b.created_at;

// Function to sort events in descending order by creation time
export const descCreatedAt = (a: Event, b: Event): number =>
  b.created_at - a.created_at;

// Function to create a short timestamp string from a Unix timestamp
export const shortTimeStamp = (timestamp: number): string => {
  const now = Date.now();
  const time = new Date(timestamp * MILLISECONDS_IN_SECOND).getTime();
  const diff = now - time;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) return `${weeks}w`;
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  if (seconds < 10) return "now";

  return `${seconds}s`;
};

// Function to create menu items for copying public and private keys
export const copyKeyMenuItems = (
  hexKey: string,
  nsecHex?: string
): MenuItem[] => [
  {
    action: () => navigator.clipboard?.writeText(nip19.npubEncode(hexKey)),
    label: "Copy npub address",
  },
  ...(nsecHex
    ? [
        {
          action: () =>
            navigator.clipboard?.writeText(nip19.nsecEncode(nsecHex)),
          label: "Copy nsec address",
        },
      ]
    : [
        {
          action: () => navigator.clipboard?.writeText(hexKey),
          label: "Copy hex address",
        },
      ]),
];

// Function to sign an event
const signEvent = async (event: Event): Promise<Event> => {
  let signedEvent = event as VerifiedEvent;

  signedEvent.pubkey = window.nostr?.getPublicKey
    ? await window.nostr.getPublicKey()
    : getPublicKey(getPrivateKey());
  signedEvent.id = getEventHash(event);

  if (window.nostr?.signEvent) {
    signedEvent = (await window.nostr.signEvent(signedEvent)) as VerifiedEvent;
  } else {
    signedEvent.sig = getSignature(signedEvent, toHexKey(getPrivateKey()));
  }

  if (validateEvent(signedEvent) && verifySignature(signedEvent)) {
    signedEvent[verifiedSymbol] = true;
  }

  return signedEvent;
};

// Function to get the current Unix timestamp
const getUnixTime = (): number => Math.floor(Date.now() / 1000);

// Function to create a profile event
export const createProfileEvent = async (
  profile: ProfileData
): Promise<Event> =>
  signEvent({
    content: JSON.stringify(profile),
    created_at: getUnixTime(),
    kind: METADATA_KIND,
    tags: [] as string[][],
  } as Event);

// Function to create a message event
export const createMessageEvent = async (
  message: string,
  recipientUserId: string
): Promise<Event> => {
  const recipientPublicKey = getPublicKeyForUser(recipientUserId);
  console.log(
    `Recipient User ID: ${recipientUserId}, Public Key: ${recipientPublicKey}`
  );
  if (!recipientPublicKey) {
    console.error("Invalid recipient user ID:", recipientUserId);
    throw new Error("Invalid recipient user ID");
  }

  const hexRecipientPublicKey = toHexKey(recipientPublicKey);
  if (!hexRecipientPublicKey || !isValidHex(hexRecipientPublicKey)) {
    console.error("Invalid recipient public key:", recipientPublicKey);
    throw new Error("Invalid recipient public key");
  }

  console.log("Hex recipient public key:", hexRecipientPublicKey);

  return signEvent({
    content: await encryptMessage(message, hexRecipientPublicKey),
    created_at: getUnixTime(),
    kind: DM_KIND,
    tags: [["p", hexRecipientPublicKey]],
  } as Event);
};

// Set of valid picture protocols
const VALID_PICTURE_PROTOCOLS = new Set(["http", "https", "data"]);

// Function to convert profile data to a NostrProfile object
export const dataToProfile = (
  publicKey: string,
  data?: ProfileData,
  created_at?: number
): NostrProfile => {
  const {
    about,
    banner,
    display_name,
    name,
    nip05,
    npub,
    picture,
    username,
    website,
  } = data || {};
  const [protocol = ""] = picture?.split(":") || [];

  // Properly encode public key if necessary
  const encodedPublicKey = isValidHex(publicKey)
    ? getEncodedPublicKey(publicKey)
    : publicKey;

  return {
    about,
    banner,
    created_at,
    data,
    nip05,
    picture: VALID_PICTURE_PROTOCOLS.has(protocol) ? picture : undefined,
    userName:
      display_name ||
      name ||
      username ||
      (npub || encodedPublicKey).slice(0, 12),
    website,
  };
};

// Cache for verified NIP-05 addresses
const verifiedNip05Addresses: Record<string, string | number> = {};

// Set of timeout errors
const TIMEOUT_ERRORS = new Set([408, 504]);

// Function to get the NIP-05 domain from an address and public key
export const getNip05Domain = async (
  nip05address?: string,
  pubkey?: string
): Promise<string> => {
  if (!nip05address || !pubkey) return "";

  try {
    const [userName, domain] = nip05address.split("@");

    if (verifiedNip05Addresses[pubkey] === domain) return domain;
    if (
      typeof verifiedNip05Addresses[pubkey] === "number" &&
      !TIMEOUT_ERRORS.has(verifiedNip05Addresses[pubkey] as number)
    ) {
      return "";
    }

    const nostrJson = await fetch(
      `https://${domain}${BASE_NIP05_URL}?name=${userName}`
    );

    if (nostrJson.ok) {
      const { names = {} } = ((await nostrJson.json()) as NIP05Result) || {};
      let verified = false;

      if (userName === "_") {
        const [userKey, ...otherKeys] = Object.values(names);
        const keyValue = otherKeys.length === 0 ? userKey : names[userName];

        verified = keyValue === pubkey;
      } else if (names[userName]) {
        verified = names[userName] === pubkey;
      }

      if (verified) {
        verifiedNip05Addresses[pubkey] = domain;
      }

      return verified ? domain : "";
    }
    verifiedNip05Addresses[pubkey] = nostrJson.status;
  } catch {
    verifiedNip05Addresses[pubkey] = 0;
  }

  return "";
};

// Function to get the WebSocket status icon based on the status code
export const getWebSocketStatusIcon = (status?: number): string => {
  switch (status) {
    case WebSocket.prototype.CONNECTING:
      return "🟡";
    case WebSocket.prototype.OPEN:
      return "🟢";
    case WebSocket.prototype.CLOSING:
      return "🟠";
    default:
      return "🔴";
  }
};

// Function to convert image links in a string to HTML image elements
export const convertImageLinksToHtml = (content: string): string =>
  content.replace(
    /https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp)/gi,
    (match) => `<img decoding="async" loading="lazy" src="${match}" />`
  );

// Function to convert newline characters in a string to HTML <br> elements
export const convertNewLinesToBreaks = (content: string): string =>
  content.replace(/\n/g, "<br />");

// Function to create a pretty chat timestamp from a Unix timestamp
export const prettyChatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * MILLISECONDS_IN_SECOND);
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  ).getTime();
  const dateTimestamp = date.getTime();
  const datePretty = date.toLocaleString("en-US", TIME_FORMAT);

  if (dateTimestamp > today) return datePretty;
  if (dateTimestamp > yesterday) return `Yesterday at ${datePretty}`;
  if (dateTimestamp > today - 6 * MILLISECONDS_IN_DAY) {
    return date.toLocaleString("en-US", {
      ...TIME_FORMAT,
      weekday: "long",
    });
  }

  return date.toLocaleString("en-US", {
    ...TIME_FORMAT,
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// Function to group chat events by time gaps
export const groupChatEvents = (events: Event[]): ChatEvents => {
  if (events.length === 0) return [];

  const sortedEvents = events.sort(ascCreatedAt);
  const [oldestEvent, ...remainingEvents] = sortedEvents;
  const groupedEvents: ChatEvents = [
    [prettyChatTimestamp(oldestEvent.created_at), [oldestEvent]],
  ];

  remainingEvents.forEach((event) => {
    const { created_at } = event;
    const [, lastGroupedEvents] = groupedEvents[groupedEvents.length - 1];
    const { created_at: last_created_at } =
      lastGroupedEvents[lastGroupedEvents.length - 1];

    if (Math.abs(created_at - last_created_at) < GROUP_TIME_GAP_IN_SECONDS) {
      lastGroupedEvents.push(event);
    } else {
      groupedEvents.push([prettyChatTimestamp(created_at), [event]]);
    }
  });

  console.log("Grouped events:", groupedEvents); // Debug log

  return groupedEvents;
};

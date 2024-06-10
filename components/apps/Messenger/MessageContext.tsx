/*import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Event } from "nostr-tools";
import { useHistoryContext } from "components/apps/Messenger/HistoryContext";
import {
  getKeyFromTags,
  getMessages,
  groupChatEvents,
} from "components/apps/Messenger/functions";
import { useNostrEvents } from "components/apps/Messenger/hooks";
import { type ChatEvents } from "components/apps/Messenger/types";

type MessageData = {
  allEventsReceived: boolean;
  messages: ChatEvents;
};

type MessagesState = {
  events: Event[];
  publicKey: string;
  sendingEvent: (event: Event) => void;
};

const MessageContext = createContext({
  events: [],
  publicKey: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendingEvent: () => {},
} as MessagesState);

export const useMessageContext = (): MessagesState =>
  useContext(MessageContext);

export const useMessages = (recipientPublicKey: string): MessageData => {
  const { outgoingEvents } = useHistoryContext();
  const { events, publicKey } = useMessageContext();
  const chatEvents = useNostrEvents(getMessages(publicKey, recipientPublicKey));
  const [messages, setMessages] = useState<ChatEvents>([]);

  useEffect(() => {
    const filteredEvents = [
      ...chatEvents,
      ...events.filter(({ pubkey, tags }) => {
        const isSender = pubkey === recipientPublicKey;
        const isRecipient = getKeyFromTags(tags) === recipientPublicKey;

        return recipientPublicKey === publicKey
          ? isSender && isRecipient
          : isSender || isRecipient;
      }),
    ].filter(
      (event, index, currentEvents) =>
        currentEvents.findIndex(({ id }) => id === event.id) === index
    );
    const currentMessages = groupChatEvents(filteredEvents);

    if (
      currentMessages.length !== messages.length ||
      filteredEvents.length !==
        messages.reduce<Event[]>(
          (allMessages, [, moreMessages]) => [...allMessages, ...moreMessages],
          []
        ).length
    ) {
      setMessages(currentMessages);
    }
  }, [chatEvents, events, messages, publicKey, recipientPublicKey]);

  return {
    allEventsReceived: useMemo(
      () =>
        !outgoingEvents.some(
          ({ tags }) => getKeyFromTags(tags) === recipientPublicKey
        ),
      [outgoingEvents, recipientPublicKey]
    ),
    messages,
  };
};

type MessageProviderProps = {
  publicKey: string;
  since?: number;
};

export const MessageProvider = memo<FC<MessageProviderProps>>(
  ({ children, publicKey, since }) => {
    const chatEvents = useNostrEvents(getMessages(publicKey, "", since));
    const { outgoingEvents, setOutgoingEvents } = useHistoryContext();
    const sendingEvent = useCallback(
      (event: Event) =>
        setOutgoingEvents((currentOutgoingEvents) => [
          ...currentOutgoingEvents,
          event,
        ]),
      [setOutgoingEvents]
    );
    const [events, setEvents] = useState<Event[]>(chatEvents);

    useEffect(() => {
      const currentEvents = [
        ...chatEvents,
        ...outgoingEvents.filter(
          (event) => !chatEvents.some(({ id }) => id === event.id)
        ),
      ];

      if (currentEvents.length !== events.length) setEvents(currentEvents);
    }, [chatEvents, events, outgoingEvents]);

    useEffect(() => {
      outgoingEvents.forEach((message) => {
        if (chatEvents.some(({ id }) => id === message.id)) {
          setOutgoingEvents((currentOutgoingEvents) =>
            currentOutgoingEvents.filter(({ id }) => id !== message.id)
          );
        }
      });
    }, [chatEvents, outgoingEvents, setOutgoingEvents]);

    return (
      <MessageContext.Provider
        value={useMemo(
          () => ({
            events,
            publicKey,
            sendingEvent,
          }),
          [events, publicKey, sendingEvent]
        )}
      >
        {children}
      </MessageContext.Provider>
    );
  }
);
*/

/*
// Path: components/apps/Messenger/MessageContext.tsx
import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Event } from "nostr-tools";
import { useHistoryContext } from "components/apps/Messenger/HistoryContext";
import {
  getKeyFromTags,
  getMessages,
  groupChatEvents,
} from "components/apps/Messenger/functions";
import { useNostrEvents } from "components/apps/Messenger/hooks";
import { type ChatEvents } from "components/apps/Messenger/types";

type MessageData = {
  allEventsReceived: boolean;
  messages: ChatEvents;
};

type MessagesState = {
  events: Event[];
  publicKey: string;
  sendingEvent: (event: Event) => void;
};

const MessageContext = createContext({
  events: [],
  publicKey: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendingEvent: () => {},
} as MessagesState);

export const useMessageContext = (): MessagesState =>
  useContext(MessageContext);

export const useMessages = (recipientPublicKey: string): MessageData => {
  const { outgoingEvents } = useHistoryContext();
  const { events, publicKey } = useMessageContext();
  const chatEvents = useNostrEvents(getMessages(publicKey, recipientPublicKey));
  const [messages, setMessages] = useState<ChatEvents>([]);

  useEffect(() => {
    const filteredEvents = [
      ...chatEvents,
      ...events.filter((e) => {
        console.log(e); // Added debug log
        const { pubkey, tags } = e;
        const isSender = pubkey === publicKey;
        const isRecipient = getKeyFromTags(tags) === recipientPublicKey;
        return isSender || isRecipient;
      }),
    ].filter(
      (event, index, currentEvents) =>
        currentEvents.findIndex(({ id }) => id === event.id) === index
    );

    const currentMessages = groupChatEvents(filteredEvents);
    console.log("Filtered events:", filteredEvents); // Debug log
    console.log("Grouped messages:", currentMessages); // Debug log

    if (
      currentMessages.length !== messages.length ||
      filteredEvents.length !==
        messages.reduce<Event[]>(
          (allMessages, [, moreMessages]) => [...allMessages, ...moreMessages],
          []
        ).length
    ) {
      setMessages(currentMessages);
    }
  }, [chatEvents, events, messages, publicKey, recipientPublicKey]);

  return {
    allEventsReceived: useMemo(
      () =>
        !outgoingEvents.some(
          ({ tags }) => getKeyFromTags(tags) === recipientPublicKey
        ),
      [outgoingEvents, recipientPublicKey]
    ),
    messages,
  };
};

type MessageProviderProps = {
  publicKey: string;
  since?: number;
};

export const MessageProvider = memo<FC<MessageProviderProps>>(
  ({ children, publicKey, since }) => {
    const chatEvents = useNostrEvents(getMessages(publicKey, "", since));
    const { outgoingEvents, setOutgoingEvents } = useHistoryContext();
    const sendingEvent = useCallback(
      (event: Event) => {
        console.log("Sending event:", event); // Added debug log
        setOutgoingEvents((currentOutgoingEvents) => [
          ...currentOutgoingEvents,
          event,
        ]);
      },
      [setOutgoingEvents]
    );
    const [events, setEvents] = useState<Event[]>(chatEvents);

    useEffect(() => {
      const currentEvents = [
        ...chatEvents,
        ...outgoingEvents.filter(
          (event) => !chatEvents.some(({ id }) => id === event.id)
        ),
      ];

      if (currentEvents.length !== events.length) setEvents(currentEvents);
    }, [chatEvents, events, outgoingEvents]);

    useEffect(() => {
      outgoingEvents.forEach((message) => {
        if (chatEvents.some(({ id }) => id === message.id)) {
          setOutgoingEvents((currentOutgoingEvents) =>
            currentOutgoingEvents.filter(({ id }) => id !== message.id)
          );
        }
      });
    }, [chatEvents, outgoingEvents, setOutgoingEvents]);

    return (
      <MessageContext.Provider
        value={useMemo(
          () => ({
            events,
            publicKey,
            sendingEvent,
          }),
          [events, publicKey, sendingEvent]
        )}
      >
        {children}
      </MessageContext.Provider>
    );
  }
);
*/

// Path: components/apps/Messenger/MessageContext.tsx
// Path: components/apps/Messenger/MessageContext.tsx

import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Event } from "nostr-tools";
import { useHistoryContext } from "components/apps/Messenger/HistoryContext";
import {
  getKeyFromTags,
  getMessages,
  groupChatEvents,
} from "components/apps/Messenger/functions";
import { useNostrEvents } from "components/apps/Messenger/hooks";
import { type ChatEvents } from "components/apps/Messenger/types";

type MessageData = {
  allEventsReceived: boolean;
  messages: ChatEvents;
};

type MessagesState = {
  events: Event[];
  publicKey: string;
  sendingEvent: (event: Event) => void;
};

// Create a context for managing message state
const MessageContext = createContext({
  events: [],
  publicKey: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendingEvent: () => {},
} as MessagesState);

// Custom hook to use the MessageContext
export const useMessageContext = (): MessagesState =>
  useContext(MessageContext);

// Custom hook to manage messages between the user and recipient
export const useMessages = (recipientPublicKey: string): MessageData => {
  const { outgoingEvents } = useHistoryContext();
  const { events, publicKey } = useMessageContext();
  const chatEvents = useNostrEvents(getMessages(publicKey, recipientPublicKey));
  const [messages, setMessages] = useState<ChatEvents>([]);

  // Effect to filter and group chat events
  useEffect(() => {
    const filteredEvents = [
      ...chatEvents,
      ...events.filter((e) => {
        console.log("Event being filtered:", e); // Added debug log
        const { pubkey, tags } = e;
        const isSender = pubkey === publicKey;
        const isRecipient = getKeyFromTags(tags) === recipientPublicKey;
        return isSender || isRecipient;
      }),
    ].filter(
      (event, index, currentEvents) =>
        currentEvents.findIndex(({ id }) => id === event.id) === index
    );

    const currentMessages = groupChatEvents(filteredEvents);
    console.log("Filtered events after filtering:", filteredEvents); // Debug log
    console.log("Grouped messages after filtering:", currentMessages); // Debug log

    if (
      currentMessages.length !== messages.length ||
      filteredEvents.length !==
        messages.reduce<Event[]>(
          (allMessages, [, moreMessages]) => [...allMessages, ...moreMessages],
          []
        ).length
    ) {
      setMessages(currentMessages);
    }
  }, [chatEvents, events, messages, publicKey, recipientPublicKey]);

  return {
    allEventsReceived: useMemo(
      () =>
        !outgoingEvents.some(
          ({ tags }) => getKeyFromTags(tags) === recipientPublicKey
        ),
      [outgoingEvents, recipientPublicKey]
    ),
    messages,
  };
};

type MessageProviderProps = {
  publicKey: string;
  since?: number;
};

// Memoized MessageProvider component to manage chat events and context state
export const MessageProvider = memo<FC<MessageProviderProps>>(
  ({ children, publicKey, since }) => {
    const chatEvents = useNostrEvents(getMessages(publicKey, "", since));
    const { outgoingEvents, setOutgoingEvents } = useHistoryContext();

    // Callback to handle sending an event
    const sendingEvent = useCallback(
      (event: Event) => {
        console.log("Sending event:", event); // Added debug log
        setOutgoingEvents((currentOutgoingEvents) => [
          ...currentOutgoingEvents,
          event,
        ]);
      },
      [setOutgoingEvents]
    );

    const [events, setEvents] = useState<Event[]>(chatEvents);

    // Effect to update events state with new chat and outgoing events
    useEffect(() => {
      const currentEvents = [
        ...chatEvents,
        ...outgoingEvents.filter(
          (event) => !chatEvents.some(({ id }) => id === event.id)
        ),
      ];

      if (currentEvents.length !== events.length) setEvents(currentEvents);
    }, [chatEvents, events, outgoingEvents]);

    // Effect to remove outgoing events that have been confirmed in chat events
    useEffect(() => {
      outgoingEvents.forEach((message) => {
        if (chatEvents.some(({ id }) => id === message.id)) {
          setOutgoingEvents((currentOutgoingEvents) =>
            currentOutgoingEvents.filter(({ id }) => id !== message.id)
          );
        }
      });
    }, [chatEvents, outgoingEvents, setOutgoingEvents]);

    return (
      <MessageContext.Provider
        value={useMemo(
          () => ({
            events,
            publicKey,
            sendingEvent,
          }),
          [events, publicKey, sendingEvent]
        )}
      >
        {children}
      </MessageContext.Provider>
    );
  }
);

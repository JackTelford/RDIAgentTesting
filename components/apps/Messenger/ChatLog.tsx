/*
import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ChatProfile from "components/apps/Messenger/ChatProfile";
import {
  Avatar,
  CheckCircle,
  CheckFullCircle,
} from "components/apps/Messenger/Icons";
import {
  useMessageContext,
  useMessages,
} from "components/apps/Messenger/MessageContext";
import StyledChatLog from "components/apps/Messenger/StyledChatLog";
import { UNKNOWN_PUBLIC_KEY } from "components/apps/Messenger/constants";
import {
  decryptMessage,
  prettyChatTimestamp,
} from "components/apps/Messenger/functions";
import { useNostrProfile } from "components/apps/Messenger/hooks";
import { type DecryptedContent } from "components/apps/Messenger/types";
import { clsx } from "utils/functions";

const SanitizedContent = dynamic(
  () => import("components/apps/Messenger/SanitizedContent")
);

const ChatLog: FC<{ recipientPublicKey: string }> = ({
  recipientPublicKey,
}) => {
  const { publicKey } = useMessageContext();
  const { allEventsReceived, messages } = useMessages(recipientPublicKey);
  const [decryptedContent, setDecryptedContent] = useState<DecryptedContent>(
    {}
  );
  const decryptMessages = useCallback(
    () =>
      [...messages].reverse().forEach(([, eventGroup]) =>
        [...eventGroup].reverse().forEach(({ content, id }) =>
          decryptMessage(id, content, recipientPublicKey).then((message) =>
            setDecryptedContent((currentDecryptedContent) => ({
              ...currentDecryptedContent,
              [id]: message || false,
            }))
          )
        )
      ),
    [messages, recipientPublicKey]
  );
  const listRef = useRef<HTMLOListElement>(null);
  const isUnknownKey = recipientPublicKey === UNKNOWN_PUBLIC_KEY;
  const { picture, userName } = useNostrProfile(
    isUnknownKey ? "" : recipientPublicKey
  );

  useEffect(() => {
    if (messages) {
      decryptMessages();
      listRef.current?.scrollTo(0, listRef.current.scrollHeight);
    }
  }, [decryptMessages, messages]);

  return (
    <StyledChatLog ref={listRef}>
      {!isUnknownKey && (
        <>
          <ChatProfile publicKey={recipientPublicKey} />
          {messages.map(([timestamp, eventGroup], gropupIndex) =>
            eventGroup.map(
              ({ created_at, id, pubkey, content }, messageIndex) => (
                <li
                  key={id}
                  className={clsx({
                    "cant-decrypt": decryptedContent[id] === false,
                    received: publicKey !== pubkey,
                    sent: publicKey === pubkey,
                  })}
                  data-timestamp={messageIndex === 0 ? timestamp : undefined}
                  title={prettyChatTimestamp(created_at)}
                >
                  {publicKey !== pubkey && (
                    <div className="avatar">
                      {picture ? (
                        <img alt={userName} decoding="async" src={picture} />
                      ) : (
                        <Avatar />
                      )}
                    </div>
                  )}
                  <SanitizedContent
                    content={decryptedContent[id] || content}
                    decrypted={typeof decryptedContent[id] === "string"}
                  />
                  {publicKey === pubkey &&
                    gropupIndex === messages.length - 1 &&
                    messageIndex === eventGroup.length - 1 && (
                      <div
                        className="status"
                        title={allEventsReceived ? "Sent" : "Sending"}
                      >
                        {allEventsReceived ? (
                          <CheckFullCircle />
                        ) : (
                          <CheckCircle />
                        )}
                      </div>
                    )}
                </li>
              )
            )
          )}
        </>
      )}
    </StyledChatLog>
  );
};

export default ChatLog;
*/

// Path: components/apps/Messenger/ChatLog.tsx

import { useCallback, useEffect, useRef, useState, FC } from "react";
import dynamic from "next/dynamic";
import ChatProfile from "components/apps/Messenger/ChatProfile";
import {
  Avatar,
  CheckCircle,
  CheckFullCircle,
} from "components/apps/Messenger/Icons";
import {
  useMessageContext,
  useMessages,
} from "components/apps/Messenger/MessageContext";
import StyledChatLog from "components/apps/Messenger/StyledChatLog";
import { UNKNOWN_PUBLIC_KEY } from "components/apps/Messenger/constants";
import {
  decryptMessage,
  prettyChatTimestamp,
} from "components/apps/Messenger/functions";
import { useNostrProfile } from "components/apps/Messenger/hooks";
import { type DecryptedContent } from "components/apps/Messenger/types";
import { clsx } from "utils/functions";

const SanitizedContent = dynamic(
  () => import("components/apps/Messenger/SanitizedContent")
);

// ChatLog component for displaying chat messages
const ChatLog: FC<{ recipientPublicKey: string }> = ({
  recipientPublicKey,
}) => {
  const { publicKey } = useMessageContext();
  const { allEventsReceived, messages } = useMessages(recipientPublicKey);
  const [decryptedContent, setDecryptedContent] = useState<DecryptedContent>(
    {}
  );

  // Function to decrypt messages
  const decryptMessages = useCallback(
    () =>
      [...messages].reverse().forEach(([, eventGroup]) =>
        [...eventGroup].reverse().forEach(({ content, id }) =>
          decryptMessage(id, content, recipientPublicKey).then((message) =>
            setDecryptedContent((currentDecryptedContent) => ({
              ...currentDecryptedContent,
              [id]: message || false,
            }))
          )
        )
      ),
    [messages, recipientPublicKey]
  );

  const listRef = useRef<HTMLOListElement>(null);
  const isUnknownKey = recipientPublicKey === UNKNOWN_PUBLIC_KEY;
  const { picture, userName } = useNostrProfile(
    isUnknownKey ? "" : recipientPublicKey
  );

  // Effect to decrypt messages and scroll to the bottom of the list
  useEffect(() => {
    if (messages.length > 0) {
      decryptMessages();
      listRef.current?.scrollTo(0, listRef.current.scrollHeight);
    }
  }, [decryptMessages, messages]);

  return (
    <StyledChatLog ref={listRef}>
      {!isUnknownKey && (
        <>
          {/* Display chat profile */}
          <ChatProfile publicKey={recipientPublicKey} />
          {/* Render chat messages */}
          {messages.map(([timestamp, eventGroup], groupIndex) =>
            eventGroup.map(
              ({ created_at, id, pubkey, content }, messageIndex) => (
                <li
                  key={id}
                  className={clsx({
                    "cant-decrypt": decryptedContent[id] === false,
                    received: publicKey !== pubkey,
                    sent: publicKey === pubkey,
                  })}
                  data-timestamp={messageIndex === 0 ? timestamp : undefined}
                  title={prettyChatTimestamp(created_at)}
                >
                  {/* Display avatar for received messages */}
                  {publicKey !== pubkey && (
                    <div className="avatar">
                      {picture ? (
                        <img alt={userName} decoding="async" src={picture} />
                      ) : (
                        <Avatar />
                      )}
                    </div>
                  )}
                  {/* Display message content */}
                  <SanitizedContent
                    content={decryptedContent[id] || content}
                    decrypted={typeof decryptedContent[id] === "string"}
                  />
                  {/* Display message status */}
                  {publicKey === pubkey &&
                    groupIndex === messages.length - 1 &&
                    messageIndex === eventGroup.length - 1 && (
                      <div
                        className="status"
                        title={allEventsReceived ? "Sent" : "Sending"}
                      >
                        {allEventsReceived ? (
                          <CheckFullCircle />
                        ) : (
                          <CheckCircle />
                        )}
                      </div>
                    )}
                </li>
              )
            )
          )}
        </>
      )}
    </StyledChatLog>
  );
};

export default ChatLog;

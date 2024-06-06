/*
import { useCallback, useRef, useState } from "react";
import { Send } from "components/apps/Messenger/Icons";
import { useMessageContext } from "components/apps/Messenger/MessageContext";
import { useNostr } from "components/apps/Messenger/NostrContext";
import StyledSendMessage from "components/apps/Messenger/StyledSendMessage";
import { UNKNOWN_PUBLIC_KEY } from "components/apps/Messenger/constants";
import { createMessageEvent } from "components/apps/Messenger/functions";
import Button from "styles/common/Button";
import { haltEvent } from "utils/functions";

const SendMessage: FC<{ recipientPublicKey: string }> = ({
  recipientPublicKey,
}) => {
  const { sendingEvent } = useMessageContext();
  const { publish } = useNostr();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [canSend, setCanSend] = useState(false);
  const isUnknownKey = recipientPublicKey === UNKNOWN_PUBLIC_KEY;
  const sendMessage = useCallback(
    async (message: string) => {
      const event = await createMessageEvent(message, recipientPublicKey);

      sendingEvent(event);

      try {
        publish(event);
      } catch {
        // Ignore error during publish
      }

      if (inputRef.current?.value) inputRef.current.value = "";

      setCanSend(false);
    },
    [publish, recipientPublicKey, sendingEvent]
  );
  const updateHeight = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "0px";
      inputRef.current.style.height = `${Math.max(
        35,
        inputRef.current.scrollHeight + 4
      )}px`;
    }
  }, []);

  return (
    <StyledSendMessage>
      <textarea
        ref={inputRef}
        disabled={isUnknownKey}
        onChange={() => {
          setCanSend(Boolean(inputRef.current?.value));
          updateHeight();
        }}
        onKeyDown={async (event) => {
          const { key, shiftKey } = event;
          const message = inputRef.current?.value.trim();

          if (message && key === "Enter" && !shiftKey) {
            event.preventDefault();
            await sendMessage(message);
          } else setCanSend(Boolean(message));

          updateHeight();
        }}
        placeholder="Type a message..."
        autoFocus
      />
      <Button
        disabled={isUnknownKey || !canSend}
        onClick={() =>
          inputRef.current?.value && sendMessage(inputRef.current.value)
        }
        onContextMenuCapture={haltEvent}
      >
        <Send />
      </Button>
    </StyledSendMessage>
  );
};

export default SendMessage;
*/

// Path: components/apps/Messenger/SendMessage.tsx

import { useCallback, useRef, useState, FC } from "react";
import { Send } from "components/apps/Messenger/Icons";
import { useMessageContext } from "components/apps/Messenger/MessageContext";
import { useNostr } from "components/apps/Messenger/NostrContext";
import StyledSendMessage from "components/apps/Messenger/StyledSendMessage";
import { UNKNOWN_PUBLIC_KEY } from "components/apps/Messenger/constants";
import {
  createMessageEvent,
  userIdToPublicKey,
  toHexKey,
} from "components/apps/Messenger/functions";
import Button from "styles/common/Button";
import { haltEvent } from "utils/functions";

const SendMessage: FC<{ recipientUserId: string }> = ({ recipientUserId }) => {
  const { sendingEvent } = useMessageContext();
  const { publish } = useNostr();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [canSend, setCanSend] = useState(false);

  const recipientPublicKey = userIdToPublicKey[recipientUserId];
  const isUnknownKey = recipientPublicKey === UNKNOWN_PUBLIC_KEY;

  const sendMessage = useCallback(
    async (message: string) => {
      try {
        const hexRecipientPublicKey = toHexKey(recipientPublicKey);
        if (!hexRecipientPublicKey) {
          console.error("Invalid recipient public key:", recipientPublicKey);
          return;
        }
        const event = await createMessageEvent(message, recipientUserId);
        console.log("Created message event:", event); // Debug log

        sendingEvent(event);
        try {
          publish(event);
          console.log("Message published:", event); // Debug log
        } catch (e) {
          console.error("Publish error:", e);
        }
        if (inputRef.current?.value) inputRef.current.value = "";
        setCanSend(false);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    [publish, recipientUserId, sendingEvent]
  );

  const updateHeight = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "0px";
      inputRef.current.style.height = `${Math.max(
        35,
        inputRef.current.scrollHeight + 4
      )}px`;
    }
  }, []);

  return (
    <StyledSendMessage>
      <textarea
        ref={inputRef}
        disabled={isUnknownKey}
        onChange={() => {
          setCanSend(Boolean(inputRef.current?.value));
          updateHeight();
        }}
        onKeyDown={async (event) => {
          const { key, shiftKey } = event;
          const message = inputRef.current?.value.trim();

          if (message && key === "Enter" && !shiftKey) {
            event.preventDefault();
            await sendMessage(message);
          } else setCanSend(Boolean(message));

          updateHeight();
        }}
        placeholder="Type a message..."
        autoFocus
      />
      <Button
        disabled={isUnknownKey || !canSend}
        onClick={() =>
          inputRef.current?.value && sendMessage(inputRef.current.value)
        }
        onContextMenuCapture={haltEvent}
      >
        <Send />
      </Button>
    </StyledSendMessage>
  );
};

export default SendMessage;

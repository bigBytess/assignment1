import {
  Box,
  IconButton,
  Typography,
  InputAdornment,
  Skeleton,
  TextField,
} from "@mui/material";
import { useState, useRef, useEffect, useMemo } from "react";
import { AiOutlineSend } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../slice/messageSlice";
import ChatSkeleton from "./ChatSkeleton";

function formatTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp);

  // Extracting hours and minutes
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Formatting hours and minutes to a readable string (HH:MM)
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Message = ({ message }) => {
  const isSender = message.senderId;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isSender ? "flex-start" : "flex-end",
        mb: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: "80%",
          p: 1,
          borderRadius: "8px",
          backgroundColor: isSender ? "primary.main" : "grey.300",
          color: isSender ? "white" : "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="subtitle2" alignSelf="flex-end">
          {formatTimeFromTimestamp(message.timestamp)}
        </Typography>
      </Box>
    </Box>
  );
};

const MessageContainer = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [conversations, setConversation] = useState([]);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const messageContainerRef = useRef(null);
  const messagesList = useSelector((state) => state.messages.messages).filter(
    (message) =>
      message.senderId == currentUser.id || message.recieverId == currentUser.id
  );

  console.log(conversations);

  useEffect(() => {
    if (messageContainerRef.current) {
      console.log("fron here");
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [conversations.length]);

  useEffect(() => {
    const asyncWrapper = async () => {
      setLoading(true);
      await delay(3000);
      setConversation(messagesList);
      setLoading(false);
    };
    asyncWrapper();
  }, []);

  const sendMessage = () => {
    if (message && currentUser?.id) {
      dispatch(
        addMessage({
          timestamp: Date.now(),
          recieverId: currentUser.id,
          text: message,
        })
      );
      setConversation((prev) => [
        ...prev,
        {
          timestamp: Date.now(),
          recieverId: currentUser.id,
          text: message,
        },
      ]);
      setMessage("");
    }
  };
  return (
    <>
      <Box
        ref={messageContainerRef}
        sx={{ height: "80%", overflow: "auto", px: { xs: 2, md: 6 }, pt: 2 }}
      >
        {!loading ? (
          conversations.map((message) => <Message message={message} />)
        ) : (
          <ChatSkeleton />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
          mx: "auto",
          position: "absolute",
          bottom: 5,
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{
            width: "90%",
            "& .MuiInputBase-root": {
              pr: 1,
            },
            "& .MuiInputBase-input": {
              py: "10px",
            },
          }}
          variant="filled"
          placeholder="message"
          value={message}
          size="small"
          onChange={(e) => setMessage(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={sendMessage}>
                    <AiOutlineSend />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </>
  );
};

export default MessageContainer;

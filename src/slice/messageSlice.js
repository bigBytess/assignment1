import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },

      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 1,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
      {
        senderId: 2,
        text: "Hii hello",
        timestamp: 1728969083455,
      },
    ],
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export default messageSlice.reducer;
export const { addMessage } = messageSlice.actions;

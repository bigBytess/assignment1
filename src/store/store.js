import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slice/userSlice";
import messageReducer from "../slice/messageSlice";

const store = configureStore({
  reducer: {
    users: usersReducers,
    messages: messageReducer,
  },
});

export default store;

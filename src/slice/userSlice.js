import { createSlice, current } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {
      name: "",
      id: "",
    },
    usersList: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
    ],
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    addUser(state, action) {
      state.usersList.push(action.payload);
    },
    resetCurrentUser(state) {
      state.currentUser = { name: "", id: "" };
    },
  },
});

export const { setCurrentUser, addUser, resetCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;

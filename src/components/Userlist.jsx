import {
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../slice/userSlice";
import React from "react";

const Userlist = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const userList = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  const messagesList = useSelector((state) => state.messages.messages);

  const getUserLastMessage = (id) => {
    return messagesList
      .filter((message) => message.senderId === id || message.recieverId === id)
      .sort((a, b) => b.timestamp - a.timestamp)?.[0]?.text;
  
  };

  const handleSelectUser = (user) => {
    dispatch(setCurrentUser(user));
  };

  const list = userList.map((user) => (
    <React.Fragment key={user.id}>
      <ListItemButton
        selected={currentUser.id === user.id}
        onClick={() => handleSelectUser(user)}
      >
        <ListItemAvatar>
          <img
            src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            width={40}
          />
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={getUserLastMessage(user.id) ?? "Start a chat"}
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  ));

  return <List sx={{ overflow: "auto", height: "90%" }}>{list}</List>;
};

export default Userlist;

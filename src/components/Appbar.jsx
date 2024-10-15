import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetCurrentUser } from "../slice/userSlice";

export default function Appbar() {
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" size="small">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, display: { xs: "block", md: "none" } }}
            onClick={() => dispatch(resetCurrentUser())}
          >
            <IoMdArrowRoundBack />
          </IconButton>
          {currentUser.id && (
            <Avatar>
              <img
                src={`https://avatar.iran.liara.run/public?username=${currentUser.id}`}
                width={40}
              />
            </Avatar>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            {currentUser.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { useSelector } from "react-redux";
import AddUser from "./components/AddUser";
import MessageContainer from "./components/MessageContainer";
import Appbar from "./components/Appbar";
import Userlist from "./components/Userlist";

import { Grid2 as Grid, Box, Typography  } from "@mui/material";

function App() {
  const userId = useSelector((state) => state.users.currentUser.id);
  return (
    <Grid container columnSpacing={2}>
      <Grid
        item
        size={{ xs: 12, md: 3 }}
        sx={{
          height: "100vh",
          position: "relative",
          display: { xs: !userId ? "block" : "none", md: "block" },
        }}
      >
        <Userlist />
        <AddUser />
      </Grid>

      <Grid
        item
        size={{ xs: 12, md: 9 }}
        sx={{
          height: "100vh",
          position: "relative",
          display: { xs: !userId ? "none" : "block", md: "block" },
        }}
      >
        {userId ? (
          <>
            <Appbar />
            <MessageContainer key={userId} />
          </>
        ) : (
          <Box
            sx={{
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Typography> Select user to start chatting</Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default App;

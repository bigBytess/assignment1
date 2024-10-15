import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};
const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFullname("");
    setError("");
  };
  const handleAddUser = () => {
    if (fullname) {
      const id = Math.floor(Math.random() * 100000);
      dispatch(addUser({ id, name: fullname }));
      handleClose();
      return;
    }
    setError("*Required");
  };
  const handleOnChange = (e) => {
    setFullname(e.target.value);
    if (e.target.value) {
      setError("");
    }
  };
  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ bottom: 5, position: "absolute", width: "100%" }}
      >
        Add User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" sx={{ my: 1 }}>
              Full Name
            </Typography>
          </Box>

          <TextField
            fullWidth
            size="small"
            focused
            placeholder="Jane Doe"
            value={fullname}
            onChange={handleOnChange}
            helperText={error}
            error={error}
          />
          <Button
            variant="contained"
            fullWidth
            size="small"
            onClick={handleAddUser}
            sx={{ mt: 1, py: 1 }}
          >
            Add user
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddUser;

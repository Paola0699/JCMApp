import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import NewUserButton from "./NewUserButton.component";
import { NewUserInputs } from "./NewUserInputs.component";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const NewUserModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Nuevo Usuario
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Ingrese los datos del usuario para crear una nueva cuenta.
        </Typography>
        <form>
          <NewUserInputs />
          <NewUserButton />
        </form>
      </Box>
    </Modal>
  );
};
export default NewUserModal;

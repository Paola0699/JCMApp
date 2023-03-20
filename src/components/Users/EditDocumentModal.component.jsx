import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 8,
  borderRadius: "10px",
};

const EditDocumentModal = ({ open, setOpen }) => {
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
        <Typography variant="h5" component="h2">
          Actualizar Documento
        </Typography>
        <TextField fullWidth type="file" />
        <Button fullWidth variant="outlined">
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};
export default EditDocumentModal;

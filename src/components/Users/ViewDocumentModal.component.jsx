import { Modal, Typography } from "@mui/material";
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
  p: 4,
};

const ViewDocumentModal = ({ open, setOpen, documentURL }) => {
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
        <iframe
          title="pdf-view"
          style={{ height: "32rem", width: "100%", border: "0" }}
          src={documentURL}
          type="application/pdf"
        >
          <div>No online PDF viewer installed</div>
        </iframe>
      </Box>
    </Modal>
  );
};
export default ViewDocumentModal;
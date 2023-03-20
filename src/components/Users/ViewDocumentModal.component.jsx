import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
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

const ViewDocumentModal = ({ open, setOpen, documentData }) => {
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
        <Typography variant="h6">{documentData.title}</Typography>
        <Typography variant="subtitle2">
          Última modificación:{" "}
          {moment(documentData.lastUpdate.toDate()).format(
            "MMMM DD YYYY hh:mm:ss"
          )}
        </Typography>
        <iframe
          title="pdf-view"
          style={{
            height: "32rem",
            width: "100%",
            border: "0",
            marginTop: "20PX",
          }}
          src={documentData.document}
          type="application/pdf"
        >
          <div>No online PDF viewer installed</div>
        </iframe>
      </Box>
    </Modal>
  );
};
export default ViewDocumentModal;

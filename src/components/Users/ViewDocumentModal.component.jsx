import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { modalStyle } from "../../variables/styles";

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
      <Box sx={modalStyle}>
        <Typography variant="h6">{documentData.title}</Typography>
        <Typography variant="subtitle2">Última modificación: Fecha</Typography>
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

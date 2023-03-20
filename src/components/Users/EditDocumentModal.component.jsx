import {
  Button,
  LinearProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { postEditDocument } from "../../services/documentsService";

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
const storage = getStorage();

const EditDocumentModal = ({ open, setOpen, documentType }) => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [file, setFile] = useState();
  const handleClose = () => {
    setFile();
    setOpen(false);
  };
  const handleSetDocument = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmitDocument = () => {
    const documentRef = ref(storage, `${Date.now()}`);
    const documentTask = uploadBytesResumable(documentRef, file);
    documentTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(documentTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await postEditDocument(documentType.id, downloadURL);
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
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
        <TextField
          fullWidth
          type="file"
          onChange={(e) => handleSetDocument(e)}
        />
        <LinearProgress variant="determinate" value={progressPercent} />
        <Button
          fullWidth
          variant="outlined"
          disabled={!file}
          onClick={handleSubmitDocument}
        >
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};
export default EditDocumentModal;

import { Box, Button, LinearProgress, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector } from "react-redux";
import { postNewDocument } from "../../services/documentsService";
import { SuccessAlert } from "../Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 8,
  borderRadius: "10px",
};
const storage = getStorage();

const NewDocumentModal = ({ open, setOpen, documentType }) => {
  const { selectedUser } = useSelector((state) => state.documents);
  const [file, setFile] = useState();
  const [progressPercent, setProgressPercent] = useState(0);
  const handleInputClick = () => {
    document.querySelector("#fileSelector").click();
  };
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
            await postNewDocument(
              selectedUser.id,
              downloadURL,
              documentType.id
            );
            handleClose();
            SuccessAlert(
              "Documento cargado",
              "Se ha cargado el documento con éxito"
            );
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
          Cargar Nuevo Documento
        </Typography>
        <input
          id="fileSelector"
          type="file"
          name="file"
          style={{ display: "none" }}
          accept="application/pdf"
          onChange={(e) => handleSetDocument(e)}
        />
        <div className="button__upload" onClick={handleInputClick}>
          <div
            className="button__upload__border"
            style={{ border: "3px dashed #001E3C" }}
          >
            <FontAwesomeIcon icon={faUpload} />
            <Typography variant="h6">Subir Archivo</Typography>
            <Typography variant="subtitle1">(JPG, JPEG, PNG)</Typography>
          </div>
        </div>

        <LinearProgress variant="determinate" value={progressPercent} />
        <Button
          disabled={!file}
          variant="outlined"
          fullWidth
          onClick={handleSubmitDocument}
        >
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};
export default NewDocumentModal;

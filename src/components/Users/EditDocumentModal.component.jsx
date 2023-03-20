import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, LinearProgress, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { postEditDocument } from "../../services/documentsService";
import { SuccessAlert } from "../Common/index";

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
            await postEditDocument(documentType.id, downloadURL);
            handleClose();
            SuccessAlert(
              "Documento editado",
              "Se ha editado el documento con éxito"
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
          Actualizar Documento
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

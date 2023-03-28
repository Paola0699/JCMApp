import { Box, Button, LinearProgress, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { postNewDocument } from "../../services/documentsService";
import { SuccessAlert } from "../Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { modalStyle } from "../../variables/styles";
import { useParams } from "react-router-dom";
import { startGetDocumentsSuccess } from "../../actions/userActions";

const storage = getStorage();

const NewDocumentModal = ({ open, setOpen, documentType }) => {
  const { selectedUser } = useSelector((state) => state.documents);
  const [file, setFile] = useState();
  const [progressPercent, setProgressPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const { idUsuario } = useParams();
  const dispatch = useDispatch();
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
    setLoading(true);
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
            dispatch(startGetDocumentsSuccess(idUsuario));
            handleClose();
            SuccessAlert(
              "Documento cargado",
              "Se ha cargado el documento con éxito"
            );
            setLoading(false);
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
      <Box sx={modalStyle}>
        <Typography variant="h5" component="h2">
          Cargar Nuevo Documento
        </Typography>
        {loading ? (
          <Box
            display={"flex"}
            justifyContent="center"
            flexDirection={"column"}
          >
            <Typography>
              Se está subiendo el documento, por favor espere un momento...
            </Typography>
            <Typography variant="h2" textAlign={"center"}>
              {progressPercent}%
            </Typography>
            <LinearProgress
              style={{ marginBottom: "20px" }}
              variant="determinate"
              value={progressPercent}
            />
          </Box>
        ) : (
          <>
            {" "}
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
                <Typography variant="subtitle1">
                  {file ? `${file?.name} | ${file.type}` : "(PDF)"}
                </Typography>
              </div>
            </div>{" "}
          </>
        )}
        <Button
          fullWidth
          variant="outlined"
          disabled={!file || loading}
          onClick={handleSubmitDocument}
        >
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};
export default NewDocumentModal;

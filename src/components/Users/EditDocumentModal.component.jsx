import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, LinearProgress, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from 'firebase/storage';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startGetDocumentsSuccess } from '../../actions/userActions';
import { postEditDocument } from '../../services/documentsService';
import { modalStyle } from '../../variables/styles';
import { SuccessAlert } from '../Common/index';

const storage = getStorage();
const EditDocumentModal = ({ open, setOpen, documentType }) => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const { idUsuario } = useParams();
  const dispatch = useDispatch();
  const handleInputClick = () => {
    document.querySelector('#fileSelector').click();
  };
  const handleClose = () => {
    setFile();
    setProgressPercent(0);
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
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(documentTask.snapshot.ref).then((downloadURL) => {
          try {
            const deleteDocumentRef = ref(storage, documentType.document);
            deleteObject(deleteDocumentRef)
              .then(async () => {
                await postEditDocument(documentType.id, downloadURL);
                dispatch(startGetDocumentsSuccess(idUsuario));
                handleClose();
                SuccessAlert('Documento editado', 'Se ha editado el documento con éxito');
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
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
      aria-describedby="modal-modal-description">
      <Box sx={modalStyle}>
        <Typography variant="h5" component="h2">
          Actualizar Documento
        </Typography>
        {loading ? (
          <Box display={'flex'} justifyContent="center" flexDirection={'column'}>
            <Typography>Se está subiendo el documento, por favor espere un momento...</Typography>
            <Typography variant="h2" textAlign={'center'}>
              {progressPercent}%
            </Typography>
            <LinearProgress
              style={{ marginBottom: '20px' }}
              variant="determinate"
              value={progressPercent}
            />
          </Box>
        ) : (
          <>
            {' '}
            <input
              id="fileSelector"
              type="file"
              name="file"
              style={{ display: 'none' }}
              accept="application/pdf"
              onChange={(e) => handleSetDocument(e)}
            />
            <div className="button__upload" onClick={handleInputClick}>
              <div className="button__upload__border" style={{ border: '3px dashed #001E3C' }}>
                <FontAwesomeIcon icon={faUpload} />
                <Typography variant="h6">Subir Archivo</Typography>
                <Typography variant="subtitle1">
                  {file ? `${file?.name} | ${file.type}` : '(PDF)'}
                </Typography>
              </div>
            </div>{' '}
          </>
        )}
        <Button
          fullWidth
          variant="outlined"
          disabled={!file || loading}
          onClick={handleSubmitDocument}>
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};
export default EditDocumentModal;

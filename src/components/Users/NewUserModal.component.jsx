import { Box, Modal, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { postNewUser } from '../../services/usersService';
import { newUsersValidationSchema } from '../../validations/newUserValidation';
import NewUserButton from './NewUserButton.component';
import { NewUserInputs } from './NewUserInputs.component';
import { SuccessAlert } from '../Common/SuccessAlert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8,
  borderRadius: '10px'
};

const NewUserModal = ({ open, setOpen }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      USER_NAME: '',
      EMAIL: '',
      PASSWORD: '',
      PASSWORD_CONFIRM: '',
      COMPANY: ''
    },
    validationSchema: newUsersValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await postNewUser(values);
        if (response.message === 'Success') {
          SuccessAlert('Usuario Creado', 'Se ha creado el usuario con éxito');
          formik.resetForm();
          setOpen(false);
        }
      } catch (error) {
        console.log('hay un error');
        console.error(error);
      }
    }
  });

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography variant="h5" component="h2">
          Nuevo Usuario
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Ingrese los datos del usuario para crear una nueva cuenta.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <NewUserInputs formik={formik} />
          <NewUserButton />
        </form>
      </Box>
    </Modal>
  );
};
export default NewUserModal;

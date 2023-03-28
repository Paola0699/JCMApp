import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { postUserAlert } from '../../actions/alertsActions';
import { alertValidationSchema } from '../../validations/alertValidation';
import { modalStyle } from '../../variables/styles';
import { SuccessAlert } from '../Common';

const NewAlertModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      TITLE: '',
      DESCRIPTION: ''
    },
    validationSchema: alertValidationSchema,
    onSubmit: async (values) => {
      try {
        dispatch(postUserAlert(values));
        SuccessAlert('Alerta Creada', 'Se ha creado la alerta con éxito');
        formik.resetForm();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={modalStyle}>
        <Typography variant="h5" component="h2">
          Nueva Alerta
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Ingrese los datos para crear una nueva alerta.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            color="primary"
            id="TITLE"
            name="TITLE"
            label="Título"
            variant="outlined"
            margin="normal"
            size="small"
            value={formik.values.TITLE}
            onChange={formik.handleChange}
            error={formik.touched.TITLE && Boolean(formik.errors.TITLE)}
            helperText={formik.touched.TITLE && formik.errors.TITLE}
            autoFocus={false}
          />
          <TextField
            fullWidth
            color="primary"
            id="DESCRIPTION"
            name="DESCRIPTION"
            label="Descripción"
            variant="outlined"
            margin="normal"
            size="small"
            multiline
            rows={5}
            value={formik.values.DESCRIPTION}
            onChange={formik.handleChange}
            error={formik.touched.DESCRIPTION && Boolean(formik.errors.DESCRIPTION)}
            helperText={formik.touched.DESCRIPTION && formik.errors.DESCRIPTION}
            autoFocus={false}
          />
          <Button type="submit" variant="contained" fullWidth>
            Crear Alerta
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export default NewAlertModal;

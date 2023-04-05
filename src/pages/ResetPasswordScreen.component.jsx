import { Alert, Grid } from '@mui/material';
import React from 'react';
import { LoginHeader, ResetPasswordButton, ResetPasswordInput } from '../components/Login';
import { useFormik } from 'formik';
import { resetPasswordValidationSchema } from '../validations/resetPassword';
import { userResetPassword } from '../actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';

const ResetPasswordScreen = () => {
  const dispatch = useDispatch();
  const { resetPass } = useSelector((state) => state.auth);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      USER: ''
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values) => {
      try {
        const { USER } = values;
        dispatch(userResetPassword(USER));
      } catch (error) {
        console.error(error);
      }
    }
  });
  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100vh',
        color: 'white',
        background:
          'radial-gradient(circle, rgba(0,53,106,1) 0%, rgba(0,30,60,1) 41%, rgba(0,13,25,1) 100%)'
      }}
      display="flex"
      alignItems="center"
      justifyContent="center">
      <LoginHeader
        title={'Recuperar Contraseña'}
        subtitle={'Se enviará un correo al email que proporciones para recuperar tu contraseña'}
      />
      <form onSubmit={formik.handleSubmit}>
        {resetPass && resetPass?.message ? (
          <Alert
            sx={{ marginLeft: 5, marginRight: 5 }}
            variant="filled"
            severity={resetPass.error ? 'error' : 'success'}>
            {resetPass.message}
          </Alert>
        ) : null}
        <ResetPasswordInput formik={formik} />
        <ResetPasswordButton />
      </form>
    </Grid>
  );
};
export default ResetPasswordScreen;

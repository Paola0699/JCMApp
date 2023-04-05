import { Grid } from '@mui/material';
import { LoginButton, LoginHeader, LoginInputs } from '../components/Login/index';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validations/loginValidation';
import { Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../actions/loginActions';
const auth = getAuth();

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { error, user: userRole } = useSelector((state) => state.auth);
  const [user, setUser] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      USER: '',
      PASSWORD: ''
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const { USER, PASSWORD } = values;
        dispatch(userAuth(USER, PASSWORD));
      } catch (error) {
        console.error(error);
      }
    }
  });
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);

  return user && userRole?.type ? (
    userRole?.type === 'admin' ? (
      <Navigate to={'/usuarios'} />
    ) : (
      <Navigate to={'/documentos'} />
    )
  ) : (
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
        title={'¡Bienvenido de nuevo!'}
        subtitle={'Por favor inicia sesión para continuar'}
      />
      <form onSubmit={formik.handleSubmit}>
        {error.message && error.code ? (
          <Alert sx={{ marginLeft: 5, marginRight: 5 }} variant="filled" severity="error">
            {error.message}
          </Alert>
        ) : null}
        <LoginInputs formik={formik} />
        <LoginButton />
      </form>
    </Grid>
  );
};
export default LoginScreen;

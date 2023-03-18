import { Grid } from "@mui/material";
import { LoginButton, LoginHeader, LoginInputs } from "./index";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../validations/loginValidation";
import { Alert } from "@mui/material";
import { userLogin } from "../../services/loginService";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

const auth = getAuth();

const LoginScreen = () => {
  const [error, setError] = useState();
  const [user, setUser] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      USER: "",
      PASSWORD: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const { USER, PASSWORD } = values;
        const response = await userLogin(USER, PASSWORD);
        if (response.code && response.message) setError(response);
      } catch (error) {
        console.error(error);
      }
    },
  });
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(true);
      } else {
        console.log("No user");
      }
    });
  }, []);

  return user ? (
    <Navigate to={"/documentos"} />
  ) : (
    <Grid
      container
      direction="column"
      sx={{
        height: "100vh",
        color: "white",
        background:
          "radial-gradient(circle, rgba(0,53,106,1) 0%, rgba(0,30,60,1) 41%, rgba(0,13,25,1) 100%)",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LoginHeader />
      <form onSubmit={formik.handleSubmit}>
        {error ? (
          <Alert
            sx={{ marginLeft: 5, marginRight: 5 }}
            variant="filled"
            severity="error"
          >
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

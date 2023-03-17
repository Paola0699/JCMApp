import { TextField } from "@mui/material";
import React from "react";

export const NewUserInputs = () => {
  return (
    <>
      <TextField
        fullWidth
        color="primary"
        id="USER_NAME"
        name="USER_NAME"
        label="Nombre"
        variant="outlined"
        margin="normal"
        size="small"
        /*  value={formik.values.USER}
        onChange={formik.handleChange}
        error={formik.touched.USER && Boolean(formik.errors.USER)}
        helperText={formik.touched.USER && formik.errors.USER} */
        autoFocus={false}
      />
      <TextField
        fullWidth
        color="primary"
        id="EMAIL"
        name="EMAIL"
        label="Email"
        variant="outlined"
        margin="normal"
        size="small"
      />
      <TextField
        fullWidth
        color="primary"
        id="PASSWORD"
        name="PASSWORD"
        label="Contraseña"
        variant="outlined"
        margin="normal"
        size="small"
      />
      <TextField
        fullWidth
        color="primary"
        id="PASSWORD_CONFIRM"
        name="PASSWORD_CONFIRM"
        label="Confirmar Contraseña"
        variant="outlined"
        margin="normal"
        size="small"
      />
      <TextField
        fullWidth
        color="primary"
        id="COMPANY"
        name="COMPANY"
        label="Empresa"
        variant="outlined"
        margin="normal"
        size="small"
      />
    </>
  );
};

import { TextField } from "@mui/material";
import React from "react";

export const NewUserInputs = ({ formik }) => {
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
        value={formik.values.USER_NAME}
        onChange={formik.handleChange}
        error={formik.touched.USER_NAME && Boolean(formik.errors.USER_NAME)}
        helperText={formik.touched.USER_NAME && formik.errors.USER_NAME}
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
        value={formik.values.EMAIL}
        onChange={formik.handleChange}
        error={formik.touched.EMAIL && Boolean(formik.errors.EMAIL)}
        helperText={formik.touched.EMAIL && formik.errors.EMAIL}
        autoFocus={false}
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
        type="password"
        value={formik.values.PASSWORD}
        onChange={formik.handleChange}
        error={formik.touched.PASSWORD && Boolean(formik.errors.PASSWORD)}
        helperText={formik.touched.PASSWORD && formik.errors.PASSWORD}
        autoFocus={false}
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
        type="password"
        value={formik.values.PASSWORD_CONFIRM}
        onChange={formik.handleChange}
        error={
          formik.touched.PASSWORD_CONFIRM &&
          Boolean(formik.errors.PASSWORD_CONFIRM)
        }
        helperText={
          formik.touched.PASSWORD_CONFIRM && formik.errors.PASSWORD_CONFIRM
        }
        autoFocus={false}
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
        value={formik.values.COMPANY}
        onChange={formik.handleChange}
        error={formik.touched.COMPANY && Boolean(formik.errors.COMPANY)}
        helperText={formik.touched.COMPANY && formik.errors.COMPANY}
        autoFocus={false}
      />
    </>
  );
};

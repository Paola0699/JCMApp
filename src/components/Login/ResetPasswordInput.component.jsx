import { Grid, InputLabel, TextField } from '@mui/material';
import React from 'react';

const ResetPasswordInput = ({ formik }) => {
  return (
    <Grid item display="flex" alignItems="center" justifyContent="center">
      <Grid container p={4}>
        <Grid item xs={12}>
          <InputLabel>Email</InputLabel>
          <TextField
            fullWidth
            color="primary"
            id="USER"
            name="USER"
            label="Email"
            variant="outlined"
            margin="normal"
            size="small"
            value={formik.values.USER}
            onChange={formik.handleChange}
            error={formik.touched.USER && Boolean(formik.errors.USER)}
            helperText={formik.touched.USER && formik.errors.USER}
            autoFocus={false}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResetPasswordInput;

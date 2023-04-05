import { Button, Grid } from '@mui/material';
import React from 'react';

const ResetPasswordButton = () => {
  return (
    <Grid
      item
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingLeft: 5, paddingRight: 5 }}>
      <Button type="submit" color="secondary" variant="contained" fullWidth>
        Recuperar contraseña
      </Button>
    </Grid>
  );
};

export default ResetPasswordButton;

import { Button, Grid } from "@mui/material";

const LoginButton = () => {
  return (
    <Grid
      item
      sx={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button type="submit" color="primary" variant="contained" fullWidth>
        Iniciar Sesión
      </Button>
    </Grid>
  );
};
export default LoginButton;

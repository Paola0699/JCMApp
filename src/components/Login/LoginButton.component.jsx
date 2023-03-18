import { Button, Grid } from "@mui/material";

const LoginButton = () => {
  return (
    <Grid
      item
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingLeft: 5, paddingRight: 5 }}
    >
      <Button type="submit" color="secondary" variant="contained" fullWidth>
        Iniciar Sesión
      </Button>
    </Grid>
  );
};
export default LoginButton;

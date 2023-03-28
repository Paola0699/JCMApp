import { Grid, Typography } from '@mui/material';
import Logo from '../../assets/images/logo-white.png';

const LoginHeader = () => {
  return (
    <Grid item display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <img alt="img-logo" src={Logo} style={{ width: '10%', marginBottom: '10px' }} />
      <Typography style={{ fontWeight: '200' }} variant="h3" textAlign="center">
        ¡Bienvenido de nuevo!
      </Typography>
      <Typography variant="subtitle1" textAlign="center" sx={{ mb: 3 }}>
        Por favor inicia sesión para continuar
      </Typography>
    </Grid>
  );
};
export default LoginHeader;

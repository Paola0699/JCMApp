import { Alert, AlertTitle, Grid } from '@mui/material';
import NoUsersImg from '../../assets/images/no-alerts.jpg';
const NoAlertsFound = () => {
  return (
    <Grid container direction={'column'} padding={5}>
      <Grid item xs={12} display={'flex'} justifyContent={'center'}>
        <img style={{ width: '25rem' }} src={NoUsersImg} alt="No users found" />
      </Grid>
      <Grid item display={'flex'} justifyContent={'center'}>
        <Alert>
          <AlertTitle>Aún no se has creado ninguna alerta</AlertTitle>Aún no has creado ninguna
          alerta, para crear una nueva alerta ingresa en el perfil del usuario sobre el cual desees
          agregar la alerta
        </Alert>
      </Grid>
    </Grid>
  );
};

export default NoAlertsFound;

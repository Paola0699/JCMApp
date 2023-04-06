import { Alert, AlertTitle, Grid } from '@mui/material';
import NoUsersImg from '../../assets/images/no-users2.jpg';
const NoUsersFound = () => {
  return (
    <Grid container direction={'column'} padding={5}>
      <Grid item sx={12} display={'flex'} justifyContent={'center'}>
        <img style={{ width: '25rem' }} src={NoUsersImg} alt="No users found" />
      </Grid>
      <Grid item display={'flex'} justifyContent={'center'}>
        <Alert severity="info">
          <AlertTitle>No se encontraron registro de usuarios</AlertTitle>Para crear un nuevo usuario
          haga click en el botón <b>NUEVO USUARIO</b>
        </Alert>
      </Grid>
    </Grid>
  );
};

export default NoUsersFound;

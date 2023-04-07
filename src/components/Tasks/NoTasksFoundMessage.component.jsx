import { Alert, AlertTitle, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import NoDataImg from '../../assets/images/no-data.jpg';
import { useDispatch } from 'react-redux';
import { setCurrentPath } from '../../actions/loginActions';

const NoTasksFoundMessage = () => {
  const dispatch = useDispatch();
  return (
    <Grid item>
      <Alert severity="info">
        <AlertTitle>No hay tareas pendientes</AlertTitle>Aún no hay cuentas con ninguna tarea,
        vuelve más tarde
      </Alert>
      <img src={NoDataImg} alt="No Data" style={{ width: '100%' }} />
      <Link
        to={'/documentos'}
        onClick={() => {
          dispatch(setCurrentPath('documentos'));
        }}>
        <Button fullWidth variant="contained">
          Volver
        </Button>
      </Link>
    </Grid>
  );
};

export default NoTasksFoundMessage;

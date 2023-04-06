import { Alert, AlertTitle, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import NoDataImg from '../../assets/images/no-document.jpg';

const NoDocumetsType = () => {
  return (
    <Grid item>
      <Alert severity="info">
        <AlertTitle>No hay documentos existentes</AlertTitle>Esta categoría aun no cuenta con ningún
        documento
      </Alert>
      <img src={NoDataImg} alt="No Data" style={{ width: '100%' }} />
      <Link to={'/documentos'}>
        <Button fullWidth variant="contained">
          Volver
        </Button>
      </Link>
    </Grid>
  );
};

export default NoDocumetsType;

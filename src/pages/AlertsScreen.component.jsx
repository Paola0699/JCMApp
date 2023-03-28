import { Grid, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { AlertsTable } from '../components/Alerts/index';
import { ResponsiveAppBar } from '../components/Common';
import { getAlertsSuccess } from '../services/alertsService';

const AlertsScreen = () => {
  const [alertsList, setAlertsList] = useState([]);
  const handleGetAlerts = async () => {
    const response = await getAlertsSuccess();
    setAlertsList(response);
  };

  useEffect(() => {
    handleGetAlerts();
  }, []);

  return (
    <Grid container>
      <ResponsiveAppBar />
      <Grid
        container
        direction="column"
        style={{ backgroundColor: '#e5e8eb', height: '100vh' }}
        p={10}>
        <Grid item>
          <Box
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '40px'
            }}>
            <Typography variant="h4">Alertas</Typography>
            <Typography variant="subtitle2">
              En esta sección podrás encontrar las alertas correspondientes a todos los usuarios.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '30px',
              marginTop: '20px'
            }}>
            <AlertsTable alertsList={alertsList} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AlertsScreen;

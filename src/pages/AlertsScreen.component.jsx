import { Grid, Box, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AlertsTable } from '../components/Alerts/index';
import { ResponsiveAppBar } from '../components/Common';
const auth = getAuth();

const AlertsScreen = () => {
  const [user, setUser] = useState({});
  const { user: userRole } = useSelector((state) => state.auth);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  return user && userRole?.type === 'admin' ? (
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
            <AlertsTable />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};
export default AlertsScreen;

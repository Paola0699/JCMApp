import { Grid, Typography } from '@mui/material';
import Logo from '../../assets/images/logo-white.png';

const LoginHeader = ({ title, subtitle }) => {
  return (
    <Grid item display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <img alt="img-logo" src={Logo} style={{ width: '10%', marginBottom: '10px' }} />
      <Typography style={{ fontWeight: '200' }} variant="h3" textAlign="center">
        {title}
      </Typography>
      <Typography variant="subtitle1" textAlign="center" sx={{ mb: 3 }}>
        {subtitle}
      </Typography>
    </Grid>
  );
};
export default LoginHeader;

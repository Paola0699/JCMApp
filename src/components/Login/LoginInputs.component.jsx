import {
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginInputs = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid item display="flex" alignItems="center" justifyContent="center">
      <Grid container p={4}>
        <Grid item xs={12}>
          <InputLabel>Email</InputLabel>
          <TextField
            fullWidth
            color="primary"
            id="USER"
            name="USER"
            label="Email"
            variant="outlined"
            margin="normal"
            size="small"
            value={formik.values.USER}
            onChange={formik.handleChange}
            error={formik.touched.USER && Boolean(formik.errors.USER)}
            helperText={formik.touched.USER && formik.errors.USER}
            autoFocus={false}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Contraseña</InputLabel>
          <OutlinedInput
            fullWidth
            label="Contraseña"
            id="PASSWORD"
            name="PASSWORD"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.PASSWORD}
            onChange={formik.handleChange}
            error={formik.touched.PASSWORD && Boolean(formik.errors.PASSWORD)}
            helperText={formik.touched.PASSWORD && formik.errors.PASSWORD}
            autoFocus={false}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} style={{ color: 'white' }} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} style={{ color: 'white' }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Link style={{ color: 'white' }} to={'/resetpassword'}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LoginInputs;

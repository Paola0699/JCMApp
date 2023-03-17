import { Grid, TextField } from '@mui/material'

const LoginInputs = ({ formik }) => {
    return (
        <Grid item direction='column' display='flex' alignItems='center' justifyContent='center'>
            <Grid container>
            <Grid item xs={12}>
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
                <TextField
                    fullWidth
                    color="primary"
                    id="PASSWORD"
                    name="PASSWORD"
                    label="Contraseña"
                    variant="outlined"
                    type='password'
                    margin="normal"
                    size="small"
                    value={formik.values.PASSWORD}
                    onChange={formik.handleChange}
                    error={formik.touched.PASSWORD && Boolean(formik.errors.PASSWORD)}
                    helperText={formik.touched.PASSWORD && formik.errors.PASSWORD}
                    autoFocus={false}
                />
            </Grid>
            </Grid>
        </Grid>
    )
}
export default LoginInputs

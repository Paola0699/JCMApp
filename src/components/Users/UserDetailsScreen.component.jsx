import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ResponsiveAppBar } from "../Common";
import UserDetailsTable from "./UserDetailsTable.component";

const UserDetailsScreen = () => {
  return (
    <Grid container>
      <ResponsiveAppBar />
      <Grid
        container
        direction="column"
        style={{ backgroundColor: "#e5e8eb", height: "100vh" }}
        p={10}
      >
        <Grid item>
          <Box
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "40px",
            }}
          >
            <Typography variant="h4">Nombre de Usuario</Typography>
            <Typography variant="subtitle2">
              En esta sección podrás encontrar los documentos con los que cuenta
              este usuario.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              marginTop: "20px",
            }}
          >
            <UserDetailsTable />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default UserDetailsScreen;

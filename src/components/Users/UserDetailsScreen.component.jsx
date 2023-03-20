import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetDocumentsSuccess } from "../../actions/userActions";
import { ResponsiveAppBar } from "../Common";
import UserDetailsTable from "./UserDetailsTable.component";

const UserDetailsScreen = () => {
  const dispatch = useDispatch();
  const { idUsuario } = useParams();
  const { selectedUser } = useSelector((state) => state.documents);
  useEffect(() => {
    dispatch(startGetDocumentsSuccess(idUsuario));
  }, [dispatch, idUsuario]);

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
            <Typography variant="h4">{selectedUser.name}</Typography>
            <Typography variant="subtitle2">
              {selectedUser.email} | {selectedUser.company}
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

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { startGetDocumentsSuccess } from "../actions/userActions";
import { ResponsiveAppBar } from "../components/Common";
import UserDetailsTable from "../components/Users/UserDetailsTable.component";
const auth = getAuth();

const UserDetailsScreen = () => {
  const dispatch = useDispatch();
  const { idUsuario } = useParams();
  const [user, setUser] = useState({});
  const { selectedUser } = useSelector((state) => state.documents);
  const { user: userRole } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startGetDocumentsSuccess(idUsuario));
  }, [dispatch, idUsuario]);

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  });
  return user && userRole?.type === "admin" ? (
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
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
};
export default UserDetailsScreen;

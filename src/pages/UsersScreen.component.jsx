import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { NewUserModal, UsersTable } from "../components/Users";
import { ResponsiveAppBar } from "../components/Common";
import { useSelector } from "react-redux";
const auth = getAuth();

const UsersScreen = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const { user: userRole } = useSelector((state) => state.auth);
  const onOpenModal = () => {
    setOpen(true);
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

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
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h3">Usuarios</Typography>
              <Typography variant="subtitle2">
                En esta sección podrás conocer la lista de usuarios así tambien
                como crear un nuevo usuario haciendo click sobre el botón Nuevo
                Usuario
              </Typography>
            </div>
            <Button size="small" variant="contained" onClick={onOpenModal}>
              Nuevo Usuario
            </Button>
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
            <UsersTable />
          </Box>
        </Grid>
      </Grid>
      <NewUserModal open={open} setOpen={setOpen} />
    </Grid>
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
};
export default UsersScreen;

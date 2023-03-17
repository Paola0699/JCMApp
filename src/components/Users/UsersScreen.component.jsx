import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { NewUserModal, UsersTable } from ".";

const UsersScreen = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };

  return (
    <Grid container>
      <Typography variant="h2">Usuarios</Typography>
      <Button variant="contained" onClick={onOpenModal}>
        Nuevo Usuario
      </Button>
      <UsersTable />
      <NewUserModal open={open} setOpen={setOpen} />
    </Grid>
  );
};
export default UsersScreen;

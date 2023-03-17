import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { usersTableHeaders } from ".";
import { getAllUsers } from "../../services/usersService";

const UsersTable = () => {
  const [usersList, setUsersList] = useState([]);
  const getUsers = async () => {
    const response = await getAllUsers();
    setUsersList(response);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {usersTableHeaders.map((header) => (
              <TableCell style={{ color: "#001E3C" }} key={header.id}>
                {header.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList &&
            usersList.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ color: "#001E3C" }}>{user.id}</TableCell>
                <TableCell style={{ color: "#001E3C" }}>{user.name}</TableCell>
                <TableCell style={{ color: "#001E3C" }}>
                  {user.company}
                </TableCell>
                <TableCell style={{ color: "#001E3C" }}>{user.email}</TableCell>
                <TableCell style={{ color: "#001E3C" }}>
                  <Button variant="contained" color="error">
                    Desactivar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;

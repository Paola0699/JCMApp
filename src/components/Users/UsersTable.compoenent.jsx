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
              <TableCell key={header.id}>{header.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList &&
            usersList.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button>Desactivar</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;

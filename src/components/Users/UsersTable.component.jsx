import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { usersTableHeaders } from '.';
import { getSelectedUser } from '../../actions/documentsActions';
import { getAllUsers } from '../../services/usersService';

const UsersTable = () => {
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState([]);
  const getUsers = async () => {
    const response = await getAllUsers();
    setUsersList(response);
  };
  const setSelectedUser = (user) => {
    dispatch(getSelectedUser(user));
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
              <TableCell style={{ color: '#001E3C' }} key={header.id}>
                {header.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList &&
            usersList.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={{ color: '#001E3C' }}>
                  <Link to={`/${user.id}`} onClick={() => setSelectedUser(user)}>
                    {user.id}
                  </Link>
                </TableCell>
                <TableCell style={{ color: '#001E3C' }}>{user.name}</TableCell>
                <TableCell style={{ color: '#001E3C' }}>{user.company}</TableCell>
                <TableCell style={{ color: '#001E3C' }}>{user.email}</TableCell>
                {/*  <TableCell style={{ color: "#001E3C" }}>
                  <Button variant="contained" color="error">
                    Desactivar
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;

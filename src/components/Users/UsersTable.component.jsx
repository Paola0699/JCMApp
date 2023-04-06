import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NoUsersFound, usersTableHeaders } from '.';
import { getSelectedUser } from '../../actions/documentsActions';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import app from '../../firebaseElements/firebase';
const db = getFirestore(app);

const UsersTable = () => {
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState([]);

  const setSelectedUser = (user) => {
    dispatch(getSelectedUser(user));
  };

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'accounts'), where('type', '==', 'user')), (snapshot) =>
        setUsersList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
    []
  );

  return (
    <Fragment>
      {usersList && usersList.length > 0 ? (
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
      ) : (
        <NoUsersFound />
      )}
    </Fragment>
  );
};
export default UsersTable;

import { Grid } from '@mui/material';
import { getAuth } from 'firebase/auth';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { NavBar } from '../components/Common';
import { NoTasksFoundMessage, TaskCard } from '../components/Tasks';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import app from '../firebaseElements/firebase';
const auth = getAuth();
const db = getFirestore(app);

const TasksScreen = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'alerts'),
          where('user', '==', currentUser.uid),
          where('status', '==', 'Pendiente')
        ),
        (snapshot) => setTasksList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
    []
  );
  return user && currentUser?.type === 'user' ? (
    <Fragment>
      <img
        alt="cover"
        style={{ width: '100%', height: '10rem', objectFit: 'cover' }}
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_538661656_367462.jpg"
      />
      <Grid container direction={'column'} spacing={2} padding={2}>
        {tasksList && tasksList?.length > 0 ? (
          tasksList?.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <NoTasksFoundMessage />
        )}
      </Grid>
      <NavBar />
    </Fragment>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};
export default TasksScreen;

import { Grid } from '@mui/material';
import { getAuth } from 'firebase/auth';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { NavBar } from '../components/Common';
import { TaskCard } from '../components/Tasks';
import { getTaksSuccess } from '../services/tasksService';
const auth = getAuth();

const TasksScreen = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [tasksList, setTasksList] = useState([]);
  const handleGetTasks = async () => {
    const respose = await getTaksSuccess(currentUser.uid);
    setTasksList(respose);
  };
  useEffect(() => {
    if (currentUser) handleGetTasks();

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);
  return user && currentUser?.type === 'user' ? (
    <Fragment>
      <img
        alt="cover"
        style={{ width: '100%', height: '10rem', objectFit: 'cover' }}
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_538661656_367462.jpg"
      />
      <Grid container direction={'column'} spacing={2} padding={2}>
        {tasksList?.map((task) => {
          if (task.status === 'Pendiente') {
            return <TaskCard key={task.id} task={task} />;
          }
        })}
      </Grid>
      <NavBar />
    </Fragment>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};
export default TasksScreen;

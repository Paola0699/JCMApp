import { faArrowRightFromBracket, faFile, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services/loginService';
import { useEffect, useState } from 'react';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import app from '../../firebaseElements/firebase';
import { setCurrentPath } from '../../actions/loginActions';
const db = getFirestore(app);

const NavBar = () => {
  const { user: currentUser, currentPath } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tasksList, setTasksList] = useState([]);
  const redirection = (url) => {
    navigate(`/${url}`);
  };
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
  const handleChange = (event, newValue) => {
    if (newValue !== 'logout') {
      redirection(newValue);
      dispatch(setCurrentPath(newValue));
    } else {
      logOut();
    }
  };
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
      <BottomNavigation
        showLabels
        sx={{ height: '5rem' }}
        value={currentPath}
        onChange={handleChange}>
        <BottomNavigationAction
          label="Documentos"
          icon={<FontAwesomeIcon icon={faFile} />}
          style={{
            color: currentPath?.path === 'documentos' ? '#4c6176' : '#a5b0ba',
            borderTop: currentPath?.path === 'documentos' && '2px solid #4c6176'
          }}
          value="documentos"
        />
        <BottomNavigationAction
          label="Tareas"
          style={{
            color: currentPath?.path === 'tareas' ? '#4c6176' : '#a5b0ba',
            borderTop: currentPath?.path === 'tareas' && '2px solid #4c6176'
          }}
          icon={
            <Badge badgeContent={tasksList?.length} color="success">
              <FontAwesomeIcon icon={faListCheck} />
            </Badge>
          }
          value="tareas"
        />
        <BottomNavigationAction
          label="Cerrar Sesión"
          style={{
            color: currentPath?.path === 'logout' ? '#4c6176' : '#a5b0ba'
          }}
          icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
          value="logout"
        />
      </BottomNavigation>
    </Paper>
  );
};
export default NavBar;

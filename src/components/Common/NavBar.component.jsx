import { faArrowRightFromBracket, faFile, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services/loginService';
import { useEffect, useState } from 'react';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import app from '../../firebaseElements/firebase';
const db = getFirestore(app);

const NavBar = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [tasksList, setTasksList] = useState([]);
  const redirection = (url) => {
    navigate(url);
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
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
      <BottomNavigation showLabels sx={{ height: '5rem' }}>
        <BottomNavigationAction
          onClick={() => redirection('/documentos')}
          label="Documentos"
          icon={<FontAwesomeIcon icon={faFile} />}
          style={{ color: '#4c6176' }}
        />
        <BottomNavigationAction
          onClick={() => redirection('/tareas')}
          label="Tareas"
          style={{ color: '#4c6176' }}
          icon={
            <Badge badgeContent={tasksList?.length} color="success">
              <FontAwesomeIcon icon={faListCheck} />
            </Badge>
          }
        />
        <BottomNavigationAction
          onClick={logOut}
          label="Cerrar Sesión"
          style={{ color: '#4c6176' }}
          icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default NavBar;

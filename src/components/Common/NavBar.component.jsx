import { faArrowRightFromBracket, faFile, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services/loginService';

const NavBar = () => {
  const navigate = useNavigate();
  const redirection = (url) => {
    navigate(url);
  };
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => redirection('/documentos')}
          label="Documentos"
          icon={<FontAwesomeIcon icon={faFile} />}
        />
        <BottomNavigationAction label="Tareas" icon={<FontAwesomeIcon icon={faListCheck} />} />
        <BottomNavigationAction
          onClick={logOut}
          label="Cerrar Sesión"
          icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default NavBar;

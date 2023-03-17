import { faArrowRightFromBracket, faFile, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebaseElements/firebase";
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const NavBar = () => {
    const navigate = useNavigate();
    const logOut = () => {
        signOut(auth).then(() => {
            console.log('se cerro la sesion');
        }).catch((error) => {
            console.log(error);
        })
    }
    const redirection = (url) => {
        navigate(url);
    }
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction onClick={() => redirection('/documentos')} label="Documentos" icon={<FontAwesomeIcon icon={faFile} />} />
                <BottomNavigationAction label="Tareas" icon={<FontAwesomeIcon icon={faListCheck} />} />
                <BottomNavigationAction onClick={logOut} label="Cerrar Sesión" icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />} />
            </BottomNavigation>
        </Paper>
    );
}
export default NavBar

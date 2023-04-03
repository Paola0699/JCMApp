import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getAuth } from 'firebase/auth';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { startGetDocumentsSuccess } from '../actions/userActions';
import NewAlertModal from '../components/Alerts/NewAlertModal.component';
import { ResponsiveAppBar } from '../components/Common';
import UserDetailsTable from '../components/Users/UserDetailsTable.component';
const auth = getAuth();

const UserDetailsScreen = () => {
  const dispatch = useDispatch();
  const { idUsuario } = useParams();
  const [user, setUser] = useState({});
  const { selectedUser } = useSelector((state) => state.documents);
  const { user: userRole } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(startGetDocumentsSuccess(idUsuario));
  }, [dispatch, idUsuario]);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return user && userRole?.type === 'admin' ? (
    <Fragment>
      <ResponsiveAppBar />
      <Grid container style={{ backgroundColor: '#e5e8eb' }} direction={'column'} p={10}>
        <Grid item>
          <Box
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <div>
              <Typography variant="h4">{selectedUser.name}</Typography>
              <Typography variant="subtitle2">
                {selectedUser.email} | {selectedUser.company}
              </Typography>
            </div>
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faBell} />}
              onClick={handleOpen}>
              Alerta
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '30px',
              marginTop: '20px'
            }}>
            <UserDetailsTable />
          </Box>
        </Grid>
      </Grid>
      <NewAlertModal open={openModal} setOpen={setOpenModal} />
    </Fragment>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};
export default UserDetailsScreen;

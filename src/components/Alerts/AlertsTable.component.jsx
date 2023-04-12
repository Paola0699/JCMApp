import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box
} from '@mui/material';
import { headerTitles } from '.';
import moment from 'moment';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postEditTask } from '../../services/tasksService';
import { SuccessAlert } from '../Common/SuccessAlert';
import { Fragment, useEffect, useState } from 'react';
import { getAlertsSuccess } from '../../services/alertsService';
import NoAlertsFound from './NoAlertsFound.component';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingAlerts } from '../../actions/loadingActions';

const AlertsTable = () => {
  const dispatch = useDispatch();
  const { loadingAlerts } = useSelector((state) => state.loading);
  const [alertsList, setAlertsList] = useState([]);
  const handleGetAlerts = async () => {
    dispatch(setLoadingAlerts(true));
    const response = await getAlertsSuccess();
    setAlertsList(response);
    dispatch(setLoadingAlerts(false));
  };
  useEffect(() => {
    handleGetAlerts();
  }, []);

  const handleEditAlert = async (alert) => {
    try {
      await postEditTask(alert.id);
      handleGetAlerts();
      SuccessAlert('Alerta Editada', 'Se ha editado la alerta con éxito');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {loadingAlerts ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : alertsList && alertsList.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headerTitles.map((headerTitle) => (
                  <TableCell style={{ color: '#001E3C' }} key={headerTitle.id}>
                    {headerTitle.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {alertsList?.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell style={{ color: '#001E3C' }}>{alert.title}</TableCell>
                  <TableCell style={{ color: '#001E3C' }}>{alert.description}</TableCell>
                  <TableCell style={{ color: '#001E3C' }}>{alert.userName}</TableCell>
                  <TableCell style={{ color: '#001E3C' }}>
                    {' '}
                    {moment(alert?.date?.seconds * 1000).format('DD MMMM YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={alert.status === 'Pendiente' ? 'error' : 'success'}
                      label={alert.status}
                    />
                    {alert.status === 'Pendiente' && (
                      <IconButton
                        aria-label="delete"
                        color="success"
                        onClick={() => handleEditAlert(alert)}>
                        <FontAwesomeIcon icon={faCheck} />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoAlertsFound />
      )}
    </Fragment>
  );
};
export default AlertsTable;

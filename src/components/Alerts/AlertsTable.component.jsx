import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { headerTitles } from '.';
import moment from 'moment';

const AlertsTable = ({ alertsList }) => {
  return (
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AlertsTable;

import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <Grid item>
      <Card elevation={0} style={{ backgroundColor: '#fbfbfb', borderBottom: '2px solid #eceff1' }}>
        <CardContent>
          <Grid container>
            <Grid item xs={5}>
              <Typography style={{ color: '#001E3C', fontWeight: 'bold' }} variant="subtitle1">
                {task.title}
              </Typography>
              <Typography style={{ color: '#001E3C' }} variant="subtitle2">
                {task.description}
              </Typography>
              <Chip color={task.status === 'Pendiente' ? 'error' : 'success'} label={task.status} />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="subtitle2" textAlign="right">
                {moment(task?.date?.seconds * 1000).format('DD MMMM YYYY')}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default TaskCard;

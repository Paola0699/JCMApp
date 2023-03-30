import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography style={{ color: '#001E3C' }} variant="h6">
            {task.title}
          </Typography>
          <Typography style={{ color: '#001E3C' }} variant="subtitle2">
            {task.description}
          </Typography>
          <Chip color={task.status === 'Pendiente' ? 'error' : 'success'} label={task.status} />
        </CardContent>
      </Card>
    </Grid>
  );
};
export default TaskCard;

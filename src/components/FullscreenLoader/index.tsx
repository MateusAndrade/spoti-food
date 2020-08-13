import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Props } from './interface';

const FullscreenLoader = ({ message }: Props) => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Box>
        <CircularProgress style={{ width: 50, height: 50 }} />
      </Box>
      {message ? <Typography>{message}</Typography> : null}
    </Box>
  </Grid>
);

export default FullscreenLoader;

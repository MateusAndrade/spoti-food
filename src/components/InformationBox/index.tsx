import React from 'react';

import { Box, Button, Typography, Paper } from '@material-ui/core';

import { Props } from './interface';

import Welcome from '../Illustration/Welcome';

const InformationBox = ({ description, buttonTitle, onClick }: Props) => (
  <Paper>
    <Box
      display="flex"
      flexDirection="column"
      padding="20px"
      width="300px"
      alignItems="center">
      <Welcome width={200} height={200} />
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box marginBottom="10px">
          <Typography align="center">{description}</Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={onClick}>
          {buttonTitle}
        </Button>
      </Box>
    </Box>
  </Paper>
);

export default InformationBox;

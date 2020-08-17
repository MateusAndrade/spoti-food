import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Filters } from '../../components';

import * as thunks from '../../store/thunks';
import Grid from '@material-ui/core/Grid';

const PlayslistsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.getPlaylistFilters());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Filters />
      </Grid>
    </Grid>
  );
};

export default PlayslistsView;

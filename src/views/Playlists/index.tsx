import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Filters, Playlist } from '../../components';

import * as thunks from '../../store/thunks';
import * as selectors from '../../store/reducers/selectors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 100,
      marginBottom: 60,
    },
    loader: {
      marginTop: 10,
      marginBottom: 10,
    },
  }),
);

const PlayslistsView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const featuredMessage = useSelector(selectors.getPlaylistsMessage);
  const playlists = useSelector(selectors.getPlaylists);
  const { loading } = useSelector(selectors.getPlaylistState);

  useEffect(() => {
    dispatch(thunks.getPlaylistFilters());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Filters />
      </Grid>
      <Grid item xs={12} className={classes.root}>
        <Typography align="center" variant="h6">
          {featuredMessage}
        </Typography>
        {playlists.map((playlist, index) => (
          <Playlist key={index} {...playlist} />
        ))}
        {loading && (
          <Box
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="center">
            <CircularProgress size={30} className={classes.loader} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default PlayslistsView;

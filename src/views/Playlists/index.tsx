import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as thunks from '../../store/thunks';

const PlayslistsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.getPlaylistFilters());
  }, [dispatch]);

  return <div>Playlists</div>;
};

export default PlayslistsView;

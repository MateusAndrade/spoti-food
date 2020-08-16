import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const ProfileView = () => {
  return (
    <Grid container>
      <Grid item>
        <Avatar
          alt="Remy Sharp"
          src="https://avatars2.githubusercontent.com/u/15278828?s=460&u=0e0c707ec9a814def7f53b28c3186575d3d3703d&v=4"
          style={{ width: 150, height: 150 }}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileView;

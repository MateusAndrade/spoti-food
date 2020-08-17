import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';

import { Props } from './interface';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  media: {
    width: 100,
    height: 100,
  },
});

const Playlist = ({ description, name, images, external_urls }: Props) => {
  const classes = useStyles();

  const playlistImage = images[0].url;

  const goToPlaylist = () => {
    window.open(external_urls.spotify);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={playlistImage} title={name} />
      <Box
        alignItems="center"
        display="flex"
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        maxHeight="100px"
        paddingRight="20px">
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
        <ArrowForward onClick={goToPlaylist} />
      </Box>
    </Card>
  );
};

export default Playlist;

import React from 'react';

import { Props } from './interface';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 130,
    width: 130,
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    borderBottom: '1px solid #e0e0e0',
  },
}));

const UserCard = ({ image, name, followers }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={image} alt={name} />
      <Typography variant="h6">{name}</Typography>
    </div>
  );
};

export default UserCard;

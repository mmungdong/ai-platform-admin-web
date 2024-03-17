import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'url("./assets/images/auth/th.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '50%',
    height: '100vh',
  },
});

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}></div>
  );
};

export default BackgroundImage;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  contactButton: {
    ...theme.typography.contactButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  // estimateButton: {
  //   ...theme.typography.estimate,
  //   borderRadius: 50,
  //   height: 80,
  //   width: 205,
  //   backgroundColor: theme.palette.common.orange,
  //   fontSize: '1.5rem',
  //   marginRight: '5em',
  //   marginLeft: '2em',
  //   '&:hover': {
  //     backgroundColor: theme.palette.secondary.light,
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     marginLeft: 0,
  //     marginRight: 0,
  //   },
  // },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: '1.5rem' }}
            >
              Make a technological splash.
            </Typography>
            <Grid
              container
              justify={matchesSM ? 'center' : undefined}
              item
            >
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                className={classes.contactButton}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Contact Me</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}

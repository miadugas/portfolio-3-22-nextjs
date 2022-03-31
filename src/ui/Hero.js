import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import hero from '../../assets/hero.png';
import heroMobile from '../../assets/heromobile.png';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';

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
  background: {
    backgroundImage: `url(${hero})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${heroMobile})`,
    },
  },
  heroText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '2rem',
    color: 'black',
  },
  specialText: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: '2.5rem',
    color: theme.palette.common.red,
  },
  icon: {
    height: '2em',
    width: '2em',
    [theme.breakpoints.down('xs')]: {
      height: '1.5em',
      width: '1.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
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
            <Typography className={classes.heroText} justify="center">
              I'm <span className={classes.specialText}> Mia</span>
              <br />
            </Typography>
            <Typography className={classes.heroText} justify="center">
              a Colorado based Full Stack
              <br />
            </Typography>
            <Typography className={classes.heroText} justify="center">
              Developer creating
              <span className={classes.specialText}> AWESOME!</span>
            </Typography>
            <br />
            <Grid spacing={2} container justify="center" item>
              <Grid
                item
                component={'a'}
                href="https://www.github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="github logo"
                  src={github}
                  className={classes.icon}
                />
              </Grid>
              <Grid
                item
                component={'a'}
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="linkedin logo"
                  src={linkedin}
                  className={classes.icon}
                />
              </Grid>
              <Grid
                item
                component={'a'}
                href="https://www.twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="twitter logo"
                  src={twitter}
                  className={classes.icon}
                />
              </Grid>
              <Grid
                item
                component={'a'}
                href="https://www.dribbble.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="dribbble logo"
                  src={dribbble}
                  className={classes.icon}
                />
              </Grid>
              {/* <Button
                // component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
                // onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                  padding= '5'
                />
              </Button> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../ui/ButtonArrow';
import Tooltip from '@material-ui/core/Tooltip';

import tech from '../../assets/infoBackground.svg';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${tech})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  bannerText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '2rem',
    color: 'black',
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  techCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

export default function TechPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid item>
      <Grid item className={classes.background}>
        <Grid item>
          <Grid
            container
            direction="row"
            //style={{padding: 10px}}
            justify="center"
          >
            <Typography
            variant="h2" style={{ color: 'white', fontSize: '2.5rem' }}
            >
              Languages,Frameworks & Tools
            </Typography>
          </Grid>
          <Grid item>
            <hr />
          </Grid>{' '}
          {/*-----Programming Icon Block-----*/}
          <Grid container style={{ fontSize: '4.25rem' }}>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="React" placement="bottom-end">
                <i className="devicon-react-original-wordmark"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Redux" placement="bottom-end">
                <i className="devicon-redux-original colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="AngularJS" placement="bottom-end">
                <i className="devicon-angularjs-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Azure" placement="bottom-end">
                <i className="devicon-azure-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="CSS3" placement="bottom-end">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Dart" placement="bottom-end">
                <i className="devicon-dart-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title=".NetCore" placement="bottom-end">
                <i className="devicon-dotnetcore-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="ExpressJS" placement="bottom-end">
                <i className="devicon-express-original-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Flutter" placement="bottom-end">
                <i className="devicon-flutter-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Gatsby" placement="bottom-end">
                <i className="devicon-gatsby-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Github" placement="bottom-end">
                <i className="devicon-github-original-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Heroku" placement="bottom-end">
                <i className="devicon-heroku-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Ionic" placement="bottom-end">
                <i className="devicon-ionic-original-wordmark"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="JavaScript" placement="bottom-end">
                <i className="devicon-javascript-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Jest" placement="bottom-end">
                <i className="devicon-jest-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="MaterialUI" placement="bottom-end">
                <i className="devicon-materialui-plain colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="MongoDB" placement="bottom-end">
                <i className="devicon-mongodb-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="NextJS" placement="bottom-end">
                <i className="devicon-nextjs-original-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Sass" placement="bottom-end">
                <i className="devicon-sass-original colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Sequelize" placement="bottom-end">
                <i className="devicon-sequelize-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="MS SQL Server" placement="bottom-end">
                <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="VSCode" placement="bottom-end">
                <i className="devicon-vscode-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Python" placement="bottom-end">
                <i className="devicon-python-plain-wordmark"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Visual Studio" placement="bottom-end">
                <i className="devicon-visualstudio-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="PostgreSQL" placement="bottom-end">
                <i className="devicon-postgresql-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="Adobe XD" placement="bottom-end">
                <i className="devicon-xd-line colored"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="AWS" placement="bottom-end">
                <i className="devicon-amazonwebservices-plain-wordmark"></i>
              </Tooltip>
            </Grid>
            <Grid item style={{ padding: '15px' }}>
              <Tooltip title="HTML5" placement="bottom-end">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>{' '}
        {/*-----Service Block-----*/}
        <Grid item>
          <Grid item>
            <Grid
              container
              style={{ marginTop: '1em' }}
              direction="row"
              justify="center"
            >
              <Typography variant="h2" style={{ color: 'white', fontSize: '2.5rem' }}>
                My Services
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="center">
              <Typography variant="h4" style={{ color: 'white', fontSize: '1.5rem' }}>
                Simple Software. Revolutionary Results
              </Typography>
            </Grid>
            <hr />
          </Grid>{' '}
          {/*-----Custom Software Block-----*/}
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : undefined}
            style={{ padding: '40px' }}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">
                Custom Software Development
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
              >
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{' '}
                <span className={classes.specialText}>
                  celebration.
                </span>
              </Typography>

              <Button
                component={Link}
                to="/customsoftware"
                variant="outlined"
                className={classes.learnButton}
                // onClick={() => {
                //   props.setValue(1);
                //   props.setSelectedIndex(1);
                // }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="custom software icon"
                src={customSoftwareIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----iOS/Android Block-----*/}
          <Grid
            container
            style={{ padding: '40px' }}
            direction="row"
            justify={matchesSM ? 'center' : 'flex-end'}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">
                iOS/Android App Development
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
              >
                Extend Functionality. Extend Access. Increase
                Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone
                app
                {matchesSM ? null : <br />}with either mobile
                platform.
              </Typography>
              <Button
                component={Link}
                to="/mobileapps"
                variant="outlined"
                className={classes.learnButton}
                // onClick={() => {
                //   props.setValue(1);
                //   props.setSelectedIndex(2);
                // }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                className={classes.icon}
                alt="mobile phone icon"
                src={mobileAppsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----Websites Block-----*/}
          <Grid
            container
            direction="row"
            style={{ padding: '40px' }}
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">
                Website Development
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
              >
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                // onClick={() => {
                //   props.setValue(1);
                //   props.setSelectedIndex(3);
                // }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="website icon"
                src={websitesIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

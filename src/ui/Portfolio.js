import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { blue } from '@material-ui/core/colors';

import port from '../../assets/repeatingBackground.svg';
import muse from '../../assets/muse.png';
import loftz from '../../assets/iloftz.png';
import tffa from '../../assets/tffa01.png';
import survey from '../../assets/prodview.png';
import marbas from '../../assets/marbas.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${port})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  card: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '1em',
    marginTop: '2.5em',
    marginRight: '2.5em',
    maxWidth: 345,
  },
  // background: {
  //   backgroundImage: `url(${port})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   height: '100%',
  //   width: '100%',
  // }
}));

export default function PortfolioPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  //
  return (
    <Grid item>
      {/*-----Portfolio Block-----*/}
      <Grid
        container
        direction="column"
        style={{ padding: '40px' }}
        //style={{ height: "60em" }}
        alignItems="center"
        className={classes.background}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ textAlign: 'center' }}
          >
            <Grid item>
              <Typography variant="h2" style={{ color: 'black' }}>
                Portfolio of Work
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" style={{ color: 'black' }}>
                Simple Software. Revolutionary Results
              </Typography>
            </Grid>
            <br />
          </Grid>
        </Grid>

        {/*-----Card Block-1----*/}
        <Grid item>
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : 'flex-end'}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Tooltip title="React" placement="top">
                    <Avatar
                      src={
                        'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                      }
                      aria-label="loftz"
                    ></Avatar>
                  </Tooltip>
                }
                title="SurveyMe "
                subheader="September 14, 2016"
              />

              <CardMedia
                component="img"
                height="194"
                src={survey}
                alt="survey App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SurveyMe
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles,
                  with over 6,000 species, ranging across all
                  continents except Antarctica Lizards are a
                  widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
              <hr />
              <CardActions disableSpacing>
                <Button size="small" color="default">
                  View Code
                </Button>
                <Button size="small" color="default">
                  Live Demo
                </Button>
              </CardActions>
            </Card>

            {/*-----Card Block 2-----*/}
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Tooltip title="AngularJS" placement="top">
                    <Avatar
                      src={
                        'https://pngimage.net/wp-content/uploads/2020/03/angular-8-logo-png-2.png'
                      }
                      aria-label="loftz"
                    ></Avatar>
                  </Tooltip>
                }
                title="Loftz"
                subheader="September 14, 2016"
              />

              <CardMedia
                component="img"
                height="194"
                src={loftz}
                alt="loftz App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Loftz
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles,
                  with over 6,000 species, ranging across all
                  continents except Antarctica Lizards are a
                  widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
              <hr />
              <CardActions disableSpacing>
                <Button size="small" color="default">
                  View Code
                </Button>
                <Button size="small" color="default">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            {/*-----Card Block 3-----*/}
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Tooltip title="React" placement="top">
                    <Avatar
                      src={
                        'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                      }
                      aria-label="loftz"
                    ></Avatar>
                  </Tooltip>
                }
                title="Tim Furlow Fine Art"
                subheader="September 14, 2016"
              />

              <CardMedia
                component="img"
                height="194"
                src={tffa}
                alt="loftz App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Tim Furlow Fine Art
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                >
                  Custom Ecommerce site for Tim Furlow Fine Art.
                  Includes an admin area to manage orders, users &
                  inventory. Payment processing through PayPal
                </Typography>
              </CardContent>
              <hr />
              <CardActions disableSpacing>
                <Button size="small" color="default">
                  View Code
                </Button>
                <Button size="small" color="default">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        {/*-----Card Block-4----*/}
        <Grid item>
          <Grid
            container
            direction="row"
            justify={matchesSM ? 'center' : 'flex-end'}
          >
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Tooltip title="React" placement="top">
                    <Avatar
                      src={
                        'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                      }
                      aria-label="marbas"
                    ></Avatar>
                  </Tooltip>
                }
                title="Marbas "
                subheader="September 14, 2016"
              />

              <CardMedia
                component="img"
                height="194"
                src={marbas}
                alt="crypto App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Marbas
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                >
                  Cryptocurrency Dashboard built in React. Using
                  localStorage the app greets the user on first visit,
                  asking them to choose their favorite Coins. Coin
                  search provided by fuzzy search. User can add/remove
                  coins on the list of favorites. Confirm Favorite
                  Coin Remembers values for the user & generates
                  dashboard prices & historical data. The dashboard
                  data initializes from remembered favorites. User can
                  line chart render historical points on Date: Days
                  Weeks Months.
                </Typography>
              </CardContent>
              <hr />
              <CardActions disableSpacing>
                <Button size="small" color="default">
                  View Code
                </Button>
                <Button size="small" color="default">
                  Live Demo
                </Button>
              </CardActions>
            </Card>

            {/*-----Card Block 5-----*/}
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Tooltip title="React" placement="top">
                    <Avatar
                      src={
                        'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                      }
                      aria-label="loftz"
                    ></Avatar>
                  </Tooltip>
                }
                title="SurveyMe "
                subheader="September 14, 2016"
              />

              <CardMedia
                component="img"
                height="194"
                src={survey}
                alt="survey App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SurveyMe
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                >
                  A feedback collection application for small business
                  owners. User (Owner) buys credits and does not have
                  to signup for a subscription based service. Once
                  credits are purchased, the user may create an email
                  campaign survey to a list of customers that they
                  have entered. Campaign results are tabulated and the
                  user is provided with a report of survey responses.
                </Typography>
              </CardContent>
              <hr />
              <CardActions disableSpacing>
                <Button size="small" color="default">
                  View Code
                </Button>
                <Button size="small" color="default">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            {/*-----Card Block 6-----*/}
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Tooltip title="React" placement="top">
                    <Avatar
                      src={
                        'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                      }
                      aria-label="muse"
                    ></Avatar>
                  </Tooltip>
                }
                title="Muse Real Time Chat"
                subheader="September 14, 2016"
              />

              <CardMedia
                component="img"
                height="194"
                src={muse}
                alt="muse App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Muse
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                >
                  Realtime Jamstack chat application. A realtime chat
                  Jamstack application with server side deployed to
                  Heroku and client side deployed to Netlify & Github.
                  This standalone application can be easily integrated
                  into existing or new builds.
                </Typography>
              </CardContent>
              <hr />
              <CardActions disableSpacing>
                <Button size="small" color="default">
                  View Code
                </Button>
                <Button size="small" color="default">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

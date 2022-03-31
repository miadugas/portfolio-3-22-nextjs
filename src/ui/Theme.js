import { createMuiTheme } from '@material-ui/core/styles';

const miaRed = '#7D2F20';
const miaOrange = '#FF9782';
const miaLight = '#FFD7CF';
const miaGrey = '#716E6E';

export default createMuiTheme({
  palette: {
    common: {
      red: `${miaRed}`,
      orange: `${miaOrange}`,
      orange2: '#F6B055',
    },
    primary: {
      main: `${miaOrange}`,
    },
    secondary: {
      main: `${miaRed}`,
    },
    frame: {
      main: '#716E6E',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
      fontWeight: 700,
      color: 'black',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'League+Spartan',
      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'black',
    },
    h1: {
      fontFamily: 'League+Spartan',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: 'black',
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: 'League+Spartan',
      fontWeight: 700,
      fontSize: '1.75rem',
      color: 'black',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Arimo',
      fontSize: '2.5rem',
      color: miaLight,
    },
    h4: {
      fontFamily: 'League+Spartan',
      fontSize: '1.75rem',
      color: miaRed,
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 400,
      color: 'black',
    },
    h6: {
      fontFamily: 'League+Spartan',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: 'white',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'black',
    },
    body1: {
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1.25rem',
      color: 'black',
      fontWeight: 400,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: miaLight,
    },
    learnButton: {
      borderColor: miaRed,
      borderWidth: 2,
      textTransform: 'none',
      color: miaRed,
      borderRadius: 50,
      fontFamily: 'Arimo',
      fontWeight: 'bold',
    },
    contactButton: {
      borderColor: miaLight,
      borderWidth: 2,
      textTransform: 'none',
      color: miaLight,
      borderRadius: 50,
      fontFamily: 'Arimo',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: miaGrey,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: 'black',
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${miaOrange}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${miaOrange}`,
        },
      },
    },
  },
});

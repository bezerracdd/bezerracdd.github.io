import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#e68a00",
    },
    secondary: {
      main: "#878f99", 
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
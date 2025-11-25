import { createTheme } from '@mui/material/styles';

const holidayTheme = createTheme({
  palette: {
    primary: { main: '#D32F2F' },       // festive red
    secondary: { main: '#388E3C' },     // evergreen green
    background: {
      default: '#E3F2FD',  // icy light blue instead of cream
      paper: '#FFFFFF',    // clean white paper
    },
    error: { main: '#FFD700' },         // golden accent
  },
  typography: {
    fontFamily: '"Comic Sans MS", "Arial", sans-serif',
  },
});

export default holidayTheme;

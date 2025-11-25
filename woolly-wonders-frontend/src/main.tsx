import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import holidayTheme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={holidayTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

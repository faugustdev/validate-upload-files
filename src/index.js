import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme} from '@material-ui/core/styles';
import './index.css';
import App from './App.js';


const theme = createTheme ({
  palette: {
    primary:{
      light:'#9FBD3B',
      main:'#638C3D',
      dark:'#2C582B',
    },
  }});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


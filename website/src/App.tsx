`use strict`;
import React from 'react';
import Typography from '@mui/joy/Typography';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createTheme, ThemeProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';




const TEXT = main();





function App() 
{

  return TEXT;
  export default main;
}









  function main () 
  {
    console.log('Main function called');
    console.log('Hello, World!');
     return (
         <header>
      <h1 id='header'>
        <Typography React component="h1" level="h1" sx={{ fontWeight: 'xl', fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)' }}>
          sx={{
            fontWeight: 'xl',
            fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
textAlign: 'center', marginTop: '20px' }}
          Welcome to SAPID Research
        </Typography>
      </h1>
      </header>
    );
    console.log('Header component rendered');
  }    
   
export default App;
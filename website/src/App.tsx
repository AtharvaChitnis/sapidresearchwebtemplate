import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@mui/joy/Typography';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
  function main() {
    console.log('Main function called');
    console.log('Hello, World!');
    return (
      // Returning a Typography component with specific styles
      <h1 id='header'>
        <Typography
          level='h1'
          sx={{-
            fontWeight: 'xl',
            fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
          }}
        >
          Welcome to SAPID Research
        </Typography>
      </h1>
    );
  }
  // Main function to log a message and return a styled Typography component
  main(); // main function called to execute its logic
}

export default App;

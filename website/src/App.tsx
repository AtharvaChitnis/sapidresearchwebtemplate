import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { extendTheme, ThemeProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from './components/Main';
import LandingPage from './components/LandingPage';
import ErrorBoundary from './components/ErrorBoundary';
import { THEME } from './constants';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          plainColor: THEME.colors.primary.main,
          plainHoverBg: `rgba(46, 125, 50, 0.1)`,
          plainActiveBg: `rgba(46, 125, 50, 0.2)`,
          plainDisabledColor: `rgba(46, 125, 50, 0.5)`,
          outlinedColor: THEME.colors.primary.main,
          outlinedBorder: THEME.colors.primary.main,
          outlinedHoverBg: `rgba(46, 125, 50, 0.1)`,
          outlinedHoverBorder: THEME.colors.primary.dark,
          outlinedActiveBg: `rgba(46, 125, 50, 0.2)`,
          solidBg: THEME.colors.primary.main,
          solidHoverBg: THEME.colors.primary.dark,
          solidActiveBg: THEME.colors.primary.dark,
          solidDisabledBg: `rgba(46, 125, 50, 0.5)`,
        },
        background: {
          body: THEME.colors.background.default,
          surface: THEME.colors.background.paper,
        },
        text: {
          primary: THEME.colors.text.primary,
          secondary: THEME.colors.text.secondary,
        },
      },
    },
  },
  fontFamily: {
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    display:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.md,
          transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.lg,
          transition: `all ${THEME.transitions.duration.medium}ms ${THEME.transitions.easing.easeInOut}`,
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: THEME.borderRadius.md,
        },
      },
    },
  },
});

function App() {
  useEffect(() => {
    // Add CSP meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content =
      "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'";
    document.head.appendChild(meta);

    // Add preconnect links for performance
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectGoogle);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectGstatic);

    // Add Inter font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(preconnectGoogle);
      document.head.removeChild(preconnectGstatic);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionGroup>
          <CSSTransition
            timeout={THEME.transitions.duration.medium}
            classNames='page'
          >
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/main' element={<Main />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

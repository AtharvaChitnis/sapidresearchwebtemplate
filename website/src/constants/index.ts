export const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/', ariaLabel: 'Navigate to home page' },
  { label: 'About', path: '#about', ariaLabel: 'Learn about us' },
  { label: 'Services', path: '#services', ariaLabel: 'View our services' },
  { label: 'Contact', path: '#contact', ariaLabel: 'Contact us' },
];

export const TESTIMONIALS = [
  {
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    quote:
      'SAPID Research provided invaluable insights that transformed our market strategy.',
  },
  {
    author: 'Michael Chen',
    role: 'CEO',
    quote:
      'Their data-driven approach helped us identify key growth opportunities.',
  },
  {
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    quote:
      'The depth of their research and analysis exceeded our expectations.',
  },
];

export const THEME = {
  colors: {
    accent: {
      light: '#E8F5E9', // Light green
      main: '#4CAF50', // Material Green
      dark: '#2E7D32', // Dark green
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
    },
    primary: {
      light: '#E3F2FD', // Lighter blue
      main: '#2196F3', // Material Blue
      dark: '#1565C0', // Darker blue
      gradient: 'linear-gradient(135deg, #2196F3 0%, #1565C0 100%)',
    },
    secondary: {
      light: '#F3E5F5', // Light purple
      main: '#9C27B0', // Material Purple
      dark: '#6A1B9A', // Dark purple
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
      gradient: 'linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%)',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      hint: '#9E9E9E',
    },
  },
  spacing: {
    section: {
      vertical: {
        xs: '2rem', // 32px
        sm: '3rem', // 48px
        md: '4rem', // 64px
        lg: '6rem', // 96px
      },
      horizontal: {
        xs: '1rem', // 16px
        sm: '2rem', // 32px
        md: '3rem', // 48px
        lg: '4rem', // 64px
      },
    },
    grid: {
      xs: '1rem', // 16px
      sm: '1.5rem', // 24px
      md: '2rem', // 32px
      lg: '3rem', // 48px
    },
  },
  transitions: {
    duration: {
      short: 200,
      medium: 300,
      long: 500,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.1)',
    lg: '0 8px 16px rgba(0,0,0,0.1)',
    xl: '0 12px 24px rgba(0,0,0,0.1)',
  },
};

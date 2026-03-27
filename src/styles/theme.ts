export const lightTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    background: '#ffffff',
    text: '#333333',
    lightGray: '#f5f5f5',
    border: '#eaeaea',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export const darkTheme = {
  colors: {
    primary: '#3291ff',
    secondary: '#ffffff',
    background: '#121212',
    text: '#ededed',
    lightGray: '#222222',
    border: '#333333',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof lightTheme;

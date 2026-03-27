import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-light: ${({ theme }) => theme.colors.primary}20;
    --color-white: #ffffff;
    --color-gray-100: #f5f5f5;
    --color-gray-400: #a0a0a0;
    --color-gray-600: #666666;
    --color-gray-800: #333333;
    --color-gray-900: #111111;
    --color-main-300: #66a3ff;
    --color-main-600: ${({ theme }) => theme.colors.primary};
    --color-main-700: #0056b3;
    
    --color-title: ${({ theme }) => theme.colors.text};
    --color-warning: #ff9800;
    --color-error: #f44336;
    --color-success: #4caf50;
    
    --color-border-table: ${({ theme }) => theme.colors.border};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-white: ${({ theme }) => theme.colors.background}; /* 다크모드 대응을 위해 white를 background로 맵핑 */
    
    --font-size: 14px;
    --font-size-title: 24px;
    --font-size-subTitle: 18px;
    --font-size-large: 20px;
    --font-size-medium: 16px;
    --font-size-semiSmall: 13px;
    --font-size-small: 12px;
    --font-size-xsmall: 10px;
  }

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }
`;

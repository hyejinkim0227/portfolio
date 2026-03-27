import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { lightTheme, darkTheme } from '@/styles/theme';
import { useState } from 'react';

import { Header } from '@/components/Header/Header';
import { Home } from '@/pages/Home/Home';
import { ProjectDetail } from '@/pages/ProjectDetail/ProjectDetail';
import Toast from '@/components/Toast';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Toast />
      <BrowserRouter>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

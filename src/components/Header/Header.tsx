import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiMaximize, FiMinimize } from 'react-icons/fi';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const DesktopMenu = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MenuItem = styled.a`
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const IconButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  width: 44px;
  height: 44px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileMenu = styled.nav<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ isOpen }) => (isOpen ? '1rem 2rem' : '0 2rem')};
    max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    gap: 1.5rem;
    box-shadow: ${({ isOpen }) => (isOpen ? '0 4px 6px rgba(0,0,0,0.1)' : 'none')};
  }
`;

const MobileMenuRow = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo to="/" aria-label="홈으로 이동">Portfolio</Logo>
      
      <DesktopMenu aria-label="메인 메뉴">
        <MenuItem href="#profile">Profile</MenuItem>
        <MenuItem href="#projects">Projects</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
        <IconButtonGroup>
          <IconButton 
            onClick={toggleFullscreen} 
            title={isFullscreen ? "전체화면 종료" : "전체화면 보기"}
            aria-label={isFullscreen ? "전체화면 종료" : "전체화면 보기"}
            aria-pressed={isFullscreen}
          >
            {isFullscreen ? <FiMinimize aria-hidden="true" /> : <FiMaximize aria-hidden="true" />}
          </IconButton>
          <IconButton 
            onClick={toggleTheme} 
            title={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
            aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDarkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </IconButton>
        </IconButtonGroup>
      </DesktopMenu>

      <MobileMenuButton 
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        {isMobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </MobileMenuButton>

      <MobileMenu id="mobile-menu" isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        <MenuItem href="#profile" onClick={toggleMobileMenu}>Profile</MenuItem>
        <MenuItem href="#projects" onClick={toggleMobileMenu}>Projects</MenuItem>
        <MenuItem href="#contact" onClick={toggleMobileMenu}>Contact</MenuItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

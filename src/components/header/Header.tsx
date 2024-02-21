'use client'

import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Container, HeaderLogo, HeaderIconContainer, NavLinks } from './styles'

const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

  const openMobileNav = () => {
    setIsMobileNavbarOpen(true)
  }

  const closeMobileNav = () => {
    setIsMobileNavbarOpen(false)
  }
  return (
    <Container $isMobileNavbarOpen={isMobileNavbarOpen}>
      <HeaderLogo>Ultra</HeaderLogo>
      <HeaderIconContainer
        onClick={isMobileNavbarOpen ? closeMobileNav : openMobileNav}
        aria-expanded={isMobileNavbarOpen}
        aria-label={
          isMobileNavbarOpen
            ? 'close mobile navigation'
            : 'open mobile navigation'
        }
      >
        {isMobileNavbarOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavbarOpen={isMobileNavbarOpen}>
          <li>
            <a href='#home' onClick={closeMobileNav}>
              Home
            </a>
          </li>
          <li>
            <a href='#onboarding' onClick={closeMobileNav}>
              Onboarding
            </a>
          </li>
          <li>
            <a href='#services' onClick={closeMobileNav}>
              Services
            </a>
          </li>
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Header

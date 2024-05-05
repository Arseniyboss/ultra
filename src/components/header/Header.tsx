'use client'

import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Container, HeaderIconContainer, NavLinks } from './styles'
import navLinks from '@/data/navLinks'

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
      <p>Ultra</p>
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
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={closeMobileNav}>
                {link.label}
              </a>
            </li>
          ))}
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Header

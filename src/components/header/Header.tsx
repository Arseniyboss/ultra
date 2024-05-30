'use client'

import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Container, HeaderIconContainer, NavLinks } from './styles'
import navLinks from '@/data/navLinks'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const openMobileNav = () => {
    setIsMobileNavOpen(true)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }
  return (
    <Container $isMobileNavOpen={isMobileNavOpen}>
      <p>Ultra</p>
      <HeaderIconContainer
        onClick={isMobileNavOpen ? closeMobileNav : openMobileNav}
        aria-expanded={isMobileNavOpen}
        aria-label='toggle mobile navigation'
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavOpen={isMobileNavOpen}>
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

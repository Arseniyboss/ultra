'use client'

import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Container, HeaderIconContainer, NavLinks } from './styles'
import navLinks from '@/data/navLinks'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }
  return (
    <Container>
      <p>Ultra</p>
      <HeaderIconContainer
        onClick={toggleMobileNav}
        aria-expanded={isMobileNavOpen}
        aria-label={`${isMobileNavOpen ? 'close' : 'open'} mobile navigation`}
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavOpen={isMobileNavOpen}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={toggleMobileNav}>
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

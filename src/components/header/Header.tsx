'use client'

import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { HeaderContainer, HeaderIconContainer, LinkWrapper } from './styles'
import navLinks from '@/data/navLinks'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }
  return (
    <HeaderContainer>
      <p>Ultra</p>
      <HeaderIconContainer
        onClick={toggleMobileNav}
        aria-expanded={isMobileNavOpen}
        aria-label={`${isMobileNavOpen ? 'close' : 'open'} mobile navigation`}
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <LinkWrapper $isMobileNavOpen={isMobileNavOpen}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={closeMobileNav}>
                {link.label}
              </a>
            </li>
          ))}
        </LinkWrapper>
      </nav>
    </HeaderContainer>
  )
}

export default Header

'use client'

import Link from 'next/link'
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
      >
        {isMobileNavbarOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavbarOpen={isMobileNavbarOpen}>
          <li>
            <Link href='/' onClick={closeMobileNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/services' onClick={closeMobileNav}>
              Services
            </Link>
          </li>
          <li>
            <Link href='/products' onClick={closeMobileNav}>
              Products
            </Link>
          </li>
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Header

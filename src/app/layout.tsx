import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container } from '@styles/globals'
import StyledComponentsRegistry from '@lib/registry'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'

type Props = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ultra',
  description: 'Lead Generation Specialist for Online Businesses',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout

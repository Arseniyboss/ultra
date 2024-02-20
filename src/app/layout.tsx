import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@lib/registry'
import Header from '@components/header/Header'

type Props = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Starter Template',
  description: 'NextJS Starter Template using TypeScript and Styled Components',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout

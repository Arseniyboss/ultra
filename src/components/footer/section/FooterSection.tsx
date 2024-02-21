import { FooterSection as Props } from '@types'
import { FooterLinks } from './styles'
import Link from 'next/link'

const FooterSection = ({ title, links }: Props) => {
  return (
    <article>
      <h2>{title}</h2>
      <FooterLinks>
        {links.map((link, index) => (
          <li key={index}>
            <Link href='/'>{link}</Link>
          </li>
        ))}
      </FooterLinks>
    </article>
  )
}

export default FooterSection

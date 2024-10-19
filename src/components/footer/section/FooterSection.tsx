import { FooterSection as Props } from '@/types'
import { LinkWrapper } from './styles'
import Link from 'next/link'

const FooterSection = ({ title, links }: Props) => {
  return (
    <article>
      <h2>{title}</h2>
      <LinkWrapper>
        {links.map((link, index) => (
          <li key={index}>
            <Link href='/'>{link}</Link>
          </li>
        ))}
      </LinkWrapper>
    </article>
  )
}

export default FooterSection

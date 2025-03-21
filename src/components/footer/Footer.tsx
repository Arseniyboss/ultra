import { FooterContainer, SectionWrapper, Copyright } from './styles'
import FooterSection from '@/components/footer/section/FooterSection'
import footerSections from '@/data/footerSections'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterContainer>
      <SectionWrapper aria-label="footer sections">
        {footerSections.map((section) => (
          <FooterSection key={section.title} {...section} />
        ))}
      </SectionWrapper>
      <Copyright>Copyright © {currentYear} Ultra</Copyright>
    </FooterContainer>
  )
}

export default Footer

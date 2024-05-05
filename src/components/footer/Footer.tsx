import { Container, SectionContainer, Copyright } from './styles'
import FooterSection from '@/components/footer/section/FooterSection'
import footerSections from '@/data/footerSections'

const Footer = () => {
  return (
    <Container>
      <SectionContainer aria-label='footer sections'>
        {footerSections.map((section) => (
          <FooterSection key={section.title} {...section} />
        ))}
      </SectionContainer>
      <Copyright>Copyright © {new Date().getFullYear()} Ultra</Copyright>
    </Container>
  )
}

export default Footer

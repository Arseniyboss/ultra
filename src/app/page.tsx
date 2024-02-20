import { Container, InfoSection, Button, HeroImage } from './styles'

const Home = () => {
  return (
    <Container>
      <InfoSection>
        <h1>Lead Generation Specialist for Online Businesses</h1>
        <p>
          We help business owners increase their revenue. Our team of unique
          specialists can help you achieve your business goals.
        </p>
        <Button>Get Started</Button>
      </InfoSection>
      <HeroImage src='/hero.svg' alt='' height={375} width={510} priority />
    </Container>
  )
}

export default Home

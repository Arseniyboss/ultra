import { Container, InfoSection, Button, HeroImage } from './styles'

const PageSection = ({
  id,
  heading,
  description,
  buttonLabel,
  img,
}: PageSection) => {
  return (
    <Container id={id}>
      <InfoSection aria-label={`${id} section`}>
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button>{buttonLabel}</Button>
      </InfoSection>
      <HeroImage
        src={img.src}
        alt=''
        width={img.width}
        height={img.height}
        priority
      />
    </Container>
  )
}

export default PageSection

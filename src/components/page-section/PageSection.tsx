'use client'

import { useGSAP } from '@gsap/react'
import { PageSection as Props } from '@/types'
import { animateSection } from '@/utils/animations'
import { Button } from '@/styles/globals'
import { SectionContainer, SectionDetails, HeroImage } from './styles'

const PageSection = ({ id, heading, description, buttonLabel, img }: Props) => {
  useGSAP(() => {
    animateSection(id)
  }, [])
  return (
    <SectionContainer id={id} aria-label={`${id} section`}>
      <SectionDetails>
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button>{buttonLabel}</Button>
      </SectionDetails>
      <HeroImage src={img.src} alt="" width={img.width} height={img.height} preload />
    </SectionContainer>
  )
}

export default PageSection

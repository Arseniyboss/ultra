'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from '@/breakpoints'

export const SectionContainer = styled.section`
  min-height: var(--section-height);
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: ${breakpoints.home}) {
    min-height: initial;
    flex-direction: column;
    gap: var(--spacing);
    padding: var(--spacing);

    &:nth-of-type(even) {
      flex-direction: column;
    }
  }
`

export const SectionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 500px;

  h1 {
    font-size: 2.3rem;
  }
`

export const HeroImage = styled(Image)`
  max-width: 85vw;
  height: auto;
`

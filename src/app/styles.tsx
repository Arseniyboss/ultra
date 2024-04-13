'use client'

import styled from 'styled-components'
import { SectionContainer } from '@/components/page-section/styles'
import { breakpoints } from '@/breakpoints'

export const PageSectionContainer = styled.div`
  > :nth-child(even) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: ${breakpoints.home}) {
    > :nth-child(even) {
      flex-direction: column;
    }
  }
`

export const PricingSection = styled(SectionContainer)`
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing);

  h2 {
    font-size: 2rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: ${breakpoints.home}) {
    width: 88vw;
    flex-direction: column;
    gap: var(--spacing);
  }
`

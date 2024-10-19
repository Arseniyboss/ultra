'use client'

import styled from 'styled-components'
import { SectionContainer } from '@/components/page-section/styles'
import { breakpoints } from '@/breakpoints'

export const PricingSection = styled(SectionContainer)`
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing);

  h2 {
    font-size: 2rem;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: ${breakpoints.home}) {
    width: 88vw;
    flex-direction: column;
    gap: var(--spacing);
  }
`

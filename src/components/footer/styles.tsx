'use client'

import styled from 'styled-components'
import { breakpoints } from '@breakpoints'

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 5rem;
  padding: 0 var(--spacing);

  @media screen and (max-width: ${breakpoints.home}) {
    margin-top: var(--spacing);
  }

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: var(--spacing);
  }

  @media screen and (max-width: 500px) {
    gap: var(--spacing);
  }

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`

export const Copyright = styled.p`
  text-align: center;
  padding: 3rem 0;
`

'use client'

import styled from 'styled-components'
import { breakpoints } from '@/breakpoints'

export const Container = styled.footer`
  margin-top: 7rem;

  @media screen and (max-width: ${breakpoints.home}) {
    margin-top: var(--spacing);
  }
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 5rem;
  padding: 0 var(--spacing);

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: var(--spacing);
  }

  @media screen and (max-width: 450px) {
    gap: var(--spacing);
    font-size: 0.9rem;
  }
`

export const Copyright = styled.p`
  text-align: center;
  padding: 3rem 0;
`

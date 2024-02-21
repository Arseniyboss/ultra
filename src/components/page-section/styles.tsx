'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from '@breakpoints'

export const Container = styled.div`
  min-height: calc(100vh - (var(--header-height)));
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${breakpoints.home}) {
    min-height: initial;
    flex-direction: column;
    gap: var(--spacing);
    padding: var(--spacing);
  }
`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 500px;

  h1 {
    font-size: 2.3rem;
  }
`

export const Button = styled.button`
  --lightness: 40%;
  background: hsl(240, 100%, var(--lightness));
  color: white;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.8rem 4rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;

  &:hover {
    --lightness: 35%;
  }

  @media screen and (max-width: ${breakpoints.home}) {
    width: 100%;
  }
`

export const HeroImage = styled(Image)`
  max-width: 85vw;
  height: auto;
`

'use client'

import styled from 'styled-components'
import { breakpoints } from '@breakpoints'

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

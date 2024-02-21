'use client'

import { breakpoints } from '@breakpoints'
import styled from 'styled-components'

export const Container = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;

  > :nth-child(even) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: ${breakpoints.home}) {
    > :nth-child(even) {
      flex-direction: column;
    }
  }
`

export const InvisibleButton = styled.button`
  background: none;
  color: inherit;
`

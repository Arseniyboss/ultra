'use client'

import styled from 'styled-components'

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: var(--spacing);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;

  h2 {
    font-size: 1.7rem;
  }
`

export const PlanPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

export const FeatureWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`

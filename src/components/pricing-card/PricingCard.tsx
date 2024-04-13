import { FaCheck } from 'react-icons/fa'
import { Button } from '@/styles/globals'
import { CardContainer, PlanPrice, FeatureList, PlanFeature } from './styles'
import { PricingPlan as Props } from '@/types'

const PricingCard = ({ heading, price, features }: Props) => {
  return (
    <CardContainer>
      <h2>{heading}</h2>
      <PlanPrice>${price} / month</PlanPrice>
      <FeatureList>
        {features.map((feature, index) => (
          <PlanFeature key={index}>
            <FaCheck color='#00cc00' />
            <p>{feature}</p>
          </PlanFeature>
        ))}
      </FeatureList>
      <Button>Choose Plan</Button>
    </CardContainer>
  )
}

export default PricingCard

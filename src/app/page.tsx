import PageSection from '@/components/page-section/PageSection'
import PricingCard from '@/components/pricing-card/PricingCard'
import pageSections from '@/data/pageSections'
import pricingPlans from '@/data/pricingPlans'
import { PricingSection, CardWrapper } from './styles'

const Home = () => {
  return (
    <>
      <div>
        {pageSections.map((section) => (
          <PageSection key={section.id} {...section} />
        ))}
      </div>
      <PricingSection id='pricing' aria-label='pricing section'>
        <h2>Choose Your Plan</h2>
        <CardWrapper>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </CardWrapper>
      </PricingSection>
    </>
  )
}

export default Home

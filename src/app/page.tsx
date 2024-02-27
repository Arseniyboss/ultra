import PageSection from '@components/page-section/PageSection'
import PricingCard from '@components/pricing-card/PricingCard'
import pageSections from '@data/pageSections'
import pricingPlans from '@data/pricingPlans'
import { PageSectionContainer, PricingSection, CardContainer } from './styles'

const Home = () => {
  return (
    <>
      <PageSectionContainer>
        {pageSections.map((section) => (
          <PageSection key={section.id} {...section} />
        ))}
      </PageSectionContainer>
      <PricingSection id='pricing' aria-label='pricing section'>
        <h2>Choose Your Plan</h2>
        <CardContainer>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </CardContainer>
      </PricingSection>
    </>
  )
}

export default Home

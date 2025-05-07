import { PricingPlan } from '@/types'

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    type: 'basic',
    price: 49.99,
    features: [
      'Logo Design',
      'Web Design',
      'Social Media Marketing',
      'Ad Management',
      'Ad Retargeting',
    ],
  },
  {
    id: 2,
    type: 'standard',
    price: 129.99,
    features: [
      'Web Development',
      'Landing Pages',
      'Email Marketing',
      'AI Marketing',
      'Marketing Automation',
    ],
  },
  {
    id: 3,
    type: 'premium',
    price: 249.99,
    features: [
      'SEO',
      'Video Production',
      'Content Creation',
      'CRO',
      'Filtered Analytics View',
    ],
  },
]

export default pricingPlans

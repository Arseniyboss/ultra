import PageSection from '@components/page-section/PageSection'
import pageSections from '@data/pageSections'

const Home = () => {
  return pageSections.map((section) => (
    <PageSection key={section.id} {...section} />
  ))
}

export default Home

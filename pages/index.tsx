import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import VerticalGallery from '@/components/VerticalGallery'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <VerticalGallery />
    </Layout>
  )
}

export default Home

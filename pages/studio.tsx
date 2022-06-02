import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import VerticalGallery from '@/components/VerticalGallery'
import Hero from '@/components/Hero'

const hero = ['studio/hero.jpg']

const Studio: NextPage = () => {
  return (
    <Layout>
      <Hero images={hero} />
      <VerticalGallery />
    </Layout>
  )
}

export default Studio

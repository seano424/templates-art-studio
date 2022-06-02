import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import VerticalGallery from '@/components/VerticalGallery'

const images = [
  'https://images.unsplash.com/photo-1633109633238-e982d5b61f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
  'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
]

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 14000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 1.2,
      },
    },
  }

  return (
    <Layout>
      <motion.section
        key={currentIndex}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="min-h-screen"
      >
        <motion.div variants={item} className="relative h-screen w-full">
          <Image
            className="object-cover"
            src={images[currentIndex]}
            alt="Home Hero"
            layout="fill"
            priority
          />
        </motion.div>
      </motion.section>
      <VerticalGallery />
    </Layout>
  )
}

export default Home

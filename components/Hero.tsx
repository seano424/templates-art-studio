import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

const images = ['hero-1.jpeg', 'hero-2.jpeg']

export default function Hero() {
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
  return (
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
          src={`/images/hero/${images[currentIndex]}`}
          alt="Home Hero"
          layout="fill"
          priority
        />
      </motion.div>
    </motion.section>
  )
}

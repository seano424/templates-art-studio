import { useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import useOnClickOutside from '../hooks/useOnClickOutside'

interface Props {
  state: {
    showMenu: boolean
    showMenuText: boolean
  }
  setState: (boolean: any) => void
}

export default function Menu(props: Props) {
  const { state, setState } = props
  const { pathname } = useRouter()
  const menuRef = useRef()

  useOnClickOutside(menuRef, () =>
    setState((prevState) => ({ ...prevState, showMenu: false }))
  )

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  }

  const handleEnter = () => {
    setState((prevState) => ({
      ...prevState,
      showMenuText: true,
    }))
  }
  const handleLeave = () => {
    setState((prevState) => ({
      ...prevState,
      showMenuText: false,
    }))
  }
  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      showMenu: !prevState.showMenu,
      menuText: prevState.showMenu ? 'Menu' : 'Close',
    }))
  }
  return (
    <div ref={menuRef}>
      <AnimatePresence exitBeforeEnter>
        <ul
          className="cursor-pointer z-50 h-20 w-20 flex justify-center items-center select-none fixed top-4 left-10"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onClick={handleClick}
        >
          {state.showMenuText && (
            <motion.li
              transition={{ duration: 0.4 }}
              animate={{
                scale: [0.3, 1.2],
              }}
              className={`rounded-full flex items-center justify-center p-5 w-20 h-20 ${
                state.showMenu ? 'bg-white' : 'bg-primary'
              }`}
            >
              <motion.span
                transition={{ duration: 0.7 }}
                animate={{
                  opacity: [0, 1],
                }}
                className={`${
                  state.showMenu ? 'bg-white text-primary' : 'text-white'
                }`}
              >
                {state.showMenu ? 'Close' : 'Menu'}
              </motion.span>
            </motion.li>
          )}
          {!state.showMenuText && (
            <motion.li
              transition={{ duration: 0.4 }}
              animate={{
                scale: [5, 1.2],
              }}
              // exit={{ opacity: 0 }}
              className={`rounded-full flex items-center justify-center z-50 p-2 ${
                state.showMenu ? 'bg-white' : 'bg-primary'
              }`}
            ></motion.li>
          )}
        </ul>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {state.showMenu && (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-0 left-0 right-0 bottom-1/2 gap-6 pt-36 pl-16 flex flex-col shadow-md bg-primary border-t border-gray-50 z-40 sm:bottom-0 md:pl-20 md:py-56 md:gap-12 sm:right-1/3 xl:right-1/2"
          >
            <Link href="/">
              <a className={`link w-max ${pathname === '/' && 'active'}`}>
                Work
              </a>
            </Link>
            <Link href="/about">
              <a className={`link w-max ${pathname === '/about' && 'active'}`}>
                Studio
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={`link w-max ${pathname === '/projects' && 'active'}`}
              >
                Press
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`link w-max ${pathname === '/contact' && 'active'}`}
              >
                Contact
              </a>
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

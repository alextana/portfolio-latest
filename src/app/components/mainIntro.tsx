'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

export default function MainIntro() {
  const [greeting, setGreeting] = useState<null | string>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')

    if (!hasVisited || !JSON.parse(hasVisited)) {
      localStorage.setItem('hasVisited', 'true')
      setGreeting('meet you')
      setVisible(true)
      return
    }
    setGreeting('see you again')
    setVisible(true)
  }, [])

  const mainBlockTransition = {
    duration: 0.8,
    delay: 0,
    ease: [0, 0.71, 0.2, 1.01],
  }

  return (
    <>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={mainBlockTransition}
            className='flex flex-wrap lg:flex-nowrap items-center z-10'
          >
            <div className='transition bg-white perspective-dramatic px-4 py-2'>
              <h1 className='text-4xl lg:text-6xl text-gray-900 tracking-tighter'>
                <strong>nice</strong> to {greeting}
              </h1>
              <h2 className='text-3xl text-gray-800 tracking-tighter font-light'>
                {`let's build something together`}
              </h2>
            </div>
            <div className='tracking-tight bg-white self-end perspective-near px-4 py-2 text-black'>
              <p className='text-2xl'>alex tana</p>
              <p className='text-md'>
                front-end engineer{' '}
                <Link
                  className='hover:text-green-500 !text-black text-md'
                  href='https://amiqus.co'
                  target='_blank'
                >
                  @amiqus
                </Link>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </>
  )
}

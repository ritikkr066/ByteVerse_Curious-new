import React from 'react'
import {motion} from 'framer-motion'

const Footer1 = () => {
  return (
    
    <footer className="text-gray-600 body-font">
  <div className="container flex flex-col items-center justify-around px-5 py-8 mx-auto sm:flex-row">
    <div>
    <motion.div initial={{opacity:0,x:150}}
       animate={{opacity:1,x:0}}
        exit={{opacity:0,x:150}}
       transition={{delay:0.25}}>
    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">© 2020 personal space —
      <a href="https://twitter.com/knyttneve" className="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">need of every individual</a>
    </p>
   
    </motion.div>
    </div>
    <div className='flex flex-column'>
      <motion.div initial={{opacity:0,y:15}}
       animate={{opacity:1,y:0}}
        exit={{opacity:0,y:15}}
       transition={{delay:0.25}}>
      <a className="ml-3 text-gray-500 px-7">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      </motion.div>
      <motion.div initial={{opacity:0,y:15}}
       animate={{opacity:1,y:0}}
        exit={{opacity:0,y:15}}
       transition={{delay:0.25}}>
      <a className="ml-3 text-gray-500 px-7">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      </motion.div>
      <motion.div initial={{opacity:0,y:15}}
       animate={{opacity:1,y:0}}
        exit={{opacity:0,y:15}}
       transition={{delay:0.25,count:100}}>
      <a className="ml-3 text-gray-500 px-7">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
      </motion.div>
    </div>
    </div>
   
  
</footer>
  )
}

export default Footer1
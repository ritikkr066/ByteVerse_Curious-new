import React from 'react';
import { motion } from 'framer-motion';

const Hom2 = () => {
  return (
    <div className='h-full bg-white'>
      <motion.div
      initial={{opacity:0,x:400}}
      animate={{opacity:1,x:0}}
       exit={{opacity:0,x:150}}
      transition={{duration:3, delay:0.5}}
      className='flex bg-green-200 h-[30vh]  '>
        <div className='flex pl-32 '> <img src='pers.png'/></div>
        <div>
        <div className='grid justify-center pt-6 mb-2.5 text-black align-middle text-7xl '>  ERSONAL SPACE</div>
        <span className='-m-5 text-3xl text-black '>PACE ....IS A NECESSITY</span>
        </div>
      </motion.div>
      <div className='flex h-[70vh] bg-green-200'>
        
        <div className='flex flex-col w-1/3 pt-4 text-6xl bg-green-200 hover:bg-orange-400 justify-space'>
          <div className='flex justify-center text-amber-900'>
          Review
          </div>
          <span className='pt-6 text-sm '><ul>
            <li className='text-xl text-black hover:text-blue-600 '>
          We are going to review restaurant, Hotels, Public spaces and location. On several parameters; like hospitality, Location, Vibe, Customer type, Staff behaviour, Value for money etc.
            </li>
            <li className='pt-4 text-xl text-black hover:text-blue-600 '> Which can be used to provide customers with personal space with their requirements.
              </li></ul></span>
          </div>
        <div className="flex flex-col w-1/3 pt-4 mx-3 text-6xl bg-green-200 border-spacing-3 hover:bg-orange-400"><div className='flex justify-center text-amber-900'>
          Cloth-Line
          </div>
          <span className='pt-6 text-sm '><ul className=''>
            <li className='pl-4 text-xl text-black hover:text-blue-600 '>
            We will make our own simple designs for couple and Solo, you can also customize cloth by picking colour and sticker or providing Your own set of themes and we will back with designs-based om your provided themes.

            </li>
            <li className='pt-4 mx-3 text-xl text-black hover:text-blue-600 '> We are currently in touch with a Cloths factory owner  our cloth line setup.
              </li></ul></span></div>
              <div className="flex flex-col w-1/3 pt-4 text-6xl bg-green-200 hover:bg-orange-400"><div className='flex justify-center text-amber-900'>
          AI-Travel
          </div>
          <span className='pt-6 mx-3 text-sm'><ul>
            <li className='text-xl text-black hover:text-blue-600 '>
            As the world of AI is going bigger, we will be adding AI and Algorithms
            that will help people to find places worthy of going to, staying in, 
            Food worthy of trying.For anyone going anywhere solo, duo, full family
            or even your whole gang.

            </li>
            <li className='pt-4 text-xl text-black hover:text-blue-600 '>  Those places Which are worthy to be called as “Hidden Gems”.
              </li></ul></span></div>
      </div>
    </div>
  );
}

export default Hom2;

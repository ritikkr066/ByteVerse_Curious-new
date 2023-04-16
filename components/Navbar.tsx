import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';


const navbar = () => {
  return (
    <>
         <div className='flex py-3 nav '> 
         <div className='flex' >
          <p className='pl-3'><img src='pers.png' width={20}/></p>
          <p className='pt-2'>PERSONAL SPACE</p>
         </div>
      <ul className='flex items-center mx-auto space-x-2 font-bold'>
        <Link href={'/dress'}>CLOTHING</Link>
        <Link href={'/hotelreview'}>REVIEWS</Link>
        <Link href={'/mugs'}>MUGS</Link>
        <Link href={'/sneaker'}>SNEAKERS</Link>
      </ul>
      <a href='/Login'><div className='pt-2 pr-4 text-2xl'><FaUserCircle/></div></a>
      </div>
    </>
  );
}

export default navbar;

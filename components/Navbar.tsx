import React from 'react';
import Link from 'next/link';


const navbar = () => {
  return (
    <>
         <div className='flex py-3 nav '> 
         <div className='flex'>
          <p className=''>PERSONAL SPACE</p>
         </div>
      <ul className='flex items-center mx-auto space-x-2 font-bold'>
        <Link href={'/dress'}>DRESS</Link>
        <Link href={'/hoodies'}>HOODIES</Link>
        <Link href={'/mugs'}>MUGS</Link>
        <Link href={'/sneaker'}>SNEAKERS</Link>
      </ul>
      </div>
    </>
  );
}

export default navbar;

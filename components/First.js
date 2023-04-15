import Link from 'next/link';
import React from 'react';


const First = () => {
  return (
    <div>
      {/* <div className='flex flex-col items-center justify-center md:flex-row' >
        <img src='shirt.webp' alt='trailshoppy'  className='flex  w-screen sm:w-[20vw] m-8'/>
        <img src='shirt.webp' alt='trailshoppy'  className='flex  w-screen sm:w-[20vw] m-8'/>
       </div> */}

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 w-1/2 p-4  shadow-2xl mx-auto  m-1"><Link href={'/tshirts'}
         class="block relative  rounded overflow-hidden">
          <img alt="ecommerce" class="m-auto  h-[30vh] md:h-[36vh]" src="shirt.webp"/>
        </Link>
        <div class="mt-4 text-center xl:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">T-SHIRTS</h2>
          {/* <p class="mt-1">₹16.00</p> */}
          {/* <p className='my-1'>S, M, XL, XXL</p> */}
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl mx-auto  m-1"><Link href={'/hoodies'}
         class="block relative  rounded overflow-hidden">
          <img alt="ecommerce" class="m-auto  h-[30vh] md:h-[36vh]" src="hoodie.webp"/>
        </Link>
        <div class="mt-4 text-center xl:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">HOODIES</h2>
          {/* <p class="mt-1">₹16.00</p> */}
          {/* <p className='my-1'>S, M, XL, XXL</p> */}
        </div>
      </div>
      
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl mx-auto  m-1"><Link href={'/mugs'}
         class="block relative  rounded overflow-hidden">
          <img alt="ecommerce" class="m-auto  h-[30vh] md:h-[36vh]" src="mug.png"/>
        </Link>
        <div class="mt-4 text-center xl:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">MUGS</h2>
          {/* <p class="mt-1">₹16.00</p> */}
          {/* <p className='my-1'>S, M, XL, XXL</p> */}
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl mx-auto  m-1"><Link href={'/sneaker'}
         class="block relative  rounded overflow-hidden">
          <img alt="ecommerce" class="m-auto  h-[30vh] md:h-[36vh]" src="sneaker.webp"/>
        </Link>
        <div class="mt-4 text-center xl:text-left">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">SNEAKERS</h2>
          {/* <p class="mt-1">₹16.00</p> */}
          {/* <p className='my-1'>S, M, XL, XXL</p> */}
        </div>
      </div>
      
      
      
     
      
  
    </div>
  </div>
</section>
    </div>
  );
}

export default First;

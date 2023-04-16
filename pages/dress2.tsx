import Link from 'next/link';
import React from 'react';


const Dress2 = () => {
  return (
    <>
      {/* <div className='flex flex-col items-center justify-center md:flex-row' >
        <img src='dress.png' alt='trailshoppy'  className='flex  w-screen sm:w-[20vw] m-8'/>
        <img src='shirt.webp' alt='trailshoppy'  className='flex  w-screen sm:w-[20vw] m-8'/>
       </div> */}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto bg-slate-50">
  <div className='flex justify-center pb-8 -top-py-6'>
          <a className='flex' href='/dress2'><p className="flex my-1"><button className='px-5 mx-16 mr-4 text-4xl bg-orange-200 hover:bg-orange-600 rounded-3xl'>MALE</button></p></a>
          <a href='/dress3'><p className='my-1'><button className='px-5 mx-4 text-4xl bg-orange-200 hover:bg-orange-600 rounded-3xl'>FEMALE</button></p></a></div>
    <div className="flex flex-wrap -m-4">
        
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh]" src="Abc1.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹298.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-8" src="Abc2.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹634.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-6" src="Abc3.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹425.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-6" src="Abc5.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹534.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-4" src="Abc7.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹374.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-6 " src="Abc8.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹569.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-3" src="Abc9.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹576.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
      <div className="w-full p-4 m-1 mx-3 mx-auto my-4 shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/disp'}
         className="relative block overflow-hidden rounded">
          <img alt="ecommerce" className="m-auto md:mx-0 block h-[30vh] md:h-[36vh] pl-12" src="Abc10.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">T-Shirts</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p className="mt-1">₹623.00</p>
          <p className='my-1'>S, M, XL, XXL</p>
        </div>
        
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Dress2;

import React from 'react';
import Link from 'next/link';

const Dress = () => {
  return (
    <>
      
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 bg-slate-50 ">
    <div className="flex flex-wrap -m-4">
      <div className="w-full p-4 m-1 mx-auto shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2"><Link href={'/dress2'}
         className="relative block ml-16 overflow-hidden rounded">
          <img alt="ecommerce" className=" md:mx-0 block h-[30vh] md:h-[36vh] justify-center  flex" src="Abc3.jpg"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          {/* <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">SOLO</h3> */}
          <h2 className="pl-8 ml-16 text-3xl font-medium text-black pl title-font:">SOLO</h2>
          {/* <div className='flex'>
          <a className='flex' href='/dress2'><p className="flex my-1"><button className='px-3 mx-16 mr-4 bg-orange-400 rounded-sm'>MALE</button></p></a>
  <a href='/dress3'><p className='my-1'><button className='px-3 mx-4 bg-orange-400 rounded-sm'>FEMALE</button></p></a></div> */ }
        </div>
      </div>
      
      <div className="w-full p-4 m-1 mx-auto shadow-2xl hover:bg-pink-200 lg:w-1/4 md:w-1/2" ><Link href={'/dress1'}
         className="relative block ml-16 overflow-hidden rounded">
          <img alt="ecommerce" className=" m-auto md:mx-0 block h-[30vh] md:h-[36vh]" src="dress.png"/>
        </Link>
        <div className="mt-4 text-center xl:text-left">
          {/* <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">COUPLES</h3> */}
          <h2 className="ml-16 text-3xl font-medium text-black title-font">COUPLE MATCHING</h2>
          {/* <p className="mt-1">₹16.00</p> */}
          {/* <p className='my-1'>S, M, XL, XXL</p> */}
        </div>
      </div>
    </div>
    </div>

    
    </section>
    </>
  );
}

export default Dress;

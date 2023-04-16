import React from 'react'
import { MdLocationPin } from 'react-icons/md';

const Hotelreviewin = () => {
  return (
    <div>
        <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="chakhna.webp" />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
        <h1 class="text-blue-300 text-3xl title-font font-medium mb-1">CHAKHNA RESTURANT</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
         
        </div>
        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
        </div>
        <div class="flex">
          
        <a href="https://www.google.com/maps/dir//NIT+More,+Ashok+Rajpath+Rd,+Lalbagh,+Patna,+Bihar+800006/@25.6168979,85.1010237,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed59b3837a941d:0x7c40bb6ff2b66676!2m2!1d85.171064!2d25.6169146"><button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Location<MdLocationPin className='text-2xl'/></button></a>
          
          
          
        </div>
      </div>
    </div>
  </div>
</section>
<section>

    <div className='flex flex-row justify-around px-1 align-middle'>
    <p className='ml-10 text-5xl'>Reviews</p>
    <div className='flex flex-row justify-end'>
            <select  className='ml-5 text-cyan-600 w-25'>
            <option>Sort</option>
            <option>Best rating</option>
            <option>Worst rating</option>
            <option>Most liked</option>
            
            </select> 
            <select  className='ml-5 text-cyan-600 w-25'>
            <option>Tags</option>
            <option>Date</option>
            <option>Study</option>
            <option>Conference</option>
            <option>Health</option>
            </select>
            <select  className='ml-5 text-cyan-600 w-25'>
            <option>filter</option>
            <option>open</option>
            <option>solo</option>
            <option>family</option>
            <option>couple</option>
            </select>
            </div>
    </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-white-900 mb-12 text-center">Customer Reviews </h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <p className='mb-6'>Comment 1</p>
          <p class="leading-relaxed mb-6">Nice hotel services are good accoring to me. staff behaviour is also good</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Ritik kumar</span>
              <span class="text-gray-500 text-sm">student</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <p className='mb-6'>Comment 2</p>
          <p class="leading-relaxed mb-6">nice hotel but services are lacking there and staffs behaviour is not good</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Shiva verma</span>
              <span class="text-gray-500 text-sm">student</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hotelreviewin;
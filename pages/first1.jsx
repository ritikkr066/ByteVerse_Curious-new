import React from 'react';

import{BiCartDownload} from "react-icons/bi"
import{BsGoogle} from "react-icons/bs"

const first1 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:flex-cols-1 md:grid-cols-2 lg:flex-cols-2">
            {/* Left side */}
            <div className="flex items-center justify-center h-screen space-y-5 text-center bg-orange-200 w:1/2 flex- sm:h-screen " >
                <div className="grid-row">
                <div >
                    < BiCartDownload size="150px" color="black" />
                </div>
                <div className="font-sans text-4xl font-bold ">
                    <p> Trailshoppy</p>
                </div>
                </div>
               
            </div>
                {/* Right Side */}
            

                {/* <div className="flex flex-col items-center justify-center h-screen space-y-8 bg-white w:1/2 sm:h-screen ">
                     
                        <div className="items-center h-auto p-8 space-y-6 bg-orange-200 rounded-md">
                     <div className="col-span-2" >
                        <span>
                        <button className="w-2/3 px-6 py-2 font-bold text-black bg-white rounded-full">Employee</button>
                        <button className="w-1/3 px-6 py-2 font-bold text-black ">   Admin</button>
                        </span>
                     </div>
                     <div flex flex-row >  
                       
                     </div>
                     <div className="flex flex-col space-y-5">
                     <input type="text" placeholder="User ID/Email" className="h-10 border-black rounded-md bold" p-0 m-0/>
                
                      
                      <input type="password" placeholder="password"   className="h-10 border-black rounded-md"/>
                      
                      <span className="text-right text-gray-600">
                        <p>new User?</p>
                       <p className="text-right text-blue-600">Create an account</p>
                       </span>
                     </div>
                     <div >
                        <button className="px-24 py-2 font-bold text-white bg-black rounded-md">LOGIN</button>
                     </div>
                     <span className="flex flex-col items-center justify-center font-bold">or</span>
                     <div className="flex flex-col items-center ">
                        <BsGoogle size="30px" />
                     </div>
                     </div>
                </div> */}
             </div>


    </div>
  );
}

export default first1;

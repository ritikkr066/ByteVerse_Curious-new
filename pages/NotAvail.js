import React from "react";
import { motion } from "framer-motion";


function Rating() {
   
    return(
        <>
        <span className="grid h-screen  place-content-center bg-[#E3D5CA] ">
            <motion.div 
            initial={{opacity:0,y:15}}
            animate={{opacity:1,y:0}}
             exit={{opacity:0,y:15}}
            transition={{delay:0.75}}
            className="py-6 bg-green-200 ">
           <span className="flex flex-row px-12 text-2xl text-red-700 ">
        Not Available Right Now!!!!
        </span>
        <span className="flex flex-row px-12 text-xl text-blue-700">
        You will get notified once it's Available
        </span>
        </motion.div>
        <motion.div
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
         exit={{opacity:0,y:15}}
        transition={{delay:2}}
        className="pb-6 bg-green-200 "
        >

        <a href="/Hom2"><span className="flex flex-row justify-center px-3 text-xl text-blue-700 "><button className="px-6 bg-black rounded-3xl">Go To Home Page</button></span></a>
        </motion.div>
        </span>
        
        </> );
}
export default Rating;

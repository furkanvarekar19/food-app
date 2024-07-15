import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Header() {
   const [sideNav ,setSideNav] = useState(false);
   console.log(sideNav);

 

  return (
    <div className='flex justify-between py-[20px] px-[25px] text-[18px] border-b  relative'>
        <div>
            <p>Yumi <span className='text-[#fbc531] font-black text-xl font-serif'>food</span></p>
        </div>

        <div>
        {/* <RxCross2 className='absolute top-3 right-3 cursor-pointer ' size={25} /> */}
            <ul className=' sm:flex gap-4 hidden cursor-pointer  '>
                <li className=' hover:text-[#fbc531]'>Home</li>
                <li className=' hover:text-[#fbc531]'>About Us</li>
                <li className=' hover:text-[#fbc531]'>offers</li>
                <li className=' hover:text-[#fbc531]'>Sign In</li>
            </ul>
             
        </div>

     {
        sideNav?<div className='absolute w-[300px]  top-0px right-0 text-center h-[100vh] bg-[#f5f6fa] flex justify-center items-center'>
        <RxCross2 className='absolute top-3 right-3 cursor-pointer ' size={25}   onClick={()=> setSideNav(!sideNav)}/>
            <ul className=' flex gap-12 cursor-pointer flex-col  '>
                <li className=' hover:text-[#fbc531]'>Home</li>
                <li className=' hover:text-[#fbc531]'>About Us</li>
                <li className=' hover:text-[#fbc531]'>offers</li>
                <li className=' hover:text-[#fbc531]'>Sign In</li>
            </ul>
             
        </div>:""
     }

        <div className='flex gap-5'>
      <p><GiHamburgerMenu size={30} className=' cursor-pointer block sm:hidden' onClick={()=> setSideNav(!sideNav)} /></p>
     <p><FaCartShopping size={30} /></p>
        </div>

    </div>
  )
}

export default Header;






 
import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Header({count}) {
   const [sideNav ,setSideNav] = useState(false);
//    console.log(sideNav);

 

  return (
    <div className='fixed z-9999 top-0 left-0 w-full bg-white'>
    <div className='flex justify-between py-[20px] px-[25px] text-[18px] border-b  relative'>
        <div>
            <Link to={'/'}>
            <p className='cursor-pointer'>Yumi <span className='text-[#fbc531] font-black text-xl font-serif'>food</span></p>
            </Link>
          
        </div>

        <div>
        {/* <RxCross2 className='absolute top-3 right-3 cursor-pointer ' size={25} /> */}
            <ul className=' sm:flex gap-4 hidden cursor-pointer  '>
                <Link to={'/'}>
                <li className=' hover:text-[#fbc531]'>Home</li>
                </Link>
             
                <Link to={'/aboutUs'}>
                <li className=' hover:text-[#fbc531]'>About Us</li>
                </Link>
                
                <Link to={'/ourfood'}>
                <li className=' hover:text-[#fbc531]'>Our food</li>
                </Link>
                <Link to={'/signin'}>
                <li className=' hover:text-[#fbc531]'>Sign In</li>
                </Link>
            </ul>
             
        </div>

     {
        sideNav?<div className='absolute w-[300px]  top-0px right-0 text-center h-[100vh] bg-[#f5f6fa] flex justify-center z-10 items-center'>
        <RxCross2 className='absolute top-3 right-3 cursor-pointer ' size={25}   onClick={()=> setSideNav(!sideNav)}/>
            <ul className=' flex gap-12 cursor-pointer flex-col  '>
            <Link to={'/'}>
                <li className=' hover:text-[#fbc531]'onClick={()=> setSideNav(!sideNav)} >Home</li>
                </Link>
             
                <Link to={'/aboutUs'}>
                <li className=' hover:text-[#fbc531]'onClick={()=> setSideNav(!sideNav)}>About Us</li>
                </Link>
                
                <Link to={'/ourfood'}>
                <li className=' hover:text-[#fbc531]'onClick={()=> setSideNav(!sideNav)}>Our food</li>
                </Link>
                <Link to={'/signin'}>
                <li className=' hover:text-[#fbc531]'onClick={()=> setSideNav(!sideNav)}>Sign In</li>
                </Link>
            </ul>
             
        </div>:""
     }

        <div className='flex gap-5'>
      <p><GiHamburgerMenu size={30} className=' cursor-pointer block sm:hidden' onClick={()=> setSideNav(!sideNav)} /></p>
     <p>
       {count}
        <FaCartShopping size={30} />
        </p>
        </div>

    </div>
    </div>
  )
}

export default Header;






 
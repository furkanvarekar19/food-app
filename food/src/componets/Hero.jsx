import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Hero() {
  const [slider,setSlider] = useState(0);

     const imgData = [
        {
            url:'https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg'
        },
        {
            url: 'https://img.freepik.com/premium-photo/shawarma-sandwich-pita-with-beef-meat-vegetables-cheese_124507-28603.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720828800&semt=ais_user'
        },
        {
            url:'https://c4.wallpaperflare.com/wallpaper/946/274/339/food-burgers-fast-food-fries-wallpaper-preview.jpg'
        },
    ]

    const handlePlus = () =>{
        setSlider(slider === imgData.length-1? 0 :slider+1);

    }
    const handleMinus = () =>{
        setSlider(slider  === 0?imgData.length-1:slider-1);
    }

    useEffect(()=>{
     const sliderClear = setInterval(()=>{
           handlePlus();
      },2000)

      return()=>clearInterval(sliderClear)

    },[slider])


  return (
    <div>
    <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
        {
            imgData.map((item , index)=>(
                <div key={index} className={`${slider===index?"block":"hidden"}`}>
                    <img src={item.url} alt="food" className='w-full h-[80vh] rounded-2xl object-cover opacity-75'/>
                </div>
            ))
        }
    </div>
    {/* <div className='w-full mx-auto h-[80vh]  bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div> */}
    <div className='flex justify-between w-full px-5 absolute top-[50%] text-orange-600'>
    <FaChevronLeft size={35}  className='cursor-pointer' onClick={handleMinus}/>
    <FaChevronRight size={35} className='cursor-pointer' onClick={handlePlus} />
    </div>
    </div>
  )
}

export default Hero;
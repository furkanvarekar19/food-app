import React from 'react'
import {mealData} from '../Data/data'

function OurFood() {
  return (
    <>
    <div className='w-[90%] mx-auto'>
        <div>
            <h2 className='text-center text-[#fbc531] text-3xl font-bold'>Our Food</h2>
        </div>
        <div className='grid  md:grid-cols-2  sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2'>
            {
                mealData.map((meal)=>(
                    <div key={meal.id} className='flex justify-center flex-col items-center mt-8'>
                        <div>
                        <img src={meal.img} alt="pizza" className='w-[250px] h-[200px] rounded-md object-cover'/>
                        </div>
                      <div className='flex justify-center py-2 px-4 flex-col items-center'>
                      <p className='text-xl font-semibold uppercase'> {meal.name} </p>
                       <p className='text-xl font-bold'>{meal.category} </p>
                       <p className='text-xl font-bold'>₹{meal.price} </p>
                       <button className='bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531] font-semibold'>
                       Add to cart</button>
                      </div>

                    </div>
                ))
            }

        </div>
    </div>
    </>
  )
}

export default OurFood;
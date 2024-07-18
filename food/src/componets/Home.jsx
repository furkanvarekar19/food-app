import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import FoodsLider from './FoodsLider'


function Home({handleAdd}) {
  return (
    <div>
          <Hero/>
        <Delivery/>
        <FoodsLider handleAdd={handleAdd}/>
        {/* <OurFood/> */}
    </div>
  )
}

export default Home
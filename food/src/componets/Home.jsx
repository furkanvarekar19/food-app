import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import FoodsLider from './FoodsLider'


function Home() {
  return (
    <div>
          <Hero/>
        <Delivery/>
        <FoodsLider/>
        {/* <OurFood/> */}
    </div>
  )
}

export default Home
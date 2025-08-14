// "use client"
import React from 'react'
import Image from 'next/image';
// import { useState,useEffect } from 'react'

const page = () => {
  // const [count, setCount] = useState(0)

  console.log("hey i am saad");
  

  return (
    <div className='container my-5'>
      This is  a Home page
      <Image
      width={100}
      height={100}
       className='mx-auto' src="http://www.menucool.com/slider/prod/image-slider-1.jpg" alt="" />
       {/* {count} */}
      <br></br>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      
    </div>
  )
}

export default page

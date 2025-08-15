"use client"
// import React from "react";
// import Image from "next/image";
// import { useState,useEffect } from 'react'

import fs from "fs/promises"
import { useRef } from "react";
const page = () => {
  // const [count, setCount] = useState(0)

  // console.log("hey i am saad");

  // return (
  //   <div className="container my-5">
  //     This is a Home page
  //     <Image
  //       width={100}
  //       height={100}
  //       className="mx-auto"
  //       src="http://www.menucool.com/slider/prod/image-slider-1.jpg"
  //       alt=""
  //     />
  //     {/* {count} */}
  //     <br></br>
  //     {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
  //   </div>
  // );



  const submitAction=async(e)=>{
    "use server"
    console.log(e.get("name"),e.get("add"));
    let a =await fs.writeFile("saad.txt",`my name is ${e.get("name")} and adress is ${e.get("add")}`)
    console.log(a);
  }

  const ref=useRef()

//create  a diffrent file for useserver


  return (
    <div className="mx-auto w-2/3 my-12">
      <form ref={ref} action={(e)=>{submitAction(e);ref.current.reset()}} >
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name"  className="text-white bg-amber-600" type="text" />
        </div>
        <br></br>
        <div>
          <label htmlFor="add">Adrrss</label>
          <input name="add" id="add" className="text-white bg-amber-600" type="text" />
        </div>
      <div>
        <button>Submit</button>
      </div>
      </form>
    </div>
  );
};

export default page;

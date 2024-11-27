import React from 'react'
import Image from "next/image"
//import loadingSpirale from "/public/loading-spirale-2.jpg";
import loadingSpirale from "/public/loading-spirale.jpg";

const Loading = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen">
        <div className='w-[200px] flex items-center p-4'>

          <Image
              src={loadingSpirale}
              width={20}
              height={20}
              alt="img loader"
              className="object-cover animate-spin" 
          />

          <h2 className='font-bold ml-4'>Loading...</h2>

        </div>
    </div>
  )
}
export default Loading;
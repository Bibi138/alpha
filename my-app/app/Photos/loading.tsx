import React from 'react';
import Image from "next/image";
import loadingSpirale from "/public/loading-spirale-modified.png";

const Loading = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
        <div className='w-full h-screen flex flex-col items-center jsutify-center p-4'>

          <Image
              src={loadingSpirale}
              width={450}
              height={450}
              alt="img loader"
              className="object-cover animate-spin m-auto opacity-50" 
          />

          <h2 className='text-slate-500 font-bold ml-4'>Loading...</h2>

        </div>
    </div>
  )
}
export default Loading;
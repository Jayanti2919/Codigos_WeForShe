'use client'
import React from 'react';
import { useState } from "react";

function Card({ title, content, outfit, extra1, extra2, extra3 }) {
  
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    
    <div className='block max-w-sm p-4 bg-rose-200 border border-gray-200 rounded-lg shadow w-32 md:w-32 lg:w-48'>
      <div className="flex  justify-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2">
            <div>
              <img className=" max-w-full rounded-lg" src={outfit} alt="" />
            </div>
            <div>
              <img className=" max-w-full rounded-lg" src={extra1} alt="" />
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <img className=" max-w-full rounded-lg" src={extra2} alt="" />
            </div>
            <div>
              <img className=" max-w-full rounded-lg" src={extra3} alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className='text-black pt-5 pb-1'>
        <h2 className='text-base sm:text-sm'>{title}</h2>
        <p className='text-sm sm:text-xs'>{content + count}</p>
      </div>
      <button className="bg-rose-400 px-3 py-2 rounded text-md sm:text-sm hover:bg-rose-300 justify-center" onClick={handleIncrement} > Like!</button >

    </div >
  );
}

export default Card;

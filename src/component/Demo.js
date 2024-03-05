import React, { useState } from 'react'
import { findNthPrime } from './helper';

const Demo = () => {
  const [text,setText] = useState(0);
  const prime = findNthPrime(text) ;
  console.log("prime")

  return (
    <div className='mt-6 ml-6 border-2 border-gray-400 h-72 w-[30%] p-4 '>
      <label>
        Number
      </label>
      <div className='border-2 border-gray-500 mt-4 rounded-lg'>
        <input type='number' value={text} onChange={(e) =>setText(e.target.value)} className='rounded-lg outline-none w-full pl-4 p-2'>

        </input>
      </div>
      <div>
        <h1 className='font-bold '> {prime}</h1>
      </div>
      
      </div>
  )
}

export default Demo
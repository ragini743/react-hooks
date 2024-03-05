import React, { useMemo, useState } from 'react'
import { findNthPrime } from './helper';

const Demo = () => {
  const [text,setText] = useState(0);
  const [isDarkTheme,setIsDarkTheme] =useState(true) ;

  //heavy operation
  // const prime = () =>{
  // console.log("calculate prime number of",text)
  // return  findNthPrime(text) ;
  // }


  const  prime = useMemo(()=> findNthPrime,[text])

  console.log("prime")

  return (
    <div className={'mt-6 ml-6 border-2 border-gray-400 h-72 w-[30%] p-4 '+ (isDarkTheme&& "bg-gray-800 text-white")}>

      <label>
        Number
      </label>
      <div className='border-2 border-gray-500 mt-4 rounded-lg'>
        <input type='number' value={text} onChange={(e) =>setText(e.target.value)} className='rounded-lg outline-none w-full pl-4 p-2'>

        </input>
      </div>
      <div>
        <h1 className='font-bold mt-4'> {prime()}</h1>
      </div>
      <div onClick={() => setIsDarkTheme(!isDarkTheme)} className='mt-10 text-right rounded-lg'>
        <button className='bg-green-800 text-white p-1 rounded-lg'>
          change background
        </button>
      </div>
      </div>
  )
}

export default Demo
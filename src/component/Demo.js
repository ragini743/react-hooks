import React, { useState } from 'react'

const Demo = () => {
  const [text,setText] = useState("");

  return (
    <div className='mt-6 ml-6 border-2 border-gray-400 h-72 w-[30%] p-4 '>
      <label>
        Name
      </label>
      <div className='border-2 border-gray-500 mt-4 rounded-lg'>
        <input type='text' value={text} onChange={(e) =>setText(e.target.value)} className='rounded-lg outline-none w-full pl-4'>

        </input>
      </div>
      
      </div>
  )
}

export default Demo
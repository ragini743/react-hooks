import React, { useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;
  return (
    <div className="border-gray-400 border-2 w-[30%] h-72 ml-6 mt-6 inline-block absolute p-4">
      Demo of useRef
      {/* normal using javascript variable */}
      <div className="flex mt-10 justify-between">
        <h1 className="font-bold">value : {x}</h1>
        <div
          className=" text-right rounded-lg "
          onClick={() => {(x = x + 1); console.log(x)}}
        >
          <button className="bg-green-800 text-white p-1 rounded-lg">
            increase value
          </button>
        </div>
      </div>
      <div className="flex mt-10 justify-between">
        <h1 className="font-bold">Y : {y}</h1>
        <div className=" rounded-lg " onClick={() => setY(y + 1)}>
          <button className="bg-green-800 text-white p-1 rounded-lg">
            increase Y
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo2;

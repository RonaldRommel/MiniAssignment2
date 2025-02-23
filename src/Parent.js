import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Child from "./Child.js";


function Parent() {
    const [count, setCount] = useState(0);
  
    const updateCount = (value) => {
      setCount(value);
    };
  
    const numOfChildren = 4;  // The number of Child components you want to render
  
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        Count: {`${count}`}
        <div className="grid grid-cols-2 gap-1 mt-4">
          {Array.from({ length: numOfChildren }).map((_, index) => (
            <Child key={index} updateCount={updateCount} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Parent;
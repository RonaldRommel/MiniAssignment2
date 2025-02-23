import react, { useState } from "react";
import ReactDOM from "react-dom/client";

function Child({ updateCount }) {
  const [color, setColor] = useState("white");

  const handleClick = () => {
    console.log("clicked" + color);
    if (color === "white") {
      setColor("black");
      updateCount((prevCount) => prevCount + 1);
    } else {
      setColor("white");
      updateCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`h-[100px] w-[100px] bg-${color} border border-grey rounded`}
      ></button>
    </div>
  );
}
export default Child;

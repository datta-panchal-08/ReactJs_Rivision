import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [color, setColor] = useState(false);

  const colorHandler = () => {
    setColor(!color);
  };

  return (
    <div className="flex items-center justify-center gap-10 ">
      <h3 className=" whitespace-nowrap font-bold text-xl uppercase">
        {" "}  Click The Heart{" "}
      </h3>
      <FaHeart
        onClick={colorHandler}
        className={`text-xl cursor-pointer ${
          color ? "text-red-600 hover:scale-150  " : ""
        }`}
      />
    </div>
  );
};

export default LikeButton;

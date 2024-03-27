import React from "react";

const NonClickEvents = () => {
  const dblClickHandler = () => {
    alert("You Double Clicked!");
  };
  const MouseMoveHandler = () => {
    alert("Mouse Move..")
  };
  return (
    <div>
      <button onDoubleClick={dblClickHandler}>Double Click Me! </button>

      <p onMouseMove={MouseMoveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos
        tempore nisi in sed quisquam et libero. Molestiae, quidem et odio
        corrupti blanditiis molestias quaerat sit illo, aperiam veritatis
        voluptates.
      </p>
    </div>
  );
};

export default NonClickEvents;

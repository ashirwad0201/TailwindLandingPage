import React from "react";

const Body = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64"/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64"/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64"/>
        <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64"/>
      </div>
      <div></div>
    </div>
  );
};

export default Body;

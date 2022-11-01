import React from "react";

const PhotoComp = ({ photos, index }) => {
  return (
    <div key={index}>
      <img
        src={photos?.url}
        alt="photograph"
        key={index}
        className="transition delay-75  hover:scale-105"
      />
    </div>
  );
};

export default PhotoComp;

import React from "react";

const PhotoComp = ({ photos, index }) => {
  return (
    <div key={index}>
      <img src={photos?.url} alt="photograph" key={index} />
    </div>
  );
};

export default PhotoComp;

import React from "react";

const Loading = () => {
  return (
    <div className="grid h-75 place-items-center">
      <div className="flex items-center">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-indigo-600 border-4 h-6 w-6 mr-2"></div>
        <h1 className="font-medium text-xl">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;

import React from "react";

const Loading = () => {
  return (
    <div className="grid h-75 place-items-center">
      <div className="flex item-center">
        <div class="border-t-transparent border-solid animate-spin rounded-full border-indigo-600 border-4 h-8 w-8 mr-2"></div>
        <h1 className="font-medium text-xl">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;

import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="grid place-items-center">
      <h1 className="font-medium text-xl">{error}!</h1>
    </div>
  );
};
export default ErrorMessage;

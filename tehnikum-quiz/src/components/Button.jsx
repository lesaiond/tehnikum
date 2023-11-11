import React from "react";

export const Button = ({
  buttonType, buttonText, isDissabled, onClick,
}) => {
  return (
    <button
      disabled={isDissabled}
      type={buttonType === "submit" ? "submit" : "button"}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

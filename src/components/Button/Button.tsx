import React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={classNames(
        "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

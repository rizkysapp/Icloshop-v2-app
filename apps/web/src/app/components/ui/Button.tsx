import React from "react";

interface PropButton {
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<PropButton> = ({ outline, className, children }) => {
  return (
    <>
      <button className={`btn btn-sm transition duration-300 px-4 ${outline ? "btn-outline" : "btn-active btn-neutral text-white hover:bg-white hover:text-gray-950"} ${className}`}>{children}</button>
    </>
  );
};

export default Button;

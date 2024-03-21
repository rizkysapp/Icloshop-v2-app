import React from "react";

interface PropsDropdownMenu {
  btn: React.ReactElement<any, any>;
  children: React.ReactNode;
  className?: string;
  widthLg?: boolean;
  widthSm?: boolean;
  widthXl?: boolean;
}

const DropdownMenu: React.FC<PropsDropdownMenu> = ({ btn, children, className, widthLg, widthSm, widthXl }) => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0}>{btn}</div>
      <ul tabIndex={0} className={`dropdown-content z-[1] ${className}`}>
        <div className={`menu mt-3 p-2 shadow bg-base-100 rounded-lg ${widthLg && "w-44"} ${widthSm && "w-32"} ${widthXl && "w-[350px]"}`}>{children}</div>
      </ul>
    </div>
  );
};

export default DropdownMenu;

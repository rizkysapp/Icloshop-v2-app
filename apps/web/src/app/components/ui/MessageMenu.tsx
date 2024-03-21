import React from "react";
import DropdownMenu from "./DropdownMenu";
import { MdOutlineEmail } from "react-icons/md";

const MessageMenu = () => {
  return (
    <DropdownMenu className="-left-16" widthLg btn={<MdOutlineEmail size={22} />}>
      <div>hehehehh</div>
    </DropdownMenu>
  );
};

export default MessageMenu;

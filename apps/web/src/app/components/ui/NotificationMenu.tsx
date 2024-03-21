import React from "react";
import DropdownMenu from "./DropdownMenu";
import { MdNotificationsNone } from "react-icons/md";

const NotificationMenu = () => {
  return (
    <DropdownMenu className="-left-12" widthLg btn={<MdNotificationsNone size={23} />}>
      <div>hehehehh</div>
    </DropdownMenu>
  );
};

export default NotificationMenu;

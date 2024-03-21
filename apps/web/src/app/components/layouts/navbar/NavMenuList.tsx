import Link from "next/link";
import React from "react";
import DropdownMenu from "../../ui/DropdownMenu";
import { listCategory, navlist } from "@/app/constants/index";

interface PropsNavMenuList {
  className?: string;
}

const NavMenuList: React.FC<PropsNavMenuList> = (className) => {
  return (
    <div className={`flex-center items-center ${className}`}>
      {navlist.map((item, index) => (
        <Link key={index} href={item.link} className="link-nav">
          {item.name}
        </Link>
      ))}
      <DropdownMenu
        widthLg
        btn={
          <Link className="link-nav" href={"/shop/category"}>
            Category
          </Link>
        }
      >
        {listCategory.map((item, index) => (
          <Link href={item.link} key={index} className="flex justify-between font-medium items-center py-2 px-2 hover:bg-gray-200 rounded-md transition duration-200">
            <p>{item.name}</p>
            {<item.icon size={20} />}
          </Link>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default NavMenuList;

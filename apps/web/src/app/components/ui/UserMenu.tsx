import React from "react";
import DropdownMenu from "./DropdownMenu";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const UserMenu = () => {
  return (
    <DropdownMenu widthSm className="-left-12" btn={<FaRegUserCircle size={22} />}>
      <div className="flex flex-col justify-start">
        <Link href={"/user/profile"} className="nav-user-link">
          Profile
        </Link>
        <Link href={"/user/coupon"} className="nav-user-link">
          My coupon
        </Link>
        <Link href={"/user/pembelian"} className="nav-user-link">
          Pembelian
        </Link>
        <Link href={"/user/pengaturan"} className="nav-user-link">
          Pengaturan
        </Link>
        <Link href={"/user/logout"} className="nav-user-link">
          Log out
        </Link>
      </div>
    </DropdownMenu>
  );
};

export default UserMenu;

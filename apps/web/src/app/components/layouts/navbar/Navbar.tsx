import React from "react";
import NavMenuList from "./NavMenuList";
import { IoSearch } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import DropdownMenu from "../../ui/DropdownMenu";
import Link from "next/link";
import Button from "../../ui/Button";

const Navbar = () => {
  return (
    <nav className="navbar py-5">
      <div className="navbar-start">
        <h1 className="logo">Icloshop</h1>
      </div>
      <div className="navbar-center">
        <NavMenuList />
      </div>
      <div className="navbar-end">
        <div className="flex-center space-x-4 items-center border-r pr-4 border-gray-400">
          <IoSearch size={20} />
          <DropdownMenu className="-left-32" widthXl btn={<HiOutlineShoppingCart size={22} />}>
            <div className="flex-col-center items-center space-y-4 py-5">
              <MdOutlineRemoveShoppingCart size={36} />
              <p>Keranjang kosong</p>
              <Link className="btn btn-outline btn-sm px-3" href={"/login"}>
                Belanja Sekarang
              </Link>
            </div>
          </DropdownMenu>
        </div>
        <div className="flex-center items-center ml-4">
          <div className="flex-start items-center space-x-3">
            <Button outline>Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

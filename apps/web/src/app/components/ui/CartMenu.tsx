import React from "react";
import DropdownMenu from "./DropdownMenu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Image from "next/image";

const CartMenu = () => {
  return (
    <DropdownMenu className="-left-32" widthXl btn={<HiOutlineShoppingCart size={22} />}>
      <div className="p-2">
        <h2 className="mb-4 h5">Your Cart :</h2>
        <div className="flex-between">
          <div className="flex-start items-center space-x-6">
            <Image className="" src={""} alt="" width={45} height={45} />
            <div>
              <p className="h6 text-gray-600">Name prod</p>
              <p className="text-xs font-extralight text-gray-400">color</p>
            </div>
          </div>
          <div className="flex-center items-center">
            <div className="flex-center items-center border rounded-lg border-gray-700">
              <button className="px-2 border-r border-gray-700 hover:bg-gray-300 rounded-l-lg transition">-</button>
              <p className="px-2">1</p>
              <button className="px-2 border-l border-gray-700 hover:bg-gray-300 rounded-r-lg transition">+</button>
            </div>
          </div>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default CartMenu;

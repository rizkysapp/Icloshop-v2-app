import { SlFire } from "react-icons/sl";
import { PiTruck, PiSneaker } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";

export const navlist = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
];

export const listCategory = [
  {
    name: "Promo",
    link: "/shop/category/promo",
    icon: MdOutlineDiscount,
  },
  {
    name: "Favorite",
    link: "/shop/category/favorite",
    icon: SlFire,
  },
  {
    name: "Cod",
    link: "/shop/category/cod",
    icon: PiTruck,
  },
  {
    name: "T-shirt",
    link: "/shop/category/tshirt",
    icon: IoShirtOutline,
  },
  {
    name: "Shoes",
    link: "/shop/category/shoes",
    icon: PiSneaker,
  },
];

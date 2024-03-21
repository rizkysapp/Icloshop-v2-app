import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative">
      <input type="text" placeholder="Search" className="input input-sm input-bordered input-info w-full max-w-xs" />
      <button className="absolute right-2 top-2">
        <IoSearch />
      </button>
    </div>
  );
};

export default Search;

"use client";
import React, { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Links from "./Links";

const MenuItems = ({ setDropdownOpen }) => (
  <ul className="space-y-2 p-4 flex flex-col">
    <Links />
    {/* <Link onClick={() => setDropdownOpen(false)} href="/projects">
      Projects
    </Link>
    <Link onClick={() => setDropdownOpen(false)} href="/reading">
      Reading
    </Link>
    <Link onClick={() => setDropdownOpen(false)} href="/interests">
      Interests
    </Link>
    <Link onClick={() => setDropdownOpen(false)} href="/about">
      About
    </Link>
    <Link onClick={() => setDropdownOpen(false)} href="/contact">
      Contact
    </Link> */}
  </ul>
);
export default function Menu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <div className="p-4 bg-b md:p-12 fixed top-0 h-16 md:min-h-screen z-10 bg-white w-full md:w-auto md:top-0 md:left-0 flex justify-between items-center md:items-start md:justify-start md:flex-col space-y-4 shadow-sm shadow-slate-500 rounded-sm ">
        <Link href="/">
          <h1 className="font-semibold text-xl flex items-center">
            Brian VandenAkker
          </h1>
        </Link>
        {/* Visible menu for larger screens */}
        <div className="hidden md:block">
          <MenuItems setDropdownOpen={setDropdownOpen} />
        </div>

        {/* Dropdown for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className=" h-6 w-6 focus:outline-none"
          >
            <Bars4Icon />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-16 bg-white w-full shadow-slate-500 shadow-sm rounded-sm transition-opacity duration-500 ${
          isDropdownOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <MenuItems setDropdownOpen={setDropdownOpen} />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const Togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" mb-5">
      <div className="flex items-center justify-around py-4 bg-blue-500">
        <div className="animate__animated animate__fadeInLeft">
          <Image src="/img/logo.png" width={200} height={60} alt="logo" />
        </div>
        <div className="lg:block hidden  animate__animated animate__fadeInRight">
          <ul className="flex items-center *:px-4 ">
            <li>
              <Link
                href="/"
                className={`${pathName === "/" && "text-green-500"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${pathName === "/blog" && "text-green-500"}`}
              >
                {" "}
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${pathName === "/Faq" && "text-green-500"}`}
              >
                {" "}
                Faq
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${pathName === "/Portfolio" && "text-green-500"}`}
              >
                {" "}
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${pathName === "/Footer" && "text-green-500"}`}
              >
                {" "}
                Footer
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="#"
          className="lg:hidden block text-3xl"
          onClick={() => Togglemenu()}
        >
          {isMenuOpen ? <MdOutlineMenuOpen /> : <HiMenuAlt1 />}
        </Link>
      </div>
      {/* mobilemenu */}

      {isMenuOpen && (
        <div className="lg:hidden block">
          <ul className=" *:p-4  text-center pt-5 bg-gray-100">
            <li>
              <Link
                href="/"
                className={`${pathName === "/" && "text-green-500"}`}
              >
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className={`${pathName === "/Blog" && "text-green-500"}`}
              >
                {" "}
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${pathName === "/Faq" && "text-green-500"}`}
              >
                {" "}
                Faq
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${pathName === "/Portfolio" && "text-green-500"}`}
              >
                {" "}
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${pathName === "/Footer" && "text-green-500"}`}
              >
                {" "}
                Footer
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

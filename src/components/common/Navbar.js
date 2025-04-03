"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsChevronDown } from 'react-icons/bs';
import { Disclosure } from '@headlessui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
const Navbar = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <div
      className={
        color || !bgcolor
          ? "header bg-white z-50 fixed overflow-visible h-[90px] w-full transition duration-300 ease-in"
          : "header bg-white w-full rounded-b-[30px] z-50 backdrop-blur-sm fixed overflow-visible h-[90px] transition duration-300 ease-in"
      }
    >
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image
            src="/common/logo-new.png"
            alt="logo"
            className="cursor-pointer" width={160} height={80}
          />
        </Link>

        <ul className={click ? "nav-menu active md:space-y-0 space-y-4" : "nav-menu"}>

          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-lg  font-bold nav-desk hover:text-transparent bg-clip-text text-black hover:bg-gradient-to-b from-primary  to-[#82cefd] group relative cursor-pointer">
            <Link href="/"> Home </Link>

          </li>
          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-lg  font-bold nav-desk hover:text-transparent bg-clip-text text-black hover:bg-gradient-to-b from-primary  to-[#82cefd] group relative cursor-pointer">
            <Link href="/about-us"> About Us </Link>

          </li>
          <li
            className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-lg  font-bold nav-desk hover:text-transparent bg-clip-text text-black hover:bg-gradient-to-b from-primary  to-[#82cefd] group relative cursor-pointer
              "
          >
            <p className="group-hover:text-transparent bg-clip-text text-black group-hover:bg-gradient-to-b from-primary  to-[#82cefd] flex items-center justify-center">
              Services{' '}
              <span>
                <BsChevronDown
                  className="text-black group-hover:text-[#82cefd]"
                  size={14}
                />
              </span>
            </p>
            <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-left-10 ">
              <div className="top-0 flex py-5 bg-[#292930]">
                <div className="flex flex-col p-1 text-xs text-left text-black w-80 rounded-r-md">
                  <Link
                    href="/web-development-company"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    Website Development Company
                  </Link>

                  <Link
                    href="/digital-marketing-company"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    Digital Marketing Company
                  </Link>

                  <Link
                    href="/social-media-marketing-services"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    Social Media Marketing Company
                  </Link>

                  <Link
                    href="/seo-services"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    SEO Company
                  </Link>
                  <Link
                    href="/ppc-marketing-company"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    PPC Marketing Company
                  </Link>
                  <Link
                    href="/email-marketing-company"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    Email Marketing Company
                  </Link>
                  <Link
                    href="/influencer-marketing-company"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    Influencer Marketing Company
                  </Link>
                </div>

              </div>
            </div>
          </li>


          {/* <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-lg  font-bold nav-desk hover:text-transparent bg-clip-text text-black hover:bg-gradient-to-b from-primary  to-[#82cefd] group relative cursor-pointer">
            <Link href="#"> Blogs </Link>

          </li> */}


          <li
            className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-lg  font-bold nav-desk hover:text-transparent bg-clip-text text-black hover:bg-gradient-to-b from-primary  to-[#82cefd] group relative cursor-pointer
              "
          >
            <p className="group-hover:text-transparent bg-clip-text text-black group-hover:bg-gradient-to-b from-primary  to-[#82cefd] flex items-center justify-center">
              Location{' '}
              <span>
                <BsChevronDown
                  className="text-black group-hover:text-[#82cefd]"
                  size={14}
                />
              </span>
            </p>
            <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-left-10 ">
              <div className="top-0 flex py-5 bg-[#292930]">
                <div className="flex flex-col p-1 text-xs text-left text-black w-60 rounded-r-md">
                  <Link
                    href="/"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    India
                  </Link>
                  <Link
                    href="/"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    London
                  </Link>

                  <Link
                    href="/"
                    className=" hover:text-[#82cefd]   rounded-md px-4 py-2 text-sm text-white"
                  >
                    Dubai
                  </Link>

                </div>

              </div>
            </div>
          </li>

          {/* mobile start */}
          <li className="w-full bg-gradient-to-r from-black/50 via-primary to-black/50 md:hidden block">
            <Link href="/"> <div className="py-2 text-white flex items-center   justify-center w-full">
              Home

            </div> </Link>
          </li>
          <li className="w-full bg-gradient-to-r from-black/50 via-primary to-black/50 md:hidden block">
            <Link href="/about-us"> <div className="py-2 text-white flex items-center   justify-center w-full">
              About Us

            </div> </Link>
          </li>
          <li className="block md:hidden ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-start w-full px-10 text-white">
                    Services
                    <RiArrowDropDownLine
                      className={
                        open ? 'rotate-180 transform w-8 h-8' : 'w-8 h-8'
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-10 text-gray-500 ">
                    <div className="top-0 flex flex-col py-5 bg-white">

                      <div className="flex flex-col p-1 text-xs text-left text-black w-80 rounded-r-md">
                        <Link
                          href="/web-development-company"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          Website Development Company
                        </Link>

                        <Link
                          href="/digital-marketing-company"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          Digital Marketing Company
                        </Link>

                        <Link
                          href="/social-media-marketing-services"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          Social Media Marketing Company
                        </Link>

                        <Link
                          href="/seo-services"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          SEO Company
                        </Link>
                        <Link
                          href="/ppc-marketing-company"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          PPC Marketing Company
                        </Link>
                        <Link
                          href="/email-marketing-company"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          Email Marketing Company
                        </Link>
                        <Link
                          href="/influencer-marketing-company"
                          className=" hover:text-primary   rounded-md px-4 py-2 text-sm text-white"
                        >
                          Influencer Marketing Company
                        </Link>


                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>

          {/* <li className="w-full bg-gradient-to-r from-black/50 via-primary to-black/50 md:hidden block">
            <Link href="#"> <div className="py-2 text-white flex items-center   justify-center w-full">
              Blogs
            </div> </Link>
          </li> */}

          <li className="block md:hidden ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-start w-full px-10 text-white">
                    Location
                    <RiArrowDropDownLine
                      className={
                        open ? 'rotate-180 transform w-8 h-8' : 'w-8 h-8'
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-10 text-gray-500 ">
                    <div className="top-0 flex flex-col py-5 bg-white">

                      <div className="flex flex-col p-1 text-xs text-left text-black w-80 rounded-r-md">
                        <Link
                          href="/"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          India
                        </Link>
                        <Link
                          href="/"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          London
                        </Link>

                        <Link
                          href="/"
                          className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                        >
                          Dubai
                        </Link>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>


          {/*mobile end */}
        </ul>
        <div className="drop-shadow-2xl block  group pr-5">
          <Link
            href="/contact-us"
            className=" bg-[#82cefd] text-black backdrop-blur-sm px-10 py-5 rounded-md font-bold">

            Contact Us

          </Link>
        </div>



      </nav>

    </div>
  );
};

export default Navbar;

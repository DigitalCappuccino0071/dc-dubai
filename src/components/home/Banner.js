"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animate, motion, useInView } from "framer-motion";
import Link from "next/link";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Banner = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const customeSlider = useRef();
  const quote = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const data = [
    {
      id: 4,
      imgSrc: "/home/bannernew-3.png",
      imgSrcMb: "/home/bannerTwo.jpg"
    },

  ];

  return (
    <div>
      <div className="h-full relative md:block hidden" >
        {data.map((e, i) => (
          <div key={i} className="relative">
            <div
              className="relative  md:h-[100vh] h-[80vh] bg-white   "
             
            >
              <div className=" flex justify-center h-full flex-col md:px-16 px-8 md:pt-20 pt-0 ">
                <div className=" space-y-2  grid grid-cols-5 justify-center items-center">
                  <div className="space-y-2 col-span-3 ">
                    <div className="flex space-x-2 px-1">
                      <span className="w-0.5 h-8 bg-[#82cefd]"></span>
                      <h3 className="text-lg text-black  ">Taste The Flavor Of Cappuccino With Our Creative Digital Brilliance</h3>
                    </div>
                    <motion.h2
                      className="md:text-6xl  text-4xl md:leading-[5rem] font-bold text-black pt-7 w-[95%]"
                      variants={quote}
                      initial="initial"
                      animate="animate"
                    >
                      Let&apos;s Brew Creativity Together: Your Vision, Our Expertise
                    </motion.h2>
                  </div>
                  <div className="col-span-2">
                  <img src="/home/man.png" alt="" />
                  </div>
                  {/* <div className="space-y-6">
                    <div className="drop-shadow-2xl pt-12">
                      <Link
                        href="#"
                        className=" text-black bg-primary backdrop-blur-sm px-8 py-3 ">

                        Contact Us

                      </Link>
                    </div>
                   
                  </div> */}
                </div>
              
              </div>

            </div>

          </div>
        ))}
      </div>
      <div className="h-full relative block  md:hidden" >
        {data.map((e, i) => (
          <div key={i} className="relative">
            <div
              className="relative md:h-[100vh] h-[100vh] bg-no-repeat bg-cover bg-top"
              style={{
                backgroundImage: `url(${e.imgSrcMb})`,
              }}
            >
              <div className=" flex justify-center h-full flex-col md:px-16 px-8 bg-black/60 ">
                <div className="max-w-5xl space-y-2">
                  <div className="space-y-2">
                    <div className="flex space-x-2 px-1">
                      <h3 className="text-base text-white pt-10 ">Taking on the Charge in Innovative Digital Marketing Strategies for Canada and Beyond</h3>
                    </div>
                    <h2
                      className="md:text-5xl text-3xl pt-4 md:leading-[4rem] w-full font-extrabold text-white"
                      variants={quote}
                      initial="initial"
                      animate="animate"
                    >
                      Changing Your Digital Presence with Precision and Passion
                    </h2>
                  </div>
                  {/* <div className="space-y-6">
                    <div className="drop-shadow-2xl pt-12">
                      <Link
                        href="#"
                        className=" text-black bg-primary backdrop-blur-sm px-8 py-3 ">

                        Contact Us

                      </Link>
                    </div>
                   
                  </div> */}
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

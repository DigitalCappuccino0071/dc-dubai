import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    const data = [
        {
            id: 1,
            icon: <FaFacebookF />,
            href: "https://www.facebook.com/digitalcappuccino/",
        },
        {
            id: 2,
            icon: <FaInstagram />,
            href: "https://www.instagram.com/digitalcappuccino/",
        },
        {
            id: 3,
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/company/digital-cappuccino/",
        },
        {
            id: 4,
            icon: <FaXTwitter />,
            href: "https://twitter.com/Digicappuccino",
        },
    ];
    return (
        <div className=" bg-white pt-20 md:px-0 px-5 border-t-2">
            <div className="container ">
                <div className=" grid md:grid-cols-4  gap-6 justify-start pb-6">
                    <div className="space-y-4">
                        <Link href="/">
                            <div>
                                <Image
                                    src="/common/logo-new.png"
                                    width="180"
                                    height="160"
                                />
                            </div>
                        </Link>
                        <p className="text-base text-black text-justify  md:tracking-tight  tracking-tighter  md:leading-relaxed ">
                            From Strategy to Execution, Digital Cappuccino
                            Delivers Exceptional Results — Your Go-To Digital
                            Marketing Specialists in dubai{" "}
                        </p>

                        <div>
                            <ul className="flex space-x-4  pt-3">
                                {data.map((e, i) => (
                                    <li key={i} className="flex space-x-5">
                                        <Link
                                            href={e.href}
                                            target="_blank"
                                            className="hover:scale-110 duration-200 w-8  rounded-full bg-black text-white p-2"
                                        >
                                            {e.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex md:justify-center ">
                        <div className="md:flex md:space-x-28 md:space-y-0 space-y-6">
                            <div>
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-black capitalize underline underline-offset-8 decoration-primary">
                                        Quick Links
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="text-base text-black  mt-2">
                                                <span className="">Home </span>
                                            </li>
                                        </Link>
                                        <Link href="/about-us">
                                            <li className="text-base text-black  mt-2">
                                                <span className="">
                                                    About Us{" "}
                                                </span>
                                            </li>
                                        </Link>

                                        <Link href="/web-development-company">
                                            <li className="text-base text-black  mt-2">
                                                <span className="">
                                                    Services{" "}
                                                </span>
                                            </li>
                                        </Link>

                                        <Link href="/contact-us">
                                            <li className="text-base text-black  mt-2">
                                                <span className="">
                                                    Contact Us{" "}
                                                </span>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-black capitalize underline underline-offset-8 decoration-primary">
                                Support
                            </h2>
                            <ul className="">
                                <Link href="/">
                                    <li className="text-base text-black  mt-2">
                                        <span className="">
                                            {" "}
                                            Terms & Conditions{" "}
                                        </span>
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="text-base text-black  mt-2">
                                        <span className="">
                                            Privacy Policy{" "}
                                        </span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-black capitalize underline underline-offset-8 decoration-primary">
                                Information
                            </h2>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-xl font-semibold text-black capitalize ">
                                    <FaPhoneAlt />
                                </h2>
                                <Link href="tel:9910190071">
                                    <div className="text-base text-black  mt-1 flex items-center">
                                        <span className="">9910190071</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-base font-semibold text-black capitalize ">
                                    <IoIosMail />
                                </h2>
                                <Link href="#">
                                    <div className="text-base text-black">
                                        <span className="">
                                            info@digitalcappuccino.com
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-xl font-semibold text-black capitalize ">
                                    <FaLocationDot />
                                </h2>
                                <Link href="#">
                                    <div className="text-base text-black  mt-1 flex items-center">
                                        <span className="">
                                            9131 39 Ave NW Unit # 204, Edmonton,
                                            AB T6E 5Y2, dubai
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-[1px] bg-primary border-primary" />
                <div className="text-center py-5 text-black text-base md:px-0 px-5">
                    <p>
                        {" "}
                        © Copyright ©2024
                        <span className="font-semibold px-2">
                            Digital Cappuccino
                        </span>
                        . All Rights Reserved Copyright
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

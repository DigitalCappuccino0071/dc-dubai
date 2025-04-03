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
        <div className="px-5 pt-20 bg-white border-t-2 md:px-0">
            <div className="container ">
                <div className="grid justify-start gap-6 pb-6 md:grid-cols-4">
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
                        <p className="text-base tracking-tighter text-justify text-black md:tracking-tight md:leading-relaxed ">
                            From Strategy to Execution, Digital Cappuccino
                            Delivers Exceptional Results — Your Go-To Digital
                            Marketing Specialists in dubai{" "}
                        </p>

                        <div>
                            <ul className="flex pt-3 space-x-4">
                                {data.map((e, i) => (
                                    <li key={i} className="flex space-x-5">
                                        <Link
                                            href={e.href}
                                            target="_blank"
                                            className="w-8 p-2 text-white duration-200 bg-black rounded-full hover:scale-110"
                                        >
                                            {e.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex md:justify-center ">
                        <div className="space-y-6 md:flex md:space-x-28 md:space-y-0">
                            <div>
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-black underline capitalize underline-offset-8 decoration-primary">
                                        Quick Links
                                    </h2>
                                    <ul className="">
                                        <Link href="/">
                                            <li className="mt-2 text-base text-black">
                                                <span className="">Home </span>
                                            </li>
                                        </Link>
                                        <Link href="/about-us">
                                            <li className="mt-2 text-base text-black">
                                                <span className="">
                                                    About Us{" "}
                                                </span>
                                            </li>
                                        </Link>

                                        <Link href="/web-development-company">
                                            <li className="mt-2 text-base text-black">
                                                <span className="">
                                                    Services{" "}
                                                </span>
                                            </li>
                                        </Link>

                                        <Link href="/contact-us">
                                            <li className="mt-2 text-base text-black">
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
                            <h2 className="text-xl font-semibold text-black underline capitalize underline-offset-8 decoration-primary">
                                Support
                            </h2>
                            <ul className="">
                                <Link href="/">
                                    <li className="mt-2 text-base text-black">
                                        <span className="">
                                            {" "}
                                            Terms & Conditions{" "}
                                        </span>
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li className="mt-2 text-base text-black">
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
                            <h2 className="text-xl font-semibold text-black underline capitalize underline-offset-8 decoration-primary">
                                Information
                            </h2>
                            <div className="flex items-center space-x-2">
                                <h2 className="text-xl font-semibold text-black capitalize ">
                                    <FaPhoneAlt />
                                </h2>
                                <Link href="https://wa.me/9910190071">
                                    <div className="flex items-center mt-1 text-base text-black">
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
                                    <div className="flex items-center mt-1 text-base text-black">
                                        <span className="">
                                            Office number 113, Palace towers,
                                            Silicon oasis, Dubai, UAE
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-[1px] bg-primary border-primary" />
                <div className="px-5 py-5 text-base text-center text-black md:px-0">
                    <p>
                        {" "}
                        © Copyright ©2024
                        <span className="px-2 font-semibold">
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

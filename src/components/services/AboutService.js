import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutService = ({ title, description, src, subtitle }) => {
    return (
        <div className="container">
            <div className="grid items-center justify-center grid-cols-2 gap-10 py-16">
                <div className="">
                    <h3 className="text-3xl font-extrabold"> {title}</h3>
                    {subtitle && (
                        <h4 className="text-xl font-extrabold">{subtitle}</h4>
                    )}
                    <p className="pt-2">{description}</p>
                    <div className="flex justify-start pt-5 pb-10">
                        <Link href="/contact-us">
                            <button className="px-8 py-4 rounded-md button-2">
                                <div className="eff-2"></div>
                                <span className="flex items-center text-base">
                                    Let&apos;s Connect
                                    <MdKeyboardArrowRight className="text-base" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={src} className="" />
                </div>
            </div>
        </div>
    );
};

export default AboutService;

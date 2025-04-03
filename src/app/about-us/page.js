import About from "@/components/about-us/About";
import Team from "@/components/about-us/Team";
import BannerCommon from "@/components/common/BannerCommon";
import ContactUsBand from "@/components/services/ContactUsBand";
import React from "react";

export const metadata = {
    title: "About  Us - Digital Cappuccino",
    description: "",
    keywords:
        "website development company, website developers, web development services, web development agency, website design and development services, web development companies near me, website development service",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/about-us`,
    },

    openGraph: {
        url: `/about-us`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="About Us" link="" />
            <About />
            <Team />
            <ContactUsBand />
        </div>
    );
};

export default Page;

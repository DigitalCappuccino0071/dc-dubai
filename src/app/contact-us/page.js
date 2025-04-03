import BannerCommon from "@/components/common/BannerCommon";
import Form from "@/components/contact-us/Form";
import React from "react";

export const metadata = {
    title: "Contact Us - Digital Cappuccino",
    description: "Contact Digital Cappuccino today to learn more.",
    keywords: "",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/contact-us`,
    },

    openGraph: {
        url: `/contact-us`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="Contact Us" link="" />
            <Form />
        </div>
    );
};

export default Page;

import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { servicesDigital } from "@/lib/appData";
import { faqDigital } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "Best Digital Marketing Agency & Company in Canada - Digital Cappuccino",
    description:
        "Digital Cappuccino offers the best digital marketing services in Canada, it's known as one of the best Digital Marketing Agency & Company in Canada. CONTACT US NOW",
    keywords:
        "Digital Marketing Agency, digital marketing company, online advertising, digital marketing services, internet marketing, digital marketing strategy, marketing company for small business, digital marketing specialist, best digital marketing agencies, best digital marketing companies ,digital marketing agency website",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/digital-marketing-company`,
    },

    openGraph: {
        url: `/digital-marketing-company`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="Digital Marketing Company" link="" />
            <AboutService
                title="Turning clicks into customers"
                subtitle="Get found. Get leads. Get results."
                description="Digital Cappuccino helps your brand build an online presence via different digital marketing services and strategies. Our team consists of social media strategists, SEO specialists, and creative content developers who work together to provide individualised solutions. We intend to enhance your visibility, engagement, and return on investment using data-driven techniques that are strategically leveraged. We are committed to the idea of co-creation and the application of breakthrough methods that will guarantee the survival of the brand in the digital environment and also its prospering."
                src="/common/digital.png"
            />
            <ServicesWeProvide
                title="Service We Provide"
                data={servicesDigital}
            />
            <FaqService
                title="Stay Ahead with our Future Ready Digital Marketing Solutions"
                data={faqDigital}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { services, servicesWebsite } from "@/lib/appData";
import { faqWebsite } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "Website Development Company in dubai | Web Design & Development Services",
    description:
        "Digital Cappuccino is one of the best website development company. Our expert web developers and designers provide you website designing, website development, and digital marketing services..",
    keywords:
        "website development company, website developers, web development services, web development agency, website design and development services, web development companies near me, website development service",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/web-development-company`,
    },

    openGraph: {
        url: `/web-development-company`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="Website Development Company" link="" />
            <AboutService
                title="The future of web development is here."
                subtitle="Click. Convert. Conquer."
                description="At Digital Cappuccino, we offer a full range of website development services designed to support your business goals effortlessly. Our team specializes in all aspects of website creation, from the initial setup to consistent maintenance and ongoing improvements. Whether it's crafting attractive designs or handling technical aspects like programming and database management, we ensure your online presence is finely tuned to achieve success. Our expertise extends to developing internet-based applications for websites and web platforms alike. Our comprehensive approach encompasses client-side and server-side scripting, security configuration, e-commerce development, and CMS creation. As a website development company in dubai, we work to deliver results that meet your digital needs, making us a notable entity in web design and development."
                src="/common/web_development.png"
            />
            <ServicesWeProvide
                title="Our Outstanding Website Development Services"
                data={servicesWebsite}
            />
            <FaqService
                title=" Clarifying Curiosities: Your Questions Answered with Care"
                data={faqWebsite}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

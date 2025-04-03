import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { servicesSocialMedia } from "@/lib/appData";
import { faqDigital, faqSocialMedia } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "Social Media Marketing Agency in Canada | SMM Services",
    description:
        "Looking for a Social Media Marketing company & Agency in Canada? Digital Cappuccino is the best social media marketing Company in Canada. We offer professional social media marketing services and marketing programs to reach your goals.",
    keywords:
        "social media marketing canada, social media marketing agency in canada, social media marketing toronto, social media marketing vancouver, social media marketing, social media marketing agency, social media agency, social media advertising, social media management companies, social media consultant, social media marketing services",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/social-media-marketing-services`,
    },

    openGraph: {
        url: `/social-media-marketing-services`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="Social Media Marketing Company" link="" />
            <AboutService
                title="The future of social media is here"
                subtitle="Get social.Get noticed."
                description="Digital Cappuccino works in social media management, collaborating closely with customers to develop optimal audience engagement plans. We align marketing strategies with both client-specific and broader market goals, understanding the critical and essential role of content. We craft impactful content that effectively connects our clients with stakeholders across various platforms. By analysing audience interactions, we enhance perceptions and boost business performance.."
                src="/common/social_media.png"
            />
            <ServicesWeProvide
                title="Service We Provide"
                data={servicesSocialMedia}
            />
            <FaqService
                title="Stay Ahead with our FutureReady Digital Marketing Solutions"
                data={faqSocialMedia}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

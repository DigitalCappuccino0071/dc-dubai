import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { servicesSeo } from "@/lib/appData";
import { faqSeo } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "SEO Company Canada | Ecommerce SEO services",
    description:
        "SEO Company in Canada – Digital Cappuccino is a leading SEO Agency that offers the best SEO services in Canada which helps you to get more website traffic.",
    keywords:
        "SEO Services in Canada, SEO Services, local seo services, seo services toronto, seo services near me, toronto seo services, seo services in calgary, expert seo services, professional seo services, seo services toronto canada, seo toronto services, seo company, seo company toronto, local seo company, seo optimization company toronto, seo company vancouver",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/seo-services`,
    },

    openGraph: {
        url: `/seo-services`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="SEO Company" link="" />
            <AboutService
                title="Your Search Engine Optimisation Partner."
                subtitle="Don't Get Lost in the Search. Get Found with Us."
                description="At Digital Cappuccino, we work with various services, including premium SEO solutions. Our work lies in enhancing the quality and quantity of website traffic through search engines. Our targeted approach aims to improve organic results across various search categories, such as images, videos, academia, news, and industry-specific queries. By understanding search engine mechanics and user preferences, we ensure the success of your online presence. Partner with us for outstanding SEO services in Canada, where we diligently work as your preferred SEO firm to increase unpaid traffic and potential client conversions."
                src="/common/seo.png"
            />
            <ServicesWeProvide
                title="Our Exemplary SEO Services"
                data={servicesSeo}
            />
            <FaqService
                title="Clarifying Curiosities: Your Questions Answered with Care"
                data={faqSeo}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

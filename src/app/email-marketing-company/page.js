import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { servicesEmail } from "@/lib/appData";
import { faqEmail } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "Best Email Marketing Company in dubai - Digital Cappuccino",
    description:
        "Are you looking for the best email marketing company in dubai? Digital Cappuccino is here to provide you with all the solutions.",
    keywords: "",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/email-marketing-company`,
    },

    openGraph: {
        url: `/email-marketing-company`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="Email marketing Company" link="" />
            <AboutService
                title="Unlock the hidden potential of your inbox."
                subtitle="Together, let's make email marketing a win-win."
                description="At Digital Cappuccino, we offer a diverse range of services, including Email Marketing solutions. Our approach involves strategically crafting promotional communications delivered via email to targeted subscriber groups. Whether reaching out to new prospects or nurturing existing customers, every email we send is a powerful tool in our Email Marketing arsenal. Our techniques encompass delivering messages for advertisements, business inquiries, sales promotions, and donation requests. Our primary objectives are to enhance brand visibility, foster customer loyalty, and build trust. We work to deliver unparalleled Email Marketing services."
                src="/common/email.png"
            />
            <ServicesWeProvide
                title="Our Exceptional Email Marketing Services"
                data={servicesEmail}
            />
            <FaqService
                title="Clarifying Curiosities: Your Questions Answered with Care"
                data={faqEmail}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

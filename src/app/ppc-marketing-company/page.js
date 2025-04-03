import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { servicesPpc } from "@/lib/appData";
import { faqPpc } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "PPC Company & Agency in dubai |  PPC Services in dubai",
    description:
        "Digital Cappuccino is the best PPC company & agency in dubai. We offer the affordable PPC services and synthesize marketing programs and merge techniques to reach your goals.",
    keywords:
        "pay per click advertising, ppc marketing, ppc agency, ppc company, best ppc agency, google ppc campaigns, ppc advertising, ppc specialist, google ppc advertising, ppc management services, ppc consultant",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/ppc-marketing-company`,
    },

    openGraph: {
        url: `/ppc-marketing-company`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="PPC Company" link="" />
            <AboutService
                title="More Clicks, More Leads, More Sales: Unleash the Power of PPC."
                description="Welcome to Digital Cappuccino, your trusted partner in comprehensive PPC marketing solutions designed to maximize your online reach and drive measurable results. Our full suite of services includes cost-effective standard packages designed to elevate your business. Harness our innovative digital strategies to boost revenue through Google AdWords and other major advertising platforms. We understand the power of targeted online advertising. Our team of experienced professionals crafts diverse PPC campaigns, encompassing search ads, display ads, and remarketing strategies, all designed to meet your specific promotional goals. Our know-how is applied to pull in as much money from your investment as we can through traffic being sent to your site. By working together with us you will be able to get the most out of your digital marketing campaigns, thus, you can stay focused on your individual business goals."
                src="/common/google_ads.png"
            />
            <ServicesWeProvide title="Service We Provide" data={servicesPpc} />
            <FaqService
                title="Stay Ahead with our FutureReady Ppc Marketing Solutions"
                data={faqPpc}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

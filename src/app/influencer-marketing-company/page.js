import BannerCommon from "@/components/common/BannerCommon";
import AboutService from "@/components/services/AboutService";
import ContactUsBand from "@/components/services/ContactUsBand";
import FaqService from "@/components/services/FaqService";
import ServicesWeProvide from "@/components/services/ServicesWeProvide";
import { influencerMarketing } from "@/lib/appData";
import { faqInfluencer } from "@/lib/faqData";
import React from "react";

export const metadata = {
    title: "Best Influencer Marketing Company & Agency  in dubai",
    description:
        "Looking for the best influencer marketing agency in dubai? Digital Cappuccino is the best influencer marketing company in dubai. We synthesize marketing programs and merge techniques to reach your goals.",
    keywords:
        "influencer marketing, influencer agency, influencer marketing platform, influencer marketing agencies, best influencer marketing platform, micro influencer agency, influencer management, influencer marketing companies, social media influencer agency, find an influencer, social media influencer marketing, micro influencer",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/influencer-marketing-company`,
    },

    openGraph: {
        url: `/influencer-marketing-company`,
    },
};
const Page = () => {
    return (
        <div>
            <BannerCommon title="Influencer Marketing Company" link="" />
            <AboutService
                title="The spark that ignites engagement."
                subtitle="Grow your audience.Amplify your voice."
                description="We develop customised marketing strategies according to the correct demographic which gives significant results. We carefully analyse customers demands and then develop creative and run strong campaign plans. We create better brand awareness to increase your visibility through real content which gives a better return on investment. So, start your journey with Digital Cappuccino to get assured results. Get in touch now to learn how our influencer marketing services could assist your business."
                src="/common/youtube.png"
            />
            <ServicesWeProvide
                title="Service We Provide"
                data={influencerMarketing}
            />
            <FaqService
                title="Stay Ahead with our FutureReady Influencer Marketing Solutions"
                data={faqInfluencer}
            />
            <ContactUsBand />
        </div>
    );
};

export default Page;

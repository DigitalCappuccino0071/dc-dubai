import About from "@/components/home/About";
import Affiliation from "@/components/home/Affiliation";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Influencer from "@/components/home/Influencer";
import MissionVision from "@/components/home/MissionVision";
import Packages from "@/components/home/Packages";
import Services from "@/components/home/Services";
import React from "react";

const Page = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <MissionVision />
            <Packages />
            <Influencer />
            <Affiliation />
            <Contact />
        </div>
    );
};

export default Page;

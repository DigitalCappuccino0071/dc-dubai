import React from "react";
import { SiSololearn } from "react-icons/si";
import { GiArchiveResearch, GiBlackBook, GiChoice } from "react-icons/gi";
const MissionVision = () => {
    return (
        <div className="bg-gray-50">
            <div className="container py-20 md:px-0 px-5">
                <div className="grid md:grid-cols-3  gap-5">
                    <div>
                        <h4 className="  font-bold md:text-4xl text-3xl text-center md:text-left md:pt-44 pt-10  ">
                            Foundation of Our Success:
                        </h4>
                        <h4 className="  font-bold md:text-4xl text-3xl text-center md:text-left pt-3  ">
                            {" "}
                            Our Vision & Mission{" "}
                        </h4>
                    </div>
                    <div className="bg-[#82cefd6d] pt-16 md:pb-0 pb-10 px-10 rounded-xl">
                        <h3 className="text-7xl font-semibold">
                            {" "}
                            <GiBlackBook />
                        </h3>
                        <h5 className="py-4 font-semibold text-xl">
                            Our Vision
                        </h5>
                        <p className="pb-5 text-justify tracking-tighter">
                            When it comes to digital marketing in dubai, Digital
                            Cappuccino wants to be your first choice. Our goal
                            is to revolutionise the way you interact with the
                            internet and change the way the world works. As a
                            marketing agency, we lead the pack by injecting
                            fresh ideas and imagination into every campaign. Our
                            relentless pursuit of excellence has helped us
                            establish ourselves as a premier advertising agency
                            and industry pioneer in search engine optimisation
                            (SEO).{" "}
                        </p>
                    </div>
                    <div className="bg-[#82cefd6d] py-12 px-10 rounded-xl mt-10">
                        <h3 className="text-7xl font-semibold">
                            <SiSololearn />
                        </h3>
                        <h5 className="py-4 font-semibold text-xl">
                            Our Mission
                        </h5>
                        <p className="text-justify tracking-tighter">
                            The most prominent Canadian advertising agency,
                            Digital Cappuccino, provides a full spectrum of
                            efficient marketing solutions. To increase your
                            brand&apos;s exposure and credibility online, we use
                            data-driven techniques. In order to help your
                            company interact with its audience, our social media
                            marketing teams create impactful campaigns.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;

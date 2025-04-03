import React from "react";

const data = [
    {
        id: 1,
        src: "/home/backgroundone.png",
        title: "Website Development",
        para: " Designing and Creating  appealing , user-friendly websites that draw in visitors and keep them engaged.",
    },
    {
        id: 2,
        src: "/home/backgroundtwo.png",
        srcimg: "/home/digital-campaign.png",
        title: "Digital Marketing",
        para: "By utilising our professional digital marketing services, you may enhance your online visibility and propel expansion.",
    },
    {
        id: 3,
        src: "/home/backgroundthree.png",
        srcimg: "/home/social-media.png",
        title: "Social Media Marketing",
        para: "Build trustworthy connections with effective influencer marketing and personalised content.",
    },
    {
        id: 4,
        srcimg: "/home/support.png",
        src: "/home/backgroundtwo.png",
        title: "SEO Services",
        para: "Raise your brand's profile and achieve better placement in search engine results across dubai with our expert SEO services.        ",
    },
    {
        id: 5,
        src: "/home/backgroundthree.png",
        srcimg: "/home/pay-per-click.png",
        title: "PPC Marketing",
        para: "Efficient and productive advertising campaigns can be achieved using data-driven pay-per-click management.",
    },
    {
        id: 6,
        src: "/home/backgroundone.png",
        srcimg: "/home/email-marketing.png",
        title: "Email Marketing",
        para: " Email marketing methods that are both innovative and smart allow you to engage your audience directly.   ",
    },
    {
        id: 7,
        src: "/home/backgroundone.png",
        srcimg: "/home/influencer-marketing.png",
        title: "Influencer Marketing",
        para: "Collaborating with top influencers to boost your brand's presence and credibility.",
    },
];

const Services = () => {
    return (
        <div>
            <div className="container md:px-0 px-5 relative md:pt-20 pt-10">
                <h2 className="md:text-4xl text-3xl text-center font-bold">
                    Our Expertise{" "}
                </h2>
                <h3 className="md:text-xl text-lg pt-2 text-center font-medium">
                    {" "}
                    Globally, we deliver logistics and freight solutions that
                    are both dynamic and efficient.
                </h3>

                <div className="grid md:grid-cols-3 items-center justify-between gap-12 md:py-16 py-8 md:px-0 px-5">
                    {data.map((item, e) => (
                        <div className="relative group hoverParent" key={e}>
                            <div className="child1 w-full h-[60%] ">
                                <img
                                    src={item.src}
                                    className=" group-hover:block hidden imageHover"
                                />
                            </div>
                            <div
                                className="child2 bg-white px-6  flex flex-col justify-center gap-2 absolute top-5 left-5 w-[90%] h-[90%]  rounded-lg shadow-lg "
                                key={e}
                            >
                                <h5 className="font-bold text-xl text-center">
                                    {item.title}
                                </h5>
                                <p className="text-center  tracking-tighter pt-4">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;

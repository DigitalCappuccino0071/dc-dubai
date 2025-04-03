import React from 'react'

const Team = () => {


    const advisors = [
        {
            id: 1,
            image: "/common/team1.png",
            name: "Tushar",
            designation: "Seo Executive",
        },
        {
            id: 2,
            image: "/common/team6.png",
            name: "Harshi Sharma",
            designation: "Influencer Marketing Executive",
        },
        {
            id: 3,
            image: "/common/team3.png",
            name: "Prince",
            designation: "Seo Executive",
            desc: "Everything you’ve ever wanted is on the other side of fear.",
        },

        {
            id: 4,
            image: "/common/team2.png",
            name: "Harsh",
            designation: "Seo Executive",
        },

        {
            id: 5,
            image: "/common/team5.png",
            name: "Sapna Srivastav",
            designation: "Marketing Executive",
        },
        {
            id: 6,
            image: "/common/team6.png",
            name: "Anjali Sharma",
            designation: "Marketing Executive",
        },

        {
            id: 7,
            image: "/common/team8.png",
            name: "Sunil",
            designation: "Web Developer",
            desc: "Everything you’ve ever wanted is on the other side of fear.",
        },
    ];


    return (
        <div className="bg-secondary/10 py-12">
            <div className="container">
                <h2 className='md:text-4xl text-3xl text-center font-bold'> People are the key to success </h2>


                <div className="grid md:grid-cols-3 gap-3 pb-10">
                    {advisors.map((item, index) => (
                        <>
                            <div className="group p-6" key={index}>
                                <div className="relative bg-white text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-secondary hover:border-2 rounded-xl ">
                                    <div className="inline-flex justify-center items-center rounded-md md:mt-8">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="rounded-[100%] w-20 h-20 mx-auto object-cover"
                                        />
                                    </div>

                                    <h2 className="font-semibold text-lg py-3 text-black text-center">
                                        {item.name}
                                    </h2>
                                    <p className="text-primary pb-4 text-center px-3 text-sm">
                                        {item.designation}
                                    </p>
                                    {/* <p className="text-black/50 group-hover:text-black text-center px-3 text-sm">
                {item.desc}
              </p> */}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
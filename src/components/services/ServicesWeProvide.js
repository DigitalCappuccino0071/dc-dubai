
import React from 'react'

const ServicesWeProvide = ({ data, title }) => {


    return (
        <div className="bg-gray-50">
            <div className="container py-12">

                <div className="text-3xl font-bold text-center">
                    {title}
                </div>

                <div className="md:grid grid-cols-3 pt-4">
                    {data.map((item, e) => (
                        <div className="group md:mx-5 md:py-10 py-4" key={e}>
                            <div className=" text-center bg-secondary/10 shadow-md  hover:drop-shadow-xs  hover:shadow-lg rounded-xl py-10 h-[25rem]">
                                <div className=" duration duration-1000 rounded-full   w-full flex justify-center">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="  rounded-lg w-12 h-12 mx-auto "
                                    />
                                </div>
                                <h2 className="font-semibold text-lg text-primaryMain text-center pt-3 w-52 mx-auto">
                                    {item.name}
                                </h2>
                                <p className="text-black/80 group-hover:text-black py-4 pb-4 text-[0.900rem] text-justify tracking-tighter px-5 ">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ServicesWeProvide
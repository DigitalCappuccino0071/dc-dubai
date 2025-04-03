import React from 'react'
import ShortForm from './ShortForm'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const BannerCommon = ({ title, link }) => {
    return (

        <div className="relative">
            <div
                className="relative h-screen bg-no-repeat bg-top bg-cover"
                style={{
                    backgroundImage: "url('/common/backgroundimg.jpg')",
                }}
            >
                <div className="container text-black flex justify-center items-center h-full flex-col md:px-0 px-5 pt-20 ">
                    <div className="grid grid-cols-2 gap-10 justify-center items-center">

                        <div className=" md:space-y-6 space-y-4 ">
                            <div className="flex">
                                <span className="w-0.5 h-16 bg-primary mr-1"></span>
                                <h3 className="md:text-[2.9rem] text-3xl md:leading-[4rem] font-extrabold">{title}</h3>
                            </div>
                            <div>
                                <div className="flex justify-start pt-5 pb-10">
                                    <Link href={link}>
                                        <button className="px-8 py-4 rounded-md button-2">
                                            <div className="eff-2"></div>
                                            <span className="flex items-center text-base">
                                                {' '}
                                                Let&apos;s Connect
                                                <MdKeyboardArrowRight className="text-base" />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ShortForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCommon
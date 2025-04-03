import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ContactUsBand = () => {
    return (
        <div >
            <div
                className="relative h-[60vh] bg-no-repeat bg-top bg-cover"
                style={{
                    backgroundImage: "url('/common/news-bg-blue.jpg')",
                }}
            >
                    <div className="flex flex-col items-center justify-center container">
                            <h3 className="text-base text-white pt-10 ">
                                Taking on the Charge in Innovative Digital Marketing Strategies for Canada and Beyond
                            </h3>
                       
                        <h2 className="md:text-5xl text-3xl pt-4 md:leading-[4rem] text-center w-full font-extrabold text-white"  >
                            Changing Your Digital Presence with Precision and Passion
                        </h2>
                        
                    <div className="flex justify-start pt-5 pb-10">
                        <Link href="">
                            <button className="px-8 py-4 rounded-md button-2">
                                <div className="eff-2"></div>
                                <span className="flex items-center text-base">
                                    Let&apos;s Connect
                                    <MdKeyboardArrowRight className="text-base" />
                                </span>
                            </button>
                        </Link>
                    </div>
                    </div>


            </div>
        </div>

    )
}

export default ContactUsBand
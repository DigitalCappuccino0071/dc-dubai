import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const About = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-2 gap-10 justify-center items-center py-16">

                <div className="">
                    <h3 className="text-3xl  font-extrabold">Digital Cappuccino brews the right cup</h3>
                    <p className="pt-2">
                        Welcome to digital Cappuccino where we blend creativity, strategy, and technology to brew up digital marketing solutions that energize your brand. Just like a freshly brewed cappuccino, our digital marketing strategies are crafted to awaken your brand and engage your audience. We specialize in a wide range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and more. Our goal is to help our clients achieve their marketing objectives and drive results. So why settle for a mediocre cup of joe when you can have a premium, hand-crafted digital marketing solution? Contact us today to learn more about how our digital marketing strategies can help your brand stand out and grow.
                    </p>
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
                <div>
                    <iframe width="560" height="400" src="https://www.youtube.com/embed/qqwmN2dQlck?si=o9f26d8wHinUpVaL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
}

export default About
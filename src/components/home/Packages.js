import React from 'react';
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
const Packages = () => {
  const data = [
    {
      id: 1,
      desc: 'Bronze Blend',
      mug: '/common/mug-1.png',
      img: '/home/professional-team.png',
      title: '700',
      des1: 'Keyword Surveillance (2-4 keywords)',
      des2: 'City-Specific Targeting (12 locations)',
      des3: 'Strategic Backlinking / Guest Contributions (1-2 per quarter)',
      des4: 'Engaging Blog Articles / Corporate Storytelling (400 words)',
      des5: 'Monthly Social Media Engagement (6 posts per month on Facebook, Instagram, Twitter)',
      des6: 'Google My Business Optimization',
      des7: 'Personalised Account Management',
      des8: 'Comprehensive Keyword Audit & Enhancement',
      iconim: '/common/package1.png',
    },
    {
      id: 2,
      desc: 'Silver Espresso',
      mug: '/common/mug-2.png',
      img: '/home/competitive.png',
      title: '900',
      des1: 'Keyword Surveillance (6-12 keywords)',
      des2: 'City-Specific Targeting (20  locations)',
      des3: 'Strategic Backlinking / Guest Contributions (2-3 per quarter)',
      des4: 'Engaging Blog Articles / Corporate Storytelling (500 words)',
      des5: 'Monthly Social Media Engagement (12 posts per month on Facebook, Instagram, Twitter)',
      des6: 'Google My Business Optimization',
      des7: 'Personalised Account Management',
      des8: 'Comprehensive Keyword Audit & Enhancements',
      iconim: '/common/package2.png',
    },
    {
      id: 3,
      desc: 'Golden Roast',
      mug: '/common/mug-3.png',
      img: '/home/budget.png',
      title: '1000',
      des1: 'Keyword Surveillance (10-25 keywords)',
      des2: 'City-Specific Targeting (30  locations)',
      des3: 'Strategic Backlinking / Guest Contributions (3-4 per quarter)',
      des4: 'Engaging Blog Articles / Corporate Storytelling (600 words)',
      des5: 'Monthly Social Media Engagement (15 posts per month on Facebook, Instagram, Twitter)',
      des6: 'Google My Business Optimization',
      des7: 'Personalised Account Management',
      des8: 'Comprehensive Keyword Audit & Enhancements',
      iconim: '/common/package4.png',
    },
    {
      id: 4,
      desc: 'Platinum Perk',
      mug: '/common/mug-4.png',
      img: '/home/budget.png',
      title: '1100',
      des1: 'Keyword Surveillance (25-40 keywords)',
      des2: 'City-Specific Targeting (40  locations)',
      des3: 'Strategic Backlinking / Guest Contributions (4-5 per quarter)',
      des4: 'Engaging Blog Articles / Corporate Storytelling (700 words)',
      des5: 'Monthly Social Media Engagement (18 posts per month on Facebook, Instagram, Twitter)',
      des6: 'Google My Business Optimization',
      des7: 'Personalised Account Management',
      des8: 'Comprehensive Keyword Audit & Enhancements',
      iconim: '/common/package3.png',
    },
    // {
    //     id: 5,
    //     desc: "Kryptonite Cappuccino",
    //     mug: "/common/mug-5.png",
    //     img: "/home/budget.png",
    //     title: "$30",
    //     des1: "Keyword Surveillance (40-60 keywords)",
    //     des2: "City-Specific Targeting (50  locations)",
    //     des3: "Strategic Backlinking / Guest Contributions (5-6 per quarter)",
    //     des4: "Engaging Blog Articles / Corporate Storytelling (800 words)",
    //     des5: "Monthly Social Media Engagement (24 posts per month on Facebook, Instagram, Twitter)",
    //     des6: "Google My Business Optimization",
    //     des7: "Personalised Account Management",
    //     des8: "Comprehensive Keyword Audit & Enhancements",
    //     iconim: "/common/package5.png"
    // },
  ];

  return (
    <div className="bg-[#82cefd2c]">
      <div className="container px-5 md:px-0">
        <div className="py-10 ">
          <h2 className="text-3xl font-bold text-center md:text-4xl">
            Our Packages{' '}
          </h2>
          <h3 className="pt-2 text-lg font-medium text-center md:text-xl">
            {' '}
            Unwrap Joy with Our Exclusive Packages!
          </h3>

          <div className="grid-cols-2 gap-10 pt-10 space-y-6 md:grid md:space-y-0 ">
            {data.map((e, i) => (
              <div className="grid-cols-6 md:grid " key={i}>
                <div className=" col-span-5 px-4 py-12 rounded-lg shadow-md space-y-4   group bg-white hover:bg-[#82cefd7d]">
                  <div className="flex items-center">
                    <p className="font-semibold group-hover:text-black">
                      {e.desc}
                    </p>
                    <img src={e.mug} alt="" className="w-10 h-10" />
                  </div>
                  <hr className="w-full h-[0.15rem] bg-primary group-hover:bg-[#82cefd]" />
                  {/* <h2 className="font-semibold text-secondary">
                    <span className="text-4xl">{e.title}</span>
                    <span className="text-xl">/month</span>
                  </h2> */}
                  <p className="flex pt-2 space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des1}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des2}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des3}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des4}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-8 h-8 text-green-400 group-hover:text-white" />
                    <span>{e.des5}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des6}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des7}</span>
                  </p>
                  <p className="flex space-x-1 text-sm group-hover:text-black justify-left">
                    {' '}
                    <TiTickOutline className="w-5 h-5 text-green-400 group-hover:text-white" />
                    <span>{e.des8}</span>
                  </p>

                  <div className="flex justify-start pt-5 ">
                    <Link href="/contact-us">
                      <button className="px-6 py-2 rounded-md button-2">
                        <div className="eff-2"></div>
                        <span className="flex items-center text-base">
                          Let&apos;s Connect
                          <MdKeyboardArrowRight className="text-base" />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="items-end justify-end hidden col-span-1 md:flex ">
                  <img src={e.iconim} className="w-28 h-52" />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="md:grid grid-cols-2 gap-4 max-w-[52rem] md:space-y-0 space-y-6 mx-auto pt-12">
                        {data.slice(3, 5).map((e, i) => (
                            <div className='grid md:grid-cols-6 ' key={i}>
                                <div
                                    className=" col-span-5 px-4 py-12 rounded-lg shadow-md space-y-4   group bg-white hover:bg-[#82cefd]"
                                >
                                    <div className='flex items-center'>
                                        <p className="font-semibold group-hover:text-black">{e.desc}</p>
                                        <img src={e.mug} alt="" className='w-10 h-10' />
                                    </div>
                                    <hr className='w-full h-[0.15rem] bg-primary group-hover:bg-[#82cefd]' />
                                    <h2 className="font-semibold text-secondary">
                                        <span className='text-4xl'>{e.title}</span><span className='text-xl'>/month</span>
                                    </h2>
                                    <p className="flex pt-2 space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='w-5 h-5 text-green-400' /><span>{e.des1}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='w-5 h-5 text-green-400' /><span>{e.des2}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='text-green-400 w-7 h-7' /><span>{e.des3}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='text-green-400 w-7 h-7' /><span>{e.des4}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='w-10 h-10 text-green-400 ' /><span>{e.des5}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='w-5 h-5 text-green-400 ' /><span>{e.des6}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='w-5 h-5 text-green-400 ' /><span>{e.des7}</span></p>
                                    <p className="flex space-x-1 text-sm group-hover:text-black justify-left"> <TiTickOutline className='w-5 h-5 text-green-400 ' /><span>{e.des8}</span></p>

                                </div>
                                <div className='items-end justify-end hidden col-span-1 md:flex '>
                                    <img src={e.iconim} className='w-28 h-44' />
                                </div>
                            </div>
                        ))}
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Packages;

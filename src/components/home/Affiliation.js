'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientsData = [
  {
    id: 1,

    image: '/common/netflix.png',
  },
  {
    id: 2,

    image: '/common/sony.jpg',
  },
  {
    id: 3,

    image: '/common/max-life.png',
  },
  {
    id: 4,

    image: '/common/t-series.png',
  },
  {
    id: 5,

    image: '/common/brandLogo/Adaction.jpg',
  },
  {
    id: 6,

    image: '/common/brandLogo/Airtel.jpg',
  },
  {
    id: 7,

    image: '/common/brandLogo/Apps Flyer.jpg',
  },
  {
    id: 8,
    image: '/common/brandLogo/Branch.jpg',
  },
  {
    id: 9,
    image: '/common/brandLogo/Branch.jpg',
  },
  {
    id: 10,
    image: '/common/brandLogo/havells.jpg',
  },
  {
    id: 11,
    image: '/common/brandLogo/kochava.jpg',
  },
  {
    id: 12,
    image: '/common/brandLogo/Magic Brick.jpg',
  },
  {
    id: 13,
    image: '/common/brandLogo/MI.jpg',
  },
  {
    id: 14,
    image: '/common/brandLogo/Samsung.jpg',
  },
  {
    id: 15,
    image: '/common/brandLogo/Unacadmey.jpg',
  },
  {
    id: 16,
    image: '/common/brandLogo/Upgrad.jpg',
  },
];

const Affiliation = () => {
  const settings = {
    className: 'center',
    slidesToShow: 4,
    autoplaySpeed: 700,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 1000,

    lazyLoad: true,
    accessibility: true,
    cssEase: 'ease-out',
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          speed: 4000,
        },
      },
    ],
  };

  return (
    <div className="container px-10 py-10 lg:px-0">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-3xl font-bold leading-relaxed text-black md:text-4xl font-para ">
          Projects
        </div>

        <div className="pt-2 text-lg font-medium text-center md:text-xl">
          Our Share In The Industry
        </div>
      </div>

      <div className="py-16">
        <Slider {...settings} className="mx-auto testimonialSlider">
          {clientsData.map(item => (
            <>
              <div className="group " key={item}>
                <div className="relative text-center">
                  <div className="flex items-center justify-center h-36">
                    <img
                      src={item.image}
                      alt=" "
                      className="mx-auto rounded-lg md:w-32"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Affiliation;

'use client';
import usePost from '@/hooks/usePost';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
  const postMutation = usePost(
    'https://www.digitalcappuccino.ca//api/contact',
    'contactForm',
    'form submitted successfully'
  );
  //form feild

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [submitText, setSubmitText] = useState('Send');

  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //send data using api

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      name,
      email,
      phone,
      subject,
      message,
    };

    console.log(data);

    postMutation.mutate(data);
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    setSubject('');
  };
  return (
    <div className="bg-[#82cefd2c]">
      <div
        className="bg-cover container "
        // style={{ backgroundImage: `url("/assets/images/banner/3.webp")` }}
      >
        <div className="container-ack md:grid grid-cols-2 md:px-0 px-5 md:pty-0 py-10 ">
          <div className="col-span-1 border  my-10 md:px-8  rounded-xl hover:border-[#FDDA0D] bg-white border-gray-300 ">
            <p className=" md:text-4xl text-3xl font-bold pt-10 md:px-0 px-3">
              {" We're listening. Just a form away!"}
            </p>

            {/* form start */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4  py-8 md:px-0 px-3 text-sm">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id="name"
                  placeholder="Name"
                  className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id="email"
                  placeholder="Email"
                  className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  id="phone"
                  placeholder="Phone Number"
                  className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  id="service"
                  placeholder="Service you looking for?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <textarea
                  type="text"
                  rows={5}
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  id="mesage"
                  placeholder="Write your message"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                {errorMessage ? (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                ) : (
                  ''
                )}

                {postMutation.error && 'Fill all the Details'}
                {/* {postMutation.isSuccess && 'success'} */}
                <button
                  disabled={postMutation.isPending}
                  className=" bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md w-full flex justify-center items-center  "
                  type="submit"
                >
                  <span className="text-base">
                    {' '}
                    {postMutation.isPending ? 'Loading' : 'Submit'}{' '}
                  </span>
                </button>
              </div>
            </form>
            {/* form end */}
          </div>
          <div className="grid md:pl-16 justify-items items-center ">
            <div className="">
              <h1 className="font-extrabold text-3xl mb-5">
                From Vision to Victory, Digital Cappuccino Drives Success - Your
                Digital Marketing Champions
              </h1>
              <p>
                Renowned for our principles and collaboration, Digital
                Cappuccino is Canada&apos;s best advertising agency. We value
                open communication and work hard to build lasting relationships
                with our clients. Great things happen when our team members work
                together in harmony. To help businesses stand out in the
                competitive digital world, we have developed a fresh strategy
                that provides tailored solutions. Digital Cappuccino is the
                company to work with if you want a reliable alliance that
                produces noticeable outcomes.
              </p>
              <Link href="mailto:info@ackrolix.com">
                <div className="flex space-x-2 mb-3 mt-5">
                  <MdOutlineMail size={25} />
                  <p className="text-black font-bold text-lg ">
                    {' '}
                    info@digitalcappuccino.com
                  </p>
                </div>
              </Link>
              <Link href="https://wa.me/9813979440">
                <div className="flex space-x-2 mb-2 ">
                  <BiPhoneCall size={25} />
                  <p className="text-black font-bold text-lg mb-2">
                    +1 (825) 889-7071
                  </p>
                </div>
              </Link>
              <div className="flex space-x-2 cursor-pointer ">
                <GrMapLocation size={25} className="fill-orange" />
                <p className="text-black font-bold text-lg ">
                  9131 39 Ave NW Unit # 204, Edmonton, AB T6E 5Y2, Canada{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

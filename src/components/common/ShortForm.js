"use client"
import usePost from "@/hooks/usePost";
import Link from "next/link";
import React, { useState } from "react";

const ShortForm = () => {

  const postMutation = usePost(
    'https://www.digitalcappuccino.ca/api/contact',
    'contactForm',
    'form submitted successfully'
  );
  //form feild

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [submitText, setSubmitText] = useState("Send");

  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //send data using api



  const handleSubmit = (e) => {
    e.preventDefault()
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
    setMessage('')
    setPhone('');
    setSubject('');

  };
  return (
    <div>
      <form className=" ">
        <div className="space-y-4  md:px-16 px-3 py-12  text-sm">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
            className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
            className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
          />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            placeholder="Phone Number"
            className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            id="service"
            placeholder="Service you looking for?"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
          />
          <textarea
            type="text"
            rows={5}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="mesage"
            placeholder="Write your message"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
          />
          {errorMessage ? (
            <p className="text-sm text-red-500">{errorMessage}</p>
          ) : (
            ""
          )}
          <button
            className=" bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md w-full flex justify-center items-center  "
            type="submit"
          >
            <span className="text-base">
              {postMutation.isPending ? 'Loading' : 'Submit'}</span>
          </button>
        </div>
      </form>

    </div>
  )
}

export default ShortForm
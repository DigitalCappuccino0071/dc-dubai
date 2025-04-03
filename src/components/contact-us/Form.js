"use client";
import usePost from "@/hooks/usePost";
import Link from "next/link";
import React, { useState } from "react";
import { BiMapPin, BiMessage, BiPhoneCall } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Form = () => {
    const postMutation = usePost(
        "https://www.digitalcappuccino.ca/api/contact",
        "contactForm",
        "form submitted successfully"
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
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setSubject("");
    };
    return (
        <div className="py-20 container">
            <div className=" md:grid grid-cols-2 items-center md:px-0 md:pt-0 gap-12 ">
                <div className="flex-col space-y-16 max-w-[90%]">
                    <div className="py-6 px-8  rounded-xl bg-white items-center shadow-md flex space-x-5 ">
                        <BiMapPin className="bg-[#82cefd] text-white rounded-full p-2 w-10 h-10" />
                        <div>
                            <p className=" font-bold text-lg pb-2">Address</p>
                            <p>
                                9131 39 Ave NW Unit # 204, Edmonton, AB T6E 5Y2,
                                dubai
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-8  rounded-xl bg-white shadow-md items-center flex space-x-10">
                        <BiPhoneCall className="bg-[#82cefd] text-white rounded-full p-2 w-10 h-10" />
                        <div className="">
                            <p className=" font-bold text-lg pb-2">
                                Phone Number
                            </p>
                            <p>9910190071</p>
                        </div>
                    </div>

                    <div className="py-8 px-8  rounded-xl bg-white shadow-md items-center flex space-x-10">
                        <BiMessage className="bg-[#82cefd] text-white rounded-full p-2 w-10 h-10" />
                        <div className="">
                            <p className=" font-bold text-lg pb-2">
                                Email Address
                            </p>
                            <p>info@digitalcappuccino.com</p>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <div className=" border pt-10 px-8 shadow-md rounded-xl bg-white">
                        {/* form start */}
                        <form className="md:pt-0 pt-7 ">
                            <div className="space-y-4  py-8 text-sm">
                                <div class="w-full">
                                    <input
                                        className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="inline-full-name"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div class="w-full">
                                    <input
                                        className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="inline-full-name"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="flex space-x-5">
                                    <div class="w-full">
                                        <input
                                            className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                            id="inline-full-name"
                                            name="phone"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div class="w-full">
                                        <input
                                            className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                            id="inline-full-name"
                                            name="subject"
                                            value={subject}
                                            onChange={(e) =>
                                                setSubject(e.target.value)
                                            }
                                            type="text"
                                            placeholder="Service you looking for ?"
                                        />
                                    </div>
                                </div>

                                <textarea
                                    type="text"
                                    rows={5}
                                    name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="mesage"
                                    placeholder="Write your message"
                                    className="bg-priamry appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                />
                                <div className="mx-auto text-center">
                                    <div className="flex justify-start pt-5 pb-10">
                                        {postMutation.error &&
                                            "Fill all the Details"}
                                        <button className="px-8 py-2 rounded-md button-2">
                                            <div className="eff-2"></div>
                                            <span className="flex items-center text-base">
                                                {postMutation.isPending
                                                    ? "Loading"
                                                    : "Submit"}
                                                <MdKeyboardArrowRight className="text-base" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* form end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

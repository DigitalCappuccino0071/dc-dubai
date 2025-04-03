import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { BiDownArrow } from 'react-icons/bi'
import { BsArrowUp } from 'react-icons/bs'


const FaqService = ({ data, title }) => {

    return (
        <div className="container py-16">
            <div className="text-3xl font-bold text-center">
                {title}
            </div>
            <div className=" w-full pt-10 px-4">
                {data.map((item, e) => (
                    <div className="mx-auto w-full max-w-6xl divide-y divide-black/5 rounded-xl bg-black/5 mt-4" key={e}>

                        <div className="">
                            <Disclosure as="div" className="p-6 " >
                                <DisclosureButton className="group flex w-full items-center justify-between ">
                                    <span className="text-sm/6 font-semibold text-black group-data-[hover]:text-black/80">
                                        {item.question}
                                    </span>
                                    <BsArrowUp className="size-4 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5 text-black/70">
                                    {item.answer}
                                </DisclosurePanel>
                            </Disclosure>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default FaqService
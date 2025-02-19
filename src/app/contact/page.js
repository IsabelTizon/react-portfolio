import React from "react";
import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaSquareGithub } from "react-icons/fa6";

import { ContactForm } from "../../components/ContactForm";

export const metadata = {
	title: "contact",
	description: "all the information to contact me",
};

const contact = () => {
	return (
		<main className="mt-[80px]">
			{/* Hero */}
			<div className="bg-[#111827] grid-bg w-full p-10">
				<div className="flex justify-center">
					<h1 className="text-light capitalize">contact</h1>
				</div>
			</div>
			{/* Get in contact (Links & Form) */}
			<div className="bg-[#111827]">
				<div className="">
					<div className="flex flex-col lg:flex-row">
						{/* Get in touch Section */}
						<div className="flex flex-col w-full lg:w-1/2">
							<div>
								<h3 className="capitalize text-light font-bold">
									get in touch
								</h3>
								<p className="text-light">
									If you liked my portfolio and are
									interested in working with me, feel free
									to contact me through the following
									channels.
								</p>
							</div>
							{/* Linkedin & Github */}
							<div className="flex flex-row">
								<div className="flex flex-row w-1/2">
									<BsLinkedin size={30} color="#9966ff" />
									<p className="text-light flex items-center ml-8">
										Linkedin
									</p>
								</div>
								<div className="flex flex-row w-1/2">
									<FaSquareGithub
										size={30}
										color="#9966ff"
									/>
									<p className="text-light flex items-center ml-8">
										GitHub
									</p>
								</div>
							</div>
							{/* My phone & My email */}
							<div className="flex flex-col">
								<div className="flex flex-row">
									<FaPhoneSquareAlt
										size={30}
										color="#9966ff"
									/>
									<p className="text-light flex items-center ml-8">
										+44 7759686358
									</p>
								</div>
								<div className="flex flex-row">
									<FaPhoneSquareAlt
										size={30}
										color="#9966ff"
									/>
									<p className="text-light flex items-center ml-8">
										+34 675474558
									</p>
								</div>
								<div className="flex flex-row">
									<MdEmail size={30} color="#9966ff" />
									<p className="text-light flex items-center ml-8">
										tizonarranz@gmail.com
									</p>
								</div>
							</div>
						</div>
						{/* Form Section */}
						<div className=" w-full lg:w-1/2">
							<div className="border-1 border-solid border-[#19160f]">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* API Map */}
			<div className="bg-[#bdddf8] w-full">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">API</h1>
				</div>
			</div>
		</main>
	);
};

export default contact;

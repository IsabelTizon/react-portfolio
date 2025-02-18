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
			<div className="bg-gray-900 w-full p-10">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">
						contact
					</h1>
				</div>
			</div>
			{/* Get in contact (Links & Form) */}
			<div className="w-90% m-10 xl:w-80% xl:mx-[10%] xl:my-[100px] 2xl:w-[70%] 2xl:my-[160px] 2xl:mx-[15%]">
				<div className="flex flex-col lg:flex-row">
					{/* Get in touch Section */}
					<div className="flex flex-col w-full lg:w-1/2 lg:pr-[15rem]">
						<div>
							<h3 className="capitalize text-[#9966ff] font-bold">
								get in touch
							</h3>
							<p className="">
								If you liked my portfolio and are interested
								in working with me, you can contact me in
								the following ways.
							</p>
						</div>
						{/* Linkedin & Github */}
						<div className="flex flex-row">
							<div className="flex flex-row w-1/2">
								<BsLinkedin size={60} color="#b38f00" />
								<p className="flex items-center ml-8">
									Linkedin
								</p>
							</div>
							<div className="flex flex-row w-1/2">
								<FaSquareGithub size={60} color="#b38f00" />
								<p className="flex items-center ml-8">
									GitHub
								</p>
							</div>
						</div>
						{/* My phone & My email */}
						<div className="flex flex-row mb-[80px]">
							<div className="flex flex-row w-1/2">
								<FaPhoneSquareAlt
									size={34}
									color="#b38f00"
								/>
								<p className="flex items-center ml-8">
									+44 7759686358
								</p>
							</div>
							<div className="flex flex-row w-1/2">
								<MdEmail size={34} color="#b38f00" />
								<p className="flex items-center ml-8">
									tizonarranz@gmail.com
								</p>
							</div>
						</div>
					</div>
					{/* Form Section */}
					<div className=" w-full lg:w-1/2">
						<div className="rounded-3xl border-1 border-solid border-[#19160f]">
							<ContactForm />
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

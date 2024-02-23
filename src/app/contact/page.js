import React from "react";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { ContactForm } from "../../components/ContactForm";

export const metadata = {
	title: "contact",
	description: "all the information to contact me",
};

const contact = () => {
	return (
		<main className="mt-[80px]">
			{/* Hero */}
			<div className="bg-gray-900 w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">
						contact me
					</h1>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row p-[10rem]">
				{/* Get in touch Section */}
				<div className="flex flex-col mr-[10rem] ml-[7rem]  w-full lg:w-2/5">
					<div>
						<h3 className="capitalize mb0-[12rem]">
							get in touch
						</h3>
						<p className="pb-[10rem]">
							If you liked my portfolio and are interested
							in working with me, you can contact me in the
							following ways.
						</p>
					</div>

					<div className="flex flex-row">
						<div className="flex flex-row">
							<FaFacebook size={60} color="#595959" />
							<p>Linkedin</p>
						</div>
						<div className="flex flex-row">
							<FaFacebook size={60} color="#595959" />
							<p>GitHub</p>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex flex-row">
							<FaFacebook size={60} color="#595959" />
							<div className="flex flex-col">
								<p>my phone</p>
								<p>+44 7759686358</p>
							</div>
						</div>
						<div className="flex flex-row">
							<FaFacebook size={60} color="#595959" />
							<div className="flex flex-col">
								<p>my email</p>
								<p>tizonarranz@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				{/* Form Section */}
				<div className=" w-full lg:w-3/5">
					<div className="p-[5rem] rounded-3xl bg-[#fff8e2]">
						<ContactForm />
					</div>
				</div>
			</div>

			{/* API*/}
			<div className="bg-[#bdddf8] w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">API</h1>
				</div>
			</div>
		</main>
	);
};

export default contact;

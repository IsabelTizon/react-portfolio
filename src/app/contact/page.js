import React from "react";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { ContactForm } from "../../components/contactForm";

export const metadata = {
	title: "contact",
	description: "all the information to contact me",
};

const contact = () => {
	return (
		<main className="mt-[80px]">
			<div className="bg-gray-900  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">
						contact me
					</h1>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="flex flex-col">
					<div>
						<h3 className="capitalize">get in touch</h3>
						<p>
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
				<div>
					{" "}
					<h3 className="capitalize">form</h3>
					<p>
						If you liked my portfolio and are interested in
						working with me, you can contact me in the
						following ways.
					</p>
					<ContactForm />
				</div>
			</div>
			<div className="bg-[#bdddf8]  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">API</h1>
				</div>
			</div>
		</main>
	);
};

export default contact;

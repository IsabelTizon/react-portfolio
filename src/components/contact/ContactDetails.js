import Link from "next/link";

{
	/* icons */
}
import { BsLinkedin } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

export const ContactDetails = () => {
	return (
		<div className="flex flex-col">
			<div>
				<h2 className="capitalize text-light font-bold my-11">
					get in touch
				</h2>
				<p className="text-light">
					If you liked my portfolio and are interested in
					working with me, feel free to reach out to me
					through the following channels
				</p>
			</div>

			<div className="flex flex-col mt-11">
				{/* Linkedin & Github */}
				<div className="flex flex-row pb-2">
					<div className="flex-1">
						<div className="flex flex-row">
							<BsLinkedin size={30} color="#9966ff" />
							<p className="text-light flex items-center ml-2">
								Linkedin
							</p>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex flex-row">
							<FaSquareGithub size={30} color="#9966ff" />
							<p className="text-light flex items-center ml-2">
								GitHub
							</p>
						</div>
					</div>
				</div>
				{/* phones*/}
				<div className="flex flex-row pb-2">
					<div className="flex-1">
						<div className="flex flex-row">
							<FaPhoneSquareAlt size={30} color="#9966ff" />
							<p className="text-light flex items-center ml-2">
								+44 7759686358
							</p>
						</div>
					</div>
					<div className="flex-1">
						<div className="flex flex-row">
							<FaPhoneSquareAlt size={30} color="#9966ff" />
							<p className="text-light flex items-center ml-2">
								+34 675474558
							</p>
						</div>
					</div>
				</div>
				{/* email */}
				<div className="flex flex-row ">
					<MdEmail size={30} color="#9966ff" />
					<p className="text-light flex items-center ml-2">
						tizonarranz@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

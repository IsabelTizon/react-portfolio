{
	/* icons */
}
import { BsLinkedin } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

export const OpenToWork = () => {
	return (
		<div className="bg-gray-800">
			<div className="w-[90%] md:w-[80%] m-auto py-16">
				<div className="flex flex-col md:flex-row">
					<div className="flex-1 flex-row md:flex-col">
						<h3 className="text-light text-center">
							Open to work
						</h3>
						<h6 className="text-light text-center">
							Contact me on...
						</h6>
					</div>

					<div className="flex-1 flex-col">
						<div className="flex flex-col">
							{/* Linkedin & Github */}
							<div className="flex flex-col md:flex-row pb-2">
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
										<FaSquareGithub
											size={30}
											color="#9966ff"
										/>
										<p className="text-light flex items-center ml-2">
											GitHub
										</p>
									</div>
								</div>
							</div>
							{/* phones*/}
							<div className="flex flex-col md:flex-row pb-2">
								<div className="flex-1">
									<div className="flex flex-row">
										<FaPhoneSquareAlt
											size={30}
											color="#9966ff"
										/>
										<p className="text-light flex items-center ml-2">
											+44 7759686358
										</p>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex flex-row">
										<FaPhoneSquareAlt
											size={30}
											color="#9966ff"
										/>
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
				</div>
			</div>
		</div>
	);
};

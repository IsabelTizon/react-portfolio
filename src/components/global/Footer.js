import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../../app/data/projects";

// React icons

import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
	console.log("myProjects", myProjects);
	const myProjectCopyModifily = [...myProjects];
	return (
		<div className="bg-slate-900">
			<div className="flex flex-col md:flex-row w-90% lg:w-[75%] m-auto py-14">
				{/** Isabel Tizon Column */}
				<div className="flex-1">
					<Link
						className="mb-4 tracking-wider uppercase font-extrabold text-[#F0F0F5] hover:text-[#9966ff]"
						href="/"
					>
						<h5>Isabel Arranz</h5>
					</Link>
					<small className="text-white mb-8">
						Junior Web developer
					</small>
					<div className="flex flex-row">
						<FaLinkedin
							size={30}
							color="#9966ff"
							className="mr-4"
						/>
						<div className="flex flex-row">
							<FaSquareGithub
								size={30}
								color="#9966ff"
								className="mr-4"
							/>
						</div>
					</div>
				</div>

				{/** Contact Column */}
				<div className="flex-1">
					<h6 className="text-white mb-4">Contact</h6>
					<div className="flex flex-col">
						<div className="flex flex-col">
							{/* Email */}
							<div className="flex flex-row">
								<MdOutlineMailOutline
									size={17}
									color="#F6F6F6"
								/>
								<small className="text-white ml-5 mb-5">
									itizonagencia@gmail.com
								</small>
							</div>
							{/* Email */}
							<div className="flex flex-row">
								<FaPhoneAlt size={17} color="#F6F6F6" />
								<small className="text-white ml-5 mb-5">
									+ 34 675474558
								</small>
							</div>
							{/* Email */}
							<div className="flex flex-row">
								<FaPhoneAlt size={17} color="#F6F6F6" />
								<small className="text-white ml-5 mb-5">
									+ 44 7759686358
								</small>
							</div>
						</div>
					</div>
				</div>
				{/** Recent works Column */}
				<div className="flex-1">
					<h6 className="text-white capitalize mb-10">
						recent works
					</h6>

					<div className="flex flex-wrap gap-10">
						{/* */}

						{myProjectCopyModifily
							.slice(-6)
							.reverse()
							.map((projectsItem) => (
								<Link
									key={projectsItem.id}
									href={`/projects/${projectsItem.id}`}
									className="bg-gray-900"
								>
									<Image
										className="h-auto w-100% object-containd"
										width={100}
										height={80}
										src={projectsItem.pic}
										alt="project picture"
									/>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

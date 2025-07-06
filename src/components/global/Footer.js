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
			<div className="flex flex-col gap-6 md:flex-row w-[70%] md:w-[90%] lg:w-[80%] m-auto py-14">
				{/** Isabel Tizon Column */}
				<div className="flex-1">
					<Link
						className="mb-4 tracking-wider uppercase font-extrabold text-[#F0F0F5] hover:text-[#9966ff]"
						href="/"
					>
						<h5>Isabel Arranz</h5>
					</Link>
					<p className="text-white mb-4">
						Junior Web developer
					</p>
					<div className="flex flex-row">
						<a
							href="https://www.linkedin.com/in/isabel-tiz%C3%B3n-arranz-807523197/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-row hover:text-[#7a33ff] transition-colors duration-300"
						>
							<FaLinkedin
								size={30}
								color="#9966ff"
								className="mr-4"
							/>
						</a>
						<a
							href="https://github.com/IsabelTizon"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-row hover:text-[#7a33ff] transition-colors duration-300"
						>
							<FaSquareGithub
								size={30}
								color="#9966ff"
								className="mr-4"
							/>
						</a>
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
				<div className="flex-[2]">
					<h6 className="text-white capitalize mb-10">
						recent works
					</h6>

					<div className="flex flex-wrap gap-6">
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

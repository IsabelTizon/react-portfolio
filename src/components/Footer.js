import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../app/data/projects";

// React icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	console.log("myProjects", myProjects);
	const myProjectCopyModifily = [...myProjects];
	return (
		<div className="flex p-[4rem] bg-slate-900">
			{/** Isabel Tizon Column */}
			<div className="flex-1">
				<h4 className="text-white capitalize mb-10">
					isabel tizón arranz
				</h4>
				<p className="text-white capitalize mb-10">
					junior web developer
				</p>
				<div className="flex flex-row">
					<FaLinkedin
						size={30}
						color="#b38f00"
						className="mr-10"
					/>
				</div>
			</div>
			{/** Menu */}
			<div className="flex-1">
				<h6 className="text-white capitalize mb-10">
					Menu
				</h6>
				<div className="flex flex-col">
					<Link className="text-white" href="/projects">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<small className="capitalize">projects</small>
						</div>
					</Link>
					<Link className="text-white" href="/contact">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<small className="capitalize">contact</small>
						</div>
					</Link>
					<Link
						className="text-[#b38f00]"
						target="_blank"
						href="https://github.com/IsabelTizon"
					>
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<small className="capitalize">Github</small>
						</div>
					</Link>
				</div>
			</div>
			{/** Contact Column */}
			<div className="flex-1">
				<h6 className="text-white mb-10">Contact</h6>
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
	);
};

export default Footer;

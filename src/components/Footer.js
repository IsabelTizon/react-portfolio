import Link from "next/link";
import Image from "next/image";
import { myProjects } from "./projects";

// React icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	console.log("myProjects", myProjects);
	const myProjectCopyModifily = [...myProjects];
	return (
		<div className="flex flex-wrap p-[20rem] bg-slate-900">
			{/** Isabel Tizon Column */}
			<div className="flex flex-col px-[10rem]">
				<h5 className="text-white text-[4rem] capitalize mb-10">
					isabel tizón arranz
				</h5>
				<h6 className="text-white text-[3rem] capitalize mb-10">
					junior web developer
				</h6>
				<div className="flex flex-row">
					<FaLinkedin
						size={30}
						color="#b38f00"
						className="mr-10"
					/>
				</div>
			</div>
			{/** Menu */}
			<div className="flex flex-col px-[10rem]">
				<h5 className="text-white text-[4rem] capitalize mb-10">
					Menu
				</h5>
				<div className="flex flex-col">
					<Link className="text-white" href="/projects">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<h6 className="text-[2.7rem] capitalize">
								projects
							</h6>
						</div>
					</Link>
					<Link className="text-white" href="/contact">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<h6 className="text-[2.7rem] capitalize">
								contact
							</h6>
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
							<h6 className="text-[2.7rem] capitalize">
								Github
							</h6>
						</div>
					</Link>
				</div>
			</div>
			{/** Contact Column */}
			<div className="flex flex-col px-[10rem]">
				<h5 className="text-white text-[4rem] mb-10">
					Contact
				</h5>
				<div className="flex flex-col">
					<div className="flex flex-col">
						{/* Email */}
						<div className="flex flex-row">
							<MdOutlineMailOutline
								size={17}
								color="#F6F6F6"
							/>
							<h6 className="text-white text-[2.7rem] ml-5 mb-5">
								itizonagencia@gmail.com
							</h6>
						</div>
						{/* Email */}
						<div className="flex flex-row">
							<FaPhoneAlt size={17} color="#F6F6F6" />
							<h6 className="text-white text-[2.7rem] ml-5 mb-5">
								+ 34 675474558
							</h6>
						</div>
						{/* Email */}
						<div className="flex flex-row">
							<FaPhoneAlt size={17} color="#F6F6F6" />
							<h6 className="text-white text-[2.7rem] ml-5 mb-5">
								+ 44 7759686358
							</h6>
						</div>
					</div>
				</div>
			</div>
			{/** Recent works Column */}
			<div className="flex flex-col px-[10rem]">
				<h5 className="text-white text-[4rem] capitalize mb-10">
					recent works
				</h5>

				<div className="flex gap-7">
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
									width={80}
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

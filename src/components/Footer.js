import Link from "next/link";
import Image from "next/image";
import { myProjects } from "./projects";

// React icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
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
					<FaFacebook
						size={30}
						color="#595959"
						className="mr-10"
					/>
					<FaFacebook
						size={30}
						color="#595959"
						className="mr-10"
					/>
					<FaFacebook
						size={30}
						color="#595959"
						className="mr-10"
					/>
					<FaFacebook
						size={30}
						color="#595959"
						className="mr-10"
					/>
				</div>
			</div>
			{/** Quick Links Column */}
			<div className="flex flex-col px-[10rem]">
				<h5 className="text-white text-[4rem] capitalize mb-10">
					quick links
				</h5>
				<div className="flex flex-col">
					<Link className="text-white" href="/blog">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<h6 className="text-[2.7rem] capitalize">
								blog
							</h6>
						</div>
					</Link>
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
						<div className="flex flex-row">
							<FaFacebook size={17} color="#595959" />
							<h6 className="text-white text-[2.7rem] capitalize ml-5 mb-5">
								Linkedin
							</h6>
						</div>
						<div className="flex flex-row">
							<FaFacebook size={17} color="#595959" />
							<h6 className="text-white text-[2.7rem] ml-5 mb-5">
								+44 7759686358
							</h6>
						</div>
						<div className="flex flex-row">
							<FaFacebook size={17} color="#595959" />
							<h6 className="text-white text-[2.7rem] ml-5">
								tizonarranz@gmail.com
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

				<div className="gap-7">
					{/* */}

					{myProjects.slice(-6).map((projectsItem) => (
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

import Link from "next/link";
import Image from "next/image";
import { myProjects } from "./projects";

// React icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="flex flex-col lg:flex-row bg-slate-900">
			<div className="flex flex-col">
				<h5 className="text-white">isabel tizón arranz</h5>
				<p className="text-white">junior web developer</p>
				<div className="flex flex-row">
					<FaFacebook size={30} color="#595959" />
					<FaFacebook size={30} color="#595959" />
					<FaFacebook size={30} color="#595959" />
					<FaFacebook size={30} color="#595959" />
				</div>
			</div>
			<div className="flex flex-col">
				<h5 className="text-white">quick links</h5>
				<div className="flex flex-col">
					<Link className="text-white" href="/blog">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<p>blog</p>
						</div>
					</Link>
					<Link className="text-white" href="/projects">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<p>projects</p>
						</div>
					</Link>
					<Link className="text-white" href="/contact">
						<div className="flex flex-row">
							<MdOutlineKeyboardArrowRight
								size={30}
								color="#b38f00"
								fontSize="2rem"
							/>
							<p>contact</p>
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
							<p>Github</p>
						</div>
					</Link>
				</div>
			</div>
			<div className="flex flex-col">
				<h5 className="text-white">Contact</h5>
				<div className="flex flex-col">
					<div className="flex flex-col">
						<div className="flex flex-row">
							<FaFacebook size={15} color="#595959" />
							<p className="text-white">Linkedin</p>
						</div>
						<div className="flex flex-row">
							<FaFacebook size={15} color="#595959" />
							<p className="text-white">+44 7759686358</p>
						</div>
						<div className="flex flex-row">
							<FaFacebook size={15} color="#595959" />
							<p className="text-white">
								tizonarranz@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<h5 className="text-white">recent works</h5>

				<div className="py-24 px-10 md:px-[15rem] lg:px-[25rem] xl:px-[35rem] 2xl:px-[55rem] xl:py-[15rem] 2xl:py-[20rem]">
					<div className="flex flex-wrap gap-7">
						{/* */}

						{myProjects.slice(-6).map((projectsItem) => (
							<Link
								key={projectsItem.id}
								href={`/projects/${projectsItem.id}`}
								className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%] bg-gray-900"
							>
								<Image
									className="h-100 w-full object-containd"
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
		</div>
	);
};

export default Footer;

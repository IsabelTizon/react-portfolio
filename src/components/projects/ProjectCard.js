// components/ProjectCard.js
import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProjectCard = ({ project }) => {
	return (
		<div key={project.id}>
			<h3 className="text-light">{project.name}</h3>
			<div className="flex flex-col md:flex-row">
				<Image
					className="h-auto w-full"
					width={400}
					height={50}
					src={project.pic}
					alt="project picture"
				/>
				<div className="">
					<p className="text-light line-clamp-5 mb-[2.5rem]">
						{project.description}
					</p>
					<Link
						key={project.id}
						href={`/projects/${project.id}`}
					>
						<div className="flex flex-row">
							<p className="primary-500 uppercase mb-[6rem] hover:text-[#000000]">
								read more
							</p>
							<MdOutlineKeyboardArrowRight
								size={20}
								color="primary-500"
								fontSize="1rem"
							/>
						</div>
					</Link>
					<div className="flex flex-row">
						<Link target="_blank" href={project.url}>
							<button className="purple">
								visit the site
							</button>
						</Link>

						<Link target="_blank" href={project.github}>
							<button className="purple-full">
								GitHub
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

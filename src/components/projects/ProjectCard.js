import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProjectCard = ({ project }) => {
	return (
		<div className="my-11" key={project.id}>
			<h3 className="text-light mb-6">{project.name}</h3>
			<div className="flex flex-col md:flex-row gap-6 items-center">
				{/* Imagen (Izquierda) */}
				<div className="w-full md:w-1/2">
					<Image
						className="rounded-lg"
						width={500}
						height={300}
						src={project.pic}
						alt="project picture"
					/>
				</div>
				{/* Contenido (Derecha) */}
				<div className="w-full md:w-1/2 flex flex-col">
					<p className="text-light line-clamp-5 mb-[1rem]">
						{project.description}
					</p>
					{/* Enlace "Read More" */}
					<Link
						key={project.id}
						href={`/projects/${project.id}`}
					>
						<div className="flex flex-row">
							<p className="primary-500 uppercase mb-[2rem] hover:text-[#000000]">
								read more
							</p>
							<MdOutlineKeyboardArrowRight
								size={20}
								color="primary-500"
								fontSize="1rem"
							/>
						</div>
					</Link>
					{/* Botones */}
					<div className="flex flex-row gap-8">
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

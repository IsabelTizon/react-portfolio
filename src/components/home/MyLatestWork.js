import { myProjects } from "../../app/data/projects";
import Image from "next/image";
import Link from "next/link";

export const MyLatestWork = () => {
	return (
		<div className="bg-[#111827] py-10 lg:py-20">
			<div className="flex justify-center pb-10">
				<h2 className="secundary-200">My latest work</h2>
			</div>

			<div className="width-[95%] md:w-[90%] m-auto">
				<div className="flex flex-wrap gap-4">
					{/* */}

					{myProjects.slice(-6).map((projectsItem) => (
						<Link
							key={projectsItem.id}
							href={`/projects/${projectsItem.id}`}
							className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%] bg-gray-900"
						>
							<Image
								className="h-150 w-full object-containd"
								width={300}
								height={300}
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

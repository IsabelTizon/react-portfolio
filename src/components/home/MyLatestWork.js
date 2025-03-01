import { myProjects } from "../../app/data/projects";
import Image from "next/image";
import Link from "next/link";

export const MyLatestWork = () => {
	return (
		<div className="bg-[#111827]">
			<div className="w-[95%] m-auto">
				<div className="flex justify-center py-16">
					<h2 className="secundary-300">My latest work</h2>
				</div>

				<p className="text-light">
					Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the
					1500s, when an unknown printer took a
				</p>
			</div>
			<div>
				<div className="flex flex-wrap gap-7">
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

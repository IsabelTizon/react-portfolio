import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../../components/projects";

export const metadata = {
	title: "Projects page",
	description: "Info about all my projects",
};

export default function projects() {
	return (
		<main className="mt-[80px]">
			<div class="bg-gray-900  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">
						my projects
					</h1>
				</div>
			</div>
			<div className="flex justify-center">
				<h2 className="capitalize p-10 md:p-42 lg:p-40 xl:p-[12rem] 2xl:p-[18rem]">
					welcome to my projects
				</h2>
			</div>
			<p className="pb-40 px-10 md:px-[15rem] lg:px-[25rem] xl:px-[35rem] 2xl:px-[55rem]">
				Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the Lorem
				Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the
				industrys standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and
				scrambled it
			</p>

			<div className="flex flex-col px-10 md:px-[15rem] lg:px-[25rem] xl:px-[35rem] 2xl:px-[55rem]">
				{myProjects.map((projectsItem) => (
					<div className="" key={projectsItem.id}>
						<h3>{projectsItem.name}</h3>
						<div className="flex flex-row">
							<Image
								className="h-150 w-full object-containd rounded-t-2xl mb-10"
								width={300}
								height={300}
								src={projectsItem.pic}
								alt="project picture"
							/>
							<div className="">
								<p>{projectsItem.description}</p>
								<div className="flex flex-row">
									<Link href="/contact">
										<button className="text-black uppercase mustard p-3 rounded-md">
											visit the site
										</button>
									</Link>
									<Link
										href={`/projects/${projectsItem.id}`}
									>
										<button className="text-black uppercase mustard p-3 rounded-md">
											leave a comment
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

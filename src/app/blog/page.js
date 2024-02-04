import { myProjects } from "../../components/projects";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Blog",
	description: "my blog page",
};

const blog = () => {
	return (
		<main className="mt-[80px]">
			<div class="bg-gray-900  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[55rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">
						Blog
					</h1>
				</div>
			</div>
			<div className="flex justify-center">
				<h2 className="capitalize p-10 md:p-42 lg:p-40 xl:p-[12rem] 2xl:p-[55rem]">
					Latest posts
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

			<div className="px-10 md:px-[15rem] lg:px-[25rem] xl:px-[35rem] 2xl:px-[55rem] xl:pb-[15rem] 2xl:pb-[20rem]  rounded-t-2xl">
				{/* */}
				<div className="flex flex-row gap-8">
					{myProjects.slice(-3).map((projectsItem) => (
						<div
							key={projectsItem.id}
							className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]"
						>
							<div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 rounded-t-2xl">
								<Image
									className="h-150 w-full object-containd rounded-t-2xl"
									width={300}
									height={300}
									src={projectsItem.pic}
									alt="project picture"
								/>
								<div class="p-5">
									<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										{projectsItem.name}
									</h3>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Here are the biggest enterprise
										technology acquisitions of 2021 so far,
										in reverse chronological order.
									</p>
									<Link
										key={projectsItem.id}
										href={`/projects/${projectsItem.id}`}
									>
										<button className="mustard">
											read more
										</button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default blog;

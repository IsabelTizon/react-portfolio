import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../../components/projects";

// React icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const metadata = {
	title: "Projects page",
	description: "Info about all my projects",
};

export default function projects() {
	console.log("myProjects", myProjects);
	const myProjectCopyModifily = [...myProjects];

	return (
		<main className="mt-[80px]">
			<div className="bg-gray-900 w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
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
				In the following portfolio is a presentation of the
				learning process throughout my career. You will be
				able to see the progress in descending order as the
				most recent project is displayed first and followed
				by all the others in descending order.
			</p>
			<p className="pb-40 px-10 md:px-[15rem] lg:px-[25rem] xl:px-[35rem] 2xl:px-[55rem]">
				The oldest chronologically date from my stay in the
				Web development course (HNC&HND) at the City of
				Glasgow College. In them use technologies such as
				HTML5, CSS, JavaScript, Bootstrap, jQuery, PHP, SQL.
			</p>

			<div className="flex flex-col px-10 md:px-[15rem] lg:px-[25rem] xl:px-[35rem] 2xl:px-[55rem]">
				{myProjectCopyModifily
					.reverse()
					.map((projectsItem) => (
						<div
							className="pb-[16rem]"
							key={projectsItem.id}
						>
							<h3 className="pb-[8rem]">
								{projectsItem.name}
							</h3>
							<div className="flex  flex-col md:flex-row">
								<Image
									className="h-auto w-full md:w-[50%] lg:w-[70%] xl:w-full object-containd rounded-t-2xl mb-10"
									width={400}
									height={300}
									src={projectsItem.pic}
									alt="project picture"
								/>
								<div className="md:pl-[6rem] lg:pl-[15rem] xl:pl-[15rem] 2xl:pl-[25rem]">
									<p className="text-[3rem] line-clamp-5 mb-[2.5rem]">
										{projectsItem.description}
									</p>
									<Link
										key={projectsItem.id}
										href={`/projects/${projectsItem.id}`}
									>
										<div className="flex flex-row">
											<p className="text-[#b38f00] uppercase text-[2.5rem] mb-[6rem]">
												read more
											</p>
											<MdOutlineKeyboardArrowRight
												size={20}
												color="#b38f00"
												fontSize="2rem"
											/>
										</div>
									</Link>
									<div className="flex flex-row">
										<Link
											target="_blank"
											href={projectsItem.url}
										>
											<button className="text-black tracking-widest lg:tracking-wide xl:tracking-widest uppercase mustard rounded-md mr-11">
												visit the site
											</button>
										</Link>

										<Link
											href={`/projects/${projectsItem.id}`}
										>
											<button className="text-black tracking-widest lg:tracking-wide xl:tracking-widest uppercase mustard p-4 rounded-md">
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

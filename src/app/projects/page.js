import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../data/projects";
import Hero from "../../components/global/Hero";

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
			<Hero title="My Projects" />

			<div className="bg-[#111827]">
				<div className="flex justify-center">
					<h2 className="text-light capitalize p-10">
						You&apos;re welcome to take a look!
					</h2>
				</div>
				<div className="flex justify-center">
					<p className="text-light">
						This portfolio showcases my learning process
						throughout my career. You can see my progress in
						descending order, with the most recent project
						displayed first, followed by all the others. The
						oldest chronologically date from my stay in the
						Web development course (HNC&HND) at the City of
						Glasgow College.
					</p>
				</div>
				<div className="flex flex-col px-10">
					{myProjectCopyModifily
						.reverse()
						.map((projectsItem) => (
							/** CREAR CARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!*/
							<div className="" key={projectsItem.id}>
								<h3 className="text-light">
									{projectsItem.name}
								</h3>
								<div className="flex flex-col md:flex-row">
									<Image
										className="h-auto w-full"
										width={400}
										height={50}
										src={projectsItem.pic}
										alt="project picture"
									/>
									<div className="">
										<p className="text-light line-clamp-5 mb-[2.5rem]">
											{projectsItem.description}
										</p>
										<Link
											key={projectsItem.id}
											href={`/projects/${projectsItem.id}`}
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
											<Link
												target="_blank"
												href={projectsItem.url}
											>
												<button className="purple">
													visit the site
												</button>
											</Link>

											<Link
												target="_blank"
												href={projectsItem.github}
											>
												<button className="purple-full">
													GitHub
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</main>
	);
}

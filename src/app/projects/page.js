import { myProjects } from "../data/projects";
import Hero from "../../components/global/Hero";
import ProjectCard from "../../components/projects/ProjectCard";

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
				<div className="w-[90%] md:w-[80%] m-auto">
					<div className="flex justify-center">
						<h2 className="w-[75%] md:w-[80%] text-light p-10">
							You&apos;re welcome to take a look!
						</h2>
					</div>
					<div className="">
						<p className="text-light">
							This portfolio showcases my learning process
							throughout my career. You can see my progress
							in descending order, with the most recent
							project displayed first, followed by all the
							others. The oldest chronologically date from
							my stay in the Web development course
							(HNC&HND) at the City of Glasgow College.
						</p>
					</div>
					<div className="flex flex-col">
						{myProjectCopyModifily
							.reverse()
							.map((projectsItem) => (
								<ProjectCard
									key={projectsItem.id}
									project={projectsItem}
								/>
							))}
					</div>
				</div>
			</div>
		</main>
	);
}

import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../../data/projects";
import Hero from "@/components/global/Hero";

export default function projectDetails({ params }) {
	//destructuring each object of the array myProjects using curly braces, variable name to the data we want to get from the object
	const { projectDetails } = params;

	const myProject = myProjects[projectDetails];

	return (
		<main className="mt-[80px]">
			<Hero key={myProject.id} title={myProject.name} />
			<div className="bg-[#111827] py-8">
				<div className="w-[90%] md:w-[60%] m-auto">
					<Image
						className="h-auto w-[100%] object-containd rounded-[10px] py-10"
						width={400}
						height={300}
						src={myProject.pic}
						alt="project picture"
					/>

					<div className="flex flex-row mt-2 mb-10 gap-6">
						<Link target="_blank" href={myProject.url}>
							<button className="purple">
								visit the site
							</button>
						</Link>

						<Link target="_blank" href={myProject.github}>
							<button className="purple-full">
								GitHub
							</button>
						</Link>
					</div>

					<div className="mt-14">
						<h4 className="text-light uppercase mb-4">
							about the project
						</h4>
						{myProject.description.map((paragraph) => {
							console.log(
								"myProject.description ===> ",
								myProject.description
							);
							return (
								<p className="text-light" key={paragraph}>
									{paragraph}
								</p>
							);
						})}

						<h4 className="text-light uppercase mt-10 mb-4">
							project parts
						</h4>
						{myProject.parts?.map((paragraph) => (
							<p
								className="text-light selection:mt-[5rem]"
								key={paragraph}
							>
								{paragraph}
							</p>
						))}
						<p className="text-light">
							If you find this page nice, you can take a
							look at more of my{" "}
							<Link
								target="_blank"
								href="https://github.com/IsabelTizon"
								className="text-[#9966ff]"
							>
								Github
							</Link>{" "}
							projects
						</p>
						<Link
							className="text-[#9966ff] capitalize mt-[5rem]"
							href="/projects"
						>
							Go back to projects
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}

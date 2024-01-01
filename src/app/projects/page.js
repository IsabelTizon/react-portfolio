import Link from "next/link";
import { myProjects } from "../../components/projects";

export const metadata = {
	title: "Projects page",
	description: "Info about all my projects",
};

export default function projects() {
	return (
		<main className="mt-[100px]">
			<div className="tittle">
				<h1>Projects I`ve work on</h1>
			</div>

			<ul>
				{myProjects.map((projectsItem) => (
					<Link
						key={projectsItem.id}
						href={`/projects/${projectsItem.id}`}
					>
						<li>{projectsItem.name}</li>
					</Link>
				))}
			</ul>
		</main>
	);
}

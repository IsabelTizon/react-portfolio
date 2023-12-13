// "use client";

import Link from "next/link";
import { myProjects } from "../../components/projects";

// export const metadata = {
// 	title: "Projects page",
// 	description: "Info about all my projects ",
// };

export default function projects() {
	return (
		<div>
			<h1>Projects I`ve work on</h1>
			<Link href="/">Go back to home</Link>

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
		</div>
	);
}

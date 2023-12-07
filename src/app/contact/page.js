"use client";

import Link from "next/link";
import { myProjects } from "../../../components/projects";

const projects = () => {
	return (
		<div>
			<h1>Projects I've work on</h1>
			<Link href="/">Go back to home</Link>

			<ul>
				{myProjects.map((projectItem) => (
					<li key={projectItem.id}>{projectItem.name}</li>
				))}
			</ul>
		</div>
	);
};

export default projects;

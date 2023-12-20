import Link from "next/link";
import { myProjects } from "../../../components/projects";

export default function projectDetails({ params }) {
	console.log("params", params);
	//destructuring each object of the array myProjects using curly braces, variable name to the data we want to get from the object
	const { projectDetails } = params;

	const myProject = myProjects[projectDetails];
	console.log("myProject", myProject);

	return (
		<div>
			<h1 key={myProject.id}>{myProject.name}</h1>
			<Link href="/projects">Go back to projects</Link>
			<p>{myProject.description}</p>
		</div>
	);
}

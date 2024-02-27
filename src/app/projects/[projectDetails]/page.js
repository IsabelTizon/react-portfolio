import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../../../components/projects";

// Reat Icons
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function projectDetails({ params }) {
	//destructuring each object of the array myProjects using curly braces, variable name to the data we want to get from the object
	const { projectDetails } = params;

	const myProject = myProjects[projectDetails];

	return (
		<main className="mt-[80px]">
			<div className="bg-gray-900  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1
						className="yellow-letters capitalize"
						key={myProject.id}
					>
						{myProject.name}
					</h1>
				</div>
			</div>
			<div className="px-10 md:px-[15rem] lg:px-[25rem] xl:px-[50rem] 2xl:px-[80rem] mt-[15rem] xl:mt-[25rem]">
				<Image
					className="h-auto w-full object-containd rounded-t-2xl mb-10"
					width={400}
					height={300}
					src={myProject.pic}
					alt="project picture"
				/>

				<div className="flex flex-row">
					<Link target="_blank" href={myProject.url}>
						<button className="text-black tracking-widest lg:tracking-wide xl:tracking-widest uppercase mustard rounded-md mr-11">
							visit the site
						</button>
					</Link>

					<Link target="_blank" href={myProject.github}>
						<button className="text-black tracking-widest lg:tracking-wide xl:tracking-widest uppercase mustard p-4 rounded-md">
							GitHub Code
						</button>
					</Link>
				</div>
				<h5 className="text-[4rem] capitalize mt-[10rem] text-[#b38600]">
					about the project
				</h5>
				<div>
					{myProject.description.map((paragraph) => {
						console.log(
							"myProject.description ===> ",
							myProject.description
						);
						return (
							<p className="mt-[5rem]" key={paragraph}>
								{paragraph}
							</p>
						);
					})}
				</div>
				<h5 className="text-[4rem] capitalize mt-[10rem] text-[#b38600]">
					project parts
				</h5>
				{myProject.parts?.map((paragraph) => (
					<p className="mt-[5rem]" key={paragraph}>
						{paragraph}
					</p>
				))}
				<p>
					If you find this page nice, you can take a look at
					more of my{" "}
					<Link
						target="_blank"
						href="https://github.com/IsabelTizon"
						className="text-[#4e53f6]"
					>
						Github
					</Link>{" "}
					projects
				</p>
				<div className="flex justify-center">
					<div className="flex  flex-col">
						<h4>share this</h4>
						<div className="flex flex-row">
							<div className="flex justify-center">
								<FaFacebook />
								<AiFillTwitterCircle />
								<IoLogoWhatsapp />
							</div>
						</div>
					</div>
				</div>
				<Link
					className="text-[3rem] text-[#4e53f6] capitalize mt-[5rem]"
					href="/projects"
				>
					Go back to projects
				</Link>
			</div>
		</main>
	);
}

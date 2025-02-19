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
			<div className="bg-[#111827] grid-bg w-full p-10">
				<div className="flex justify-center">
					<h1
						className="text-light capitalize"
						key={myProject.id}
					>
						{myProject.name}
					</h1>
				</div>
			</div>
			<div className="bg-[#111827]">
				<div className="w-[60%] mx-auto">
					<Image
						className="h-auto w-[100%] object-containd rounded-t-2xl py-10"
						width={400}
						height={300}
						src={myProject.pic}
						alt="project picture"
					/>

					<div className="flex flex-row">
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
					<h3 className="text-light">about the project</h3>
					<div>
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
					</div>
					<h3 className="text-light">project parts</h3>
					{myProject.parts?.map((paragraph) => (
						<p
							className="text-light selection:mt-[5rem]"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
					<p className="text-light">
						If you find this page nice, you can take a look
						at more of my{" "}
						<Link
							target="_blank"
							href="https://github.com/IsabelTizon"
							className="text-[#9966ff]"
						>
							Github
						</Link>{" "}
						projects
					</p>
					<div className="flex justify-center">
						<div className="flex  flex-col">
							<h6 className="text-[#9966ff]">share this</h6>
							<div className="flex flex-row">
								<div className="flex justify-center">
									<FaFacebook
										size={30}
										color="#b38f00"
										fontSize="2rem"
									/>
									<AiFillTwitterCircle
										size={30}
										color="#b38f00"
										fontSize="2rem"
									/>
									<IoLogoWhatsapp
										size={30}
										color="#b38f00"
										fontSize="2rem"
									/>
								</div>
							</div>
						</div>
					</div>
					<Link
						className="text-[#9966ff] capitalize mt-[5rem]"
						href="/projects"
					>
						Go back to projects
					</Link>
				</div>
			</div>
		</main>
	);
}

import Link from "next/link";
import Image from "next/image";
import { myProjects } from "../../../components/projects";

// Reat Icons
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function projectDetails({ params }) {
	console.log("params", params);
	//destructuring each object of the array myProjects using curly braces, variable name to the data we want to get from the object
	const { projectDetails } = params;

	const myProject = myProjects[projectDetails];
	console.log("myProject", myProject);

	return (
		<main className="mt-[80px]">
			<div class="bg-gray-900  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[25rem]">
				<div className="flex justify-center">
					<h1
						className="yellow-letters capitalize"
						key={myProject.id}
					>
						{myProject.name}
					</h1>
				</div>
			</div>
			<div className="px-10 md:px-[15rem] lg:px-[25rem] xl:px-[50rem] 2xl:px-[80rem]">
				<div className="flex flex-row">
					<p className="text-[#1b4052] ml-8 text-[2.5rem] mr-11">
						username
					</p>
					<div className="">
						<MdOutlineWatchLater
							size={20}
							color="#595959"
						/>
					</div>
					<p className="text-[#595959] ml-8 text-[2.5rem]">
						04 February 2024
					</p>
				</div>
				<Image
					className="h-auto w-full md:w-[50%] lg:w-[70%] xl:w-full object-containd rounded-t-2xl mb-10"
					width={400}
					height={300}
					src={myProject.pic}
					alt="project picture"
				/>
				<Link href="/projects">Go back to projects</Link>
				<p>{myProject.description}</p>
				<h5>project parts</h5>
				<p>{myProject.parts}</p>
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
				<div className="leading-10"></div>
				<h3>Leave a Reply</h3>
				<p>your email address will not be published</p>
				<p>required fields are marked * </p>
			</div>
		</main>
	);
}

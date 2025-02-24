import {
	languages,
	frameworks,
	tools,
	concepts,
} from "../components/skills";
import { myProjects } from "../components/projects";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "About",
	description: "information about myself",
};

export default function About() {
	return (
		<main className="mt-[80px]">
			{/** -[]  PHONE => min-width: 360px */}
			{/** md-[]  TABLET => min-width: 768px */}
			{/** lg-[]  LANDSCAPE => min-width: 1024px */}
			{/** xl-[] LAPTOP => min-width: 1280px */}
			{/** 2xl-[] SCREEN => min-width: 1536px */}
			{/** w-full  md:w-1/3 lg:text-[] xl:text-[] 2xl:text-[] */}
			{/* hero */}
			<div className="bg-[#111827] w-full pl-[10%] py-[7%] md:pl-[15%]">
				<h1 className="text-light capitalize">Hi,</h1>
				<h2 className="text-light capitalize mb-4">
					I&apos;m Isabel
				</h2>
				<h4 className="text-light capitalize">
					junior web developer
				</h4>
				<Link href="/projects">
					<button className="purple purple:hover mt-8">
						view portfolio
					</button>
				</Link>
			</div>
			{/* My skills */}
			<div className="bg-[#303c55] grid-bg">
				<div className="py-[5%] px-[10%]">
					<div className="flex justify-center">
						<h2 className="text-light underline underline-offset-8">
							Technical skills
						</h2>
					</div>
					<div className="flex flex-wrap">
						{/* first column */}
						<div className="w-[25%]">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Languages
							</h4>
							<div className="">
								<ul>
									{languages.map((language) => (
										<li
											key={language.id}
											className="text-light"
										>
											{language.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* second column */}
						<div className="w-[25%]">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Libraries and Frameworks
							</h4>
							<div className="">
								<ul>
									{frameworks.map((framework) => (
										<li
											key={framework.id}
											className="text-light"
										>
											{framework.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* third column */}
						<div className="w-[25%]">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Tools
							</h4>
							<div className="">
								<ul>
									{tools.map((tool) => (
										<li
											key={tool.id}
											className="text-light"
										>
											{tool.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* fourth column */}
						<div className="w-[25%]">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Concepts
							</h4>
							<div className="">
								<ul>
									{concepts.map((concept) => (
										<li
											key={concept.id}
											className="text-light"
										>
											{concept.name}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* About me */}
			<div className="w-[95%] m-auto my-24">
				<div className="flex flex-wrap">
					<div className="w-[50%]">
						<h2 className="">About me</h2>
						<div className="">
							<p className="pb-4">
								I am a Web Development student in my second
								year, with graduation in June 2023. During
								these two years at the City of Glasgow
								College, as well as also self-studying in my
								free time, I have learned a lot about web
								development.
							</p>
							<p className="pb-4">
								For this reason, my intention now is to find
								an internship and use my knowledge and
								skills I have developed.
							</p>
							<p className="pb-4">
								I consider myself to be a very hard-working
								person, a great team player and I always try
								to work on my own initiative to overcome any
								obstacles.
							</p>
							<p className="pb-4">
								Fluency in both English and Spanish.
							</p>
						</div>
					</div>
					<div className="w-[50%]">
						<Image
							className="h-50 w-[65%] m-auto object-containd"
							width={200}
							height={150}
							src="/img/profile-photo.png"
							alt="Picture of the author"
						/>
					</div>
				</div>
			</div>
			{/* My latest Work */}
			<div className="bg-[#ecf2f9]">
				<div className="w-[95%] m-auto py-16">
					<h2 className="">My latest work</h2>
					<p className="">
						Lorem Ipsum is simply dummy text of the printing
						and typesetting industry. Lorem Ipsum has been
						the Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum
						has been the industrys standard dummy text ever
						since the 1500s, when an unknown printer took a
					</p>
				</div>
				<div>
					<div className="flex flex-wrap gap-7">
						{/* */}

						{myProjects.slice(-6).map((projectsItem) => (
							<Link
								key={projectsItem.id}
								href={`/projects/${projectsItem.id}`}
								className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%] bg-gray-900"
							>
								<Image
									className="h-150 w-full object-containd"
									width={300}
									height={300}
									src={projectsItem.pic}
									alt="project picture"
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
			{/* Project's sections */}
			<div className="w-[70%] m-auto py-16">
				<div className="flex justify-center">
					<h2 className="">Different areas of work</h2>
				</div>
			</div>
			ß
			<div>
				<div className="flex flex-wrap gap-4">
					<div className="w-full md:w-[30%]">
						<div className="flex justify-center">
							<h4 className="text-gray-900 font-bold uppercase pb-8">
								frontend projects
							</h4>
						</div>
						<Link href="/contact">
							<Image
								className="w-full h-auto rounded-2xl"
								width={300}
								height={300}
								src="/img/getMedia.png"
								alt="project picture"
							/>
						</Link>
					</div>
					<div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]">
						<div className="flex justify-center">
							<h4 className="text-gray-900 font-bold uppercase pb-8">
								backend projects
							</h4>
						</div>
						<Link href="/contact">
							<Image
								className="w-full h-auto rounded-2xl"
								width={300}
								height={300}
								src="/img/mode.png"
								alt="project picture"
							/>
						</Link>
					</div>
					<div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]">
						<div className="flex justify-center">
							<h4 className="text-gray-900 font-bold uppercase pb-8">
								team projects
							</h4>
						</div>
						<Link href="/contact">
							<Image
								className="w-full h-auto rounded-2xl"
								width={300}
								height={300}
								src="/img/glasgowParks.png"
								alt="project picture"
							/>
						</Link>
					</div>
				</div>
			</div>
			{/* Are You Ready To Start New Project With Me? */}
			<div className="bg-gray-800">
				<div className="flex justify-center mx-[40px] md:mx-[150px] lg:mx-[300px]  xl:mx-[250px] 2xl:mx-[400px]">
					<div className="mx-full py-24">
						<div className="flex justify-center">
							<h2 className="text-light text-center">
								Open to work
							</h2>
						</div>

						<p className="text-white pb-8 text-center">
							Passionate about coding and web design, always
							striving to grow and take on new challenges
						</p>

						<div className="flex justify-center">
							<Link href="/contact">
								<button className="text-black uppercase purple purple:hover rounded-md">
									contact me
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

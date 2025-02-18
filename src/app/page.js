import {
	myfrontendSkills,
	mybackendSkills,
	myOtherSkills,
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
			<div className="bg-gray-900  w-full pl-[10%] py-[7%] md:pl-[15%]">
				<h1 className="text-light capitalize">Hi,</h1>
				<h2 className="text-light capitalize">
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
				<div className="py-24 px-8 md:px-[1rem] lg:px-[2rem] xl:px-[12rem] 2xl:px-[15rem] xl:py-[5rem] 2xl:py-[8rem]">
					<div className="flex justify-center">
						<h2 className="text-light">Technical skills</h2>
					</div>
					<div className="flex flex-wrap">
						{/* first column */}
						<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-11/12 md:w-6/12 lg:w-4/12 xl:w-4/12">
							<h3 className="primary-400 font-thin tracking-wide uppercase pb-8 text-[24px]">
								frondend developer
							</h3>
							<div className="">
								<ul>
									{myfrontendSkills.map((frontendSkill) => (
										<li
											key={frontendSkill.id}
											className="text-light"
										>
											{frontendSkill.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* second column */}
						<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full md:w-6/12 lg:w-4/12 xl:w-4/12">
							<h3 className="primary-400 font-thin tracking-wide uppercase pb-8 text-[24px]">
								backend developer
							</h3>
							<div className="">
								<ul>
									{mybackendSkills.map((backendSkill) => (
										<li
											key={backendSkill.id}
											className="text-light"
										>
											{backendSkill.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* third column */}
						<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full md:w-6/12 lg:w-4/12 xl:w-4/12">
							<h3 className="primary-400 font-thin tracking-wide uppercase pb-8 text-[24px]">
								Others
							</h3>
							<div className="flex justify-center">
								<ul>
									{myOtherSkills.map((othersSkill) => (
										<li
											key={othersSkill.id}
											className="text-light"
										>
											{othersSkill.name}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* About me */}
			<div className="">
				<div className="flex flex-col justify-center py-24">
					<h2 className="">about me</h2>
					<div className="flex flex-wrap">
						<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-2/4 lg:w-2/4 xl:w-2/4 ">
							<p className="pb-8">
								I am a Web Development student in my second
								year, with graduation in June 2023. During
								these two years at the City of Glasgow
								College, as well as also self-studying in my
								free time, I have learned a lot about web
								development.
							</p>
							<p className="pb-8">
								For this reason, my intention now is to find
								an internship and use my knowledge and
								skills I have developed.
							</p>
							<p className="pb-8">
								I consider myself to be a very hard-working
								person, a great team player and I always try
								to work on my own initiative to overcome any
								obstacles.
							</p>
							<p className="pb-8">
								Fluency in both English and Spanish.
							</p>
						</div>
						<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-2/4 lg:w-2/4 xl:w-2/4">
							<Image
								className="h-150 w-full object-containd pb-10 px-10"
								width={200}
								height={150}
								src="/img/profile-photo.png"
								alt="Picture of the author"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* My latest Work */}
			<div className="bg-[#ecf2f9]">
				<div className="">
					<h2 className="">my latest work</h2>
					<p className="pb-40">
						Lorem Ipsum is simply dummy text of the printing
						and typesetting industry. Lorem Ipsum has been
						the Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum
						has been the industrys standard dummy text ever
						since the 1500s, when an unknown printer took a
					</p>
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
			<div className="">
				<h2 className="">projects section</h2>
				<p className="pb-40">
					Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the
					1500s, when an unknown printer took a galley of
					type and scrambled it to
				</p>
				<div className="flex flex-wrap gap-8">
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

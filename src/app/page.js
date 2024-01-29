import {
	myfrontendSkills,
	mybackendSkills,
	myOtherSkills,
} from "../components/skills";
import Image from "next/image";

export const metadata = {
	title: "About",
	description: "information about myself",
};

export default function About() {
	return (
		<main className="mt-[80px]">
			{/* hero */}
			<div class="bg-gray-900 w-full p-10 md:p-30 lg:p-60 xl:p-90">
				<h1 className="yellow-letters text-[40px] md:text-5xl  lg:text-5xl capitalize pb-4">
					isabel tizon arranz
				</h1>
				<p className="yellow-letters capitalize text-[25px] md:text-xl lg:text-2xl pb-4">
					junior web developer
				</p>
				<button className="text-black uppercase mustard p-3 rounded-md">
					view portfolio
				</button>
			</div>

			{/* My skills */}
			<div className="mt-24 mx-1 md:mx-[15rem] lg:mx-30 xl:mx-70">
				<h2 className="text-black text-[40px] md:text-4xl lg:text-4xl capitalize">
					my skills
				</h2>
				<div className="flex flex-wrap">
					<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-11/12 md:w-6/12 lg:w-4/12 xl:w-4/12">
						{/* <div className="flex-1 md:flex-2 lg:w-4/12 xl:-4/12"></div> */}
						<h3 className="text-black uppercase">
							frondend developer
						</h3>
						<div className="">
							<ul>
								{myfrontendSkills.map((frontendSkill) => (
									<li
										key={frontendSkill.id}
										className="sizePhoneParagraph sizeParagraph"
									>
										Knoledge of {frontendSkill.name}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full md:w-6/12 lg:w-4/12 xl:w-4/12">
						<h3 className="text-black uppercase">
							backend developer
						</h3>
						<div className="">
							<ul>
								{mybackendSkills.map((backendSkill) => (
									<li
										key={backendSkill.id}
										className="sizePhoneParagraph sizeParagraph"
									>
										Knoledge of {backendSkill.name}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full md:w-6/12 lg:w-4/12 xl:w-4/12">
						<h3 className="text-black uppercase">Others</h3>
						<div>
							<ul>
								{myOtherSkills.map((othersSkill) => (
									<li
										key={othersSkill.id}
										className="sizePhoneParagraph sizeParagraph"
									>
										Knoledge of {othersSkill.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* About me */}
			<div className="mt-24 mx-1 md:mx-[15rem] lg:mx-30 xl:mx-70">
				<div className="flex flex-col justify-center">
					<h2 className="text-black text-[40px] pb-20 md:text-4xl lg:text-4xl capitalize">
						about me
					</h2>
					<div className="flex flex-wrap">
						<p className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-2/4 lg:w-2/4 xl:w-2/4 sizePhoneParagraph sizeParagraph">
							I am a Web Development student in my second
							year, with graduation in June 2023. During
							these two years at the City of Glasgow
							College, as well as also self-studying in my
							free time, I have learned a lot about web
							development. For this reason, my intention now
							is to find an internship and use my knowledge
							and skills I have developed. I consider myself
							to be a very hard-working person, a great team
							player and I always try to work on my own
							initiative to overcome any obstacles. Fluency
							in both English and Spanish.
						</p>
						<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full md:w-2/4 lg:w-2/4 xl:w-2/4">
							<Image
								className="h-150 w-full object-containd p-10"
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
			<div className="mt-24 bg-[#ecf2f9]">
				<div className="mx-1 md:mx-[15rem] lg:mx-30 xl:mx-70">
					<h2 className="text-black text-[40px] md:text-4xl lg:text-4xl capitalize">
						my latest work
					</h2>
				</div>
			</div>
			{/* Project's sections */}
			<div className="mt-24 mx-1 md:mx-[15rem] lg:mx-30 xl:mx-70">
				<h2 className="text-black text-[40px] md:text-4xl lg:text-4xl capitalize">
					projects sections
				</h2>
			</div>
			{/* Are You Ready To Start New Project With Me? */}
			<div className="mt-24 bg-gray-900 ">
				<div className="flex justify-center">
					<div className="mt-24 mx-full">
						<h2 className="text-white  text-[40px] md:text-4xl lg:text-4xl capitalize">
							are you ready to start a new project with me?
						</h2>
					</div>
				</div>
			</div>
		</main>
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
		// 	<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		// 		<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
		// 			Get started by editing&nbsp;
		// 			<code className="font-mono font-bold">
		// 				src/app/page.js
		// 			</code>
		// 		</p>
		// 		<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
		// 			<a
		// 				className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
		// 				href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 				target="_blank"
		// 				rel="noopener noreferrer"
		// 			>
		// 				By{" "}
		// 				<Image
		// 					src="/vercel.svg"
		// 					alt="Vercel Logo"
		// 					className="dark:invert"
		// 					width={100}
		// 					height={24}
		// 					priority
		// 				/>
		// 			</a>
		// 		</div>
		// 	</div>

		// 	<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
		// 		<Image
		// 			className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
		// 			src="/next.svg"
		// 			alt="Next.js Logo"
		// 			width={180}
		// 			height={37}
		// 			priority
		// 		/>
		// 	</div>

		// 	<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
		// 		<a
		// 			href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Docs{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p
		// 				className={`m-0 max-w-[30ch] text-sm opacity-50`}
		// 			>
		// 				Find in-depth information about Next.js features
		// 				and API.
		// 			</p>
		// 		</a>

		// 		<a
		// 			href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Learn{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p
		// 				className={`m-0 max-w-[30ch] text-sm opacity-50`}
		// 			>
		// 				Learn about Next.js in an interactive course
		// 				with&nbsp;quizzes!
		// 			</p>
		// 		</a>

		// 		<a
		// 			href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Templates{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p
		// 				className={`m-0 max-w-[30ch] text-sm opacity-50`}
		// 			>
		// 				Explore starter templates for Next.js.
		// 			</p>
		// 		</a>

		// 		<a
		// 			href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		// 			className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			<h2 className={`mb-3 text-2xl font-semibold`}>
		// 				Deploy{" "}
		// 				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
		// 					-&gt;
		// 				</span>
		// 			</h2>
		// 			<p
		// 				className={`m-0 max-w-[30ch] text-sm opacity-50`}
		// 			>
		// 				Instantly deploy your Next.js site to a
		// 				shareable URL with Vercel.
		// 			</p>
		// 		</a>
		// 	</div>
		// </main>
	);
}

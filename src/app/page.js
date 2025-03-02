/* DATA */
import Skills from "@/components/home/Skills";
import {
	languages,
	frameworks,
	tools,
	concepts,
} from "./data/skills";

/** COMPONENTS */
import Link from "next/link";
import { AboutMe } from "@/components/home/AboutMe";
import { MyLatestWork } from "@/components/home/MyLatestWork";
import { DifferentAreasOfExpertise } from "@/components/home/DifferentAreasOfExpertise";
import { OpenToWork } from "@/components/home/OpenToWork";

/** METADATA */
export const metadata = {
	title: "About",
	description: "information about myself",
};

export default function About() {
	return (
		<main className="mt-[80px]">
			{/* Hero */}
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
			<Skills
				skills={{ languages, frameworks, tools, concepts }}
			/>
			<AboutMe />
			<MyLatestWork />
			<DifferentAreasOfExpertise />
			<OpenToWork />
		</main>
	);
}

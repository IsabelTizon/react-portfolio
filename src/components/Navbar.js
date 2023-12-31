"use client";
import Link from "next/link";

function Navbar() {
	return (
		<header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
			<nav className="max-w-[1366px] mx-auto h-[80px] flex justify-between items-center  p-4">
				<div>
					<Link href="/">About</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/projects">projects</Link>
					<Link href="/contact">contact me</Link>
					<Link href="/contact">Github</Link>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;

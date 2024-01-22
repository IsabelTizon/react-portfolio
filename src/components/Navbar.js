"use client";
import Link from "next/link";
import { useState } from "react";
import {
	AiOutlineMenu,
	AiOutlineClose,
} from "react-icons/ai";

function Navbar() {
	const [menuIcon, setIcon] = useState(false);
	const handleSmallerScreensNavigation = () => {
		setIcon(!menuIcon);
	};
	return (
		<header className="bg-slate-400 text-black w-full ease-in duration-300 fixed top-0 left-0 z-10">
			<nav className="max-w-[1366px] mx-auto h-[80px] flex justify-between items-center  p-4">
				<div>
					<Link
						className="uppercase font-extrabold text-3xl md:text-2xl lg:text-3xl text-slate-800 hover:text-[#381638]"
						href="/"
					>
						Isabel Arranz
					</Link>
				</div>

				{/*larger screen navigation */}
				<ul className="hidden md:flex uppercase font-semibold text-xl md:text-[14px] lg:text-[15px] text-slate-800">
					<li className="mr-4 lg:mr-8 hover:text-[#381638]">
						<Link href="/blog">Blog</Link>
					</li>
					<li className="mr-4 lg:mr-8 hover:text-[#381638]">
						<Link href="/projects">projects</Link>
					</li>
					<li className="mr-4 lg:mr-8 hover:text-[#381638]">
						<Link href="/contact">contact</Link>
					</li>
					<li className="text-[#f9f459] hover:text-black">
						<Link
							target="_blank"
							href="https://github.com/IsabelTizon"
						>
							Github
						</Link>
					</li>
				</ul>

				{/*smaller screen burger icon */}
				{/*onClick change the icon */}
				<div
					onClick={handleSmallerScreensNavigation}
					className="flex md:hidden"
				>
					{menuIcon ? (
						<AiOutlineClose
							size={25}
							className="text-[#CEFF00]"
						/>
					) : (
						<AiOutlineMenu
							size={25}
							className="text-[#CEFF00]"
						/>
					)}
				</div>

				{/*smaller screens */}
				<div
					className={
						menuIcon
							? "md-hidden absolute top-[80px] right-0 bottom-0 left-0 flex justify-center w-full h-screen bg-slate-800 text-center text-white ease-in duration-300"
							: "md-hidden absolute top-[80px] right-0 left-[100%] flex justify-center items-center w-full h-screen bg-slate-800 text-center text-white ease-in duration-300"
					}
				>
					<div className="w-full h-full">
						<ul className="uppercase font-bold text-2xl">
							<li
								onClick={handleSmallerScreensNavigation}
								className="py-5 hover:text-[#381638] cursor-pointer"
							>
								<Link href="/blog">Blog</Link>
							</li>
							<li
								onClick={handleSmallerScreensNavigation}
								className="py-5 hover:text-[#381638] cursor-pointer"
							>
								<Link href="/projects">projects</Link>
							</li>
							<li
								onClick={handleSmallerScreensNavigation}
								className="py-5 hover:text-[#381638] cursor-pointer"
							>
								<Link href="/contact">contact</Link>
							</li>
							<li
								onClick={handleSmallerScreensNavigation}
								className="py-5 hover:text-[#381638] cursor-pointer"
							>
								<Link
									target="_blank"
									href="https://github.com/IsabelTizon"
								>
									Github
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;

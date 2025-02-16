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
		<header className="bg-[#111827] text-[#eee6ff] w-full ease-in duration-300 fixed top-0 left-0 px-[15rem] z-10">
			<nav className="w-full h-[80px] flex justify-between items-center">
				<div>
					<Link
						className="tracking-wider uppercase font-extrabold text-[4rem] md:text-[4.5rem] lg:text-[6rem] text-[#F0F0F5] hover:text-[#381638]"
						href="/"
					>
						Isabel Arranz
					</Link>
				</div>

				{/*larger screen navigation */}
				<ul className="hidden md:flex uppercase text-xl md:text-[14px] lg:text-[15px] text-[#F0F0F5] items-center gap-x-10">
					<li className="hover:text-[#9966ff] tracking-wider">
						<Link href="/projects">projects</Link>
					</li>
					<li className="hover:text-[#9966ff]  tracking-wider">
						<Link href="/contact">contact</Link>
					</li>
					{/* <li className="text-[#9966ff] hover:text-[#F0F0F5] border-[1px] border-[#9966ff] px-20 py-12 rounded-full hover:bg-[#111827] transition-all  tracking-wider">
						<Link
							target="_blank"
							href="https://github.com/IsabelTizon"
						>
							Github
						</Link>
					</li> */}
					<li>
						<Link
							target="_blank"
							href="https://github.com/IsabelTizon"
						>
							<button className="purple-full purple-full:hover">
								Github
							</button>
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

import Link from "next/link";

function Navbar() {
	return (
		<div>
			<Link href="/">About</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/projects">projects</Link>
			<Link href="/contact">contact me</Link>
			<Link href="/contact">Github</Link>
		</div>
	);
}

export default Navbar;

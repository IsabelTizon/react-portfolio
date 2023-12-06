import Link from "next/link";
export default function About() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h2 className="text-black">ABOUT ME</h2>
				<Link href="/">Go back home</Link>
			</div>
		</main>
	);
}

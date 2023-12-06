import Link from "next/link";
export default function Contact() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h2 className="text-black">CONTACT ME</h2>
				<Link href="/">Go back to home</Link>
			</div>
		</main>
	);
}

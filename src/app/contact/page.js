import React from "react";
import Link from "next/link";

export const metadata = {
	title: "contact",
	description: "all the information to contact me",
};

const contact = () => {
	return (
		<div>
			<h1>Blog</h1>
			<Link href="/">Go back to home</Link>
		</div>
	);
};

export default contact;

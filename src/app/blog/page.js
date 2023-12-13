import React from "react";
import Link from "next/link";

export const metadata = {
	title: "Blog",
	description: "my blog page",
};

const blog = () => {
	return (
		<div>
			<h1>Blog</h1>
			<Link href="/">Go back to home</Link>
		</div>
	);
};

export default blog;

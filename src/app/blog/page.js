import React from "react";
import Link from "next/link";

export const metadata = {
	title: "Blog",
	description: "my blog page",
};

const blog = () => {
	return (
		<main className="mt-[100px]">
			<div className="tittle">
				<h1>Blog</h1>
			</div>{" "}
		</main>
	);
};

export default blog;

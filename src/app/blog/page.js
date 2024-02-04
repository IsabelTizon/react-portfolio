import React from "react";
import Link from "next/link";

export const metadata = {
	title: "Blog",
	description: "my blog page",
};

const blog = () => {
	return (
		<main className="mt-[80px]">
			<div class="bg-gray-900  w-full p-10 md:p-42 lg:p-40 xl:p-[15rem] 2xl:p-[55rem]">
				<div className="flex justify-center">
					<h1 className="yellow-letters capitalize">
						Blog
					</h1>
				</div>
			</div>
		</main>
	);
};

export default blog;

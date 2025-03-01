import Link from "next/link";

export const OpenToWork = () => {
	return (
		<div className="bg-gray-800">
			<div className="flex justify-center mx-[40px] md:mx-[150px] lg:mx-[300px]  xl:mx-[250px] 2xl:mx-[400px]">
				<div className="mx-full py-24">
					<div className="flex justify-center">
						<h2 className="text-light text-center">
							Open to work
						</h2>
					</div>

					<p className="text-white pb-8 text-center">
						Passionate about coding and web design, always
						striving to grow and take on new challenges
					</p>

					<div className="flex justify-center">
						<Link href="/contact">
							<button className="text-black uppercase purple purple:hover rounded-md">
								contact me
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

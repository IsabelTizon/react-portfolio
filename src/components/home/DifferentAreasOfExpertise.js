import Image from "next/image";
import Link from "next/link";

export const DifferentAreasOfExpertise = () => {
	return (
		<div className="bg-[#111827]">
			{/* title */}
			<div className="w-[70%] m-auto py-16">
				<div className="flex justify-center">
					<h2 className="secundary-300">
						Different areas of expertise
					</h2>
				</div>
			</div>
			<div>
				<div className="flex flex-wrap gap-4">
					<div className="w-full md:w-[30%]">
						<div className="flex justify-center">
							<h4 className="primary-500 font-bold uppercase pb-8">
								frontend projects
							</h4>
						</div>
						<Link href="/contact">
							<Image
								className="w-full h-auto rounded-2xl"
								width={300}
								height={300}
								src="/img/getMedia.png"
								alt="project picture"
							/>
						</Link>
					</div>
					<div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]">
						<div className="flex justify-center">
							<h4 className="primary-500 font-bold uppercase pb-8">
								backend projects
							</h4>
						</div>
						<Link href="/contact">
							<Image
								className="w-full h-auto rounded-2xl"
								width={300}
								height={300}
								src="/img/mode.png"
								alt="project picture"
							/>
						</Link>
					</div>
					<div className="w-full md:w-[32%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%]">
						<div className="flex justify-center">
							<h4 className="primary-500 font-bold uppercase pb-8">
								team projects
							</h4>
						</div>
						<Link href="/contact">
							<Image
								className="w-full h-auto rounded-2xl"
								width={300}
								height={300}
								src="/img/glasgowParks.png"
								alt="project picture"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

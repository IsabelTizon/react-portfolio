import Image from "next/image";
import Link from "next/link";

export const DifferentAreasOfExpertise = () => {
	return (
		<div className="bg-[#373b57] py-10 lg:py-20">
			{/* title */}
			<div className="w-[90%] md:w-[70%] m-auto pb-10">
				<div className="">
					<h2 className="secundary-200 text-center">
						Different areas of expertise
					</h2>
				</div>
			</div>
			<div className="width-[95%] md:w-[90%] m-auto">
				<div className="flex flex-wrap gap-4">
					<div className="w-full md:w-[30%]">
						<div className="flex justify-center">
							<h5 className="primary-500 uppercase pb-8">
								frontend projects
							</h5>
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
							<h5 className="primary-500 uppercase pb-8">
								backend projects
							</h5>
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
							<h5 className="primary-500 uppercase pb-8">
								team projects
							</h5>
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

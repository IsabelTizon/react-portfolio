import Image from "next/image";

export const AboutMe = () => {
	return (
		<div className="bg-[#111827] py-10 lg:py-20">
			<div className="w-[95%] lg:w-[80%] m-auto">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/2">
						<h2 className="secundary-300 mb-2">About me</h2>

						<p className="pb-4 text-light">
							I am a Web Development student in my second
							year, with graduation in June 2023. During
							these two years at the City of Glasgow
							College, as well as also self-studying in my
							free time, I have learned a lot about web
							development.
						</p>
						<p className="pb-4 text-light">
							For this reason, my intention now is to find
							an internship and use my knowledge and skills
							I have developed.
						</p>
						<p className="pb-4 text-light">
							I consider myself to be a very hard-working
							person, a great team player and I always try
							to work on my own initiative to overcome any
							obstacles.
						</p>
						<p className="pb-4 text-light">
							Fluency in both English and Spanish.
						</p>
					</div>

					<div className="w-full md:w-1/2">
						<Image
							className="h-50 w-[55%] m-auto object-containd rounded-md"
							width={200}
							height={150}
							src="/img/photo-resize.jpg"
							alt="Picture of the author"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

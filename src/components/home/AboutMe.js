import Image from "next/image";

export const AboutMe = () => {
	return (
		<div className="bg-[#111827] py-10 lg:py-20">
			<div className="w-[95%] lg:w-[80%] m-auto">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/2">
						<h2 className="secundary-300 mb-6">About me</h2>

						<p className="pb-4 text-light">
							Passionate about web development and currently
							working on a project using React and NestJS.
							I’m currently studying a Master in Advanced
							Web Development and previously completed an
							HND in Web Development in Glasgow.
						</p>
						<p className="pb-4 text-light">
							I’m excited to join a collaborative team that
							follows agile methodologies and values best
							practices like Clean Code. With strong
							communication skills in English and a
							friendly, positive attitude, I prioritize both
							the quality of my work and building strong
							relationships.
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

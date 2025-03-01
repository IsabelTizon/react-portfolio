import Image from "next/image";

export const AboutMe = () => {
	return (
		<div className="bg-[#111827]">
			<div className="w-[95%] m-auto">
				<div className="flex flex-wrap">
					<div className="w-[50%] py-16">
						<h2 className="secundary-300">About me</h2>
						<div className="">
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
								an internship and use my knowledge and
								skills I have developed.
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
					</div>
					<div className="w-[50%] py-16">
						<Image
							className="h-50 w-[65%] m-auto object-containd"
							width={200}
							height={150}
							src="/img/profile-photo.png"
							alt="Picture of the author"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

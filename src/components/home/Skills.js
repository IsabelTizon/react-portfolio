const Skills = ({ skills }) => {
	return (
		<div>
			<div className="bg-[#303c55] grid-bg">
				<div className="py-[5%] px-[10%]">
					<div className="flex justify-center">
						<h2 className="text-light underline underline-offset-8 py-9">
							Technical skills
						</h2>
					</div>
					<div className="flex flex-wrap">
						{/* first column */}
						<div className="w-full md:w-1/2 lg:w-1/4">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Languages
							</h4>
							<div className="">
								<ul>
									{skills.languages.map((language) => (
										<li
											key={language.id}
											className="text-light"
										>
											{language.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* second column */}
						<div className="w-full md:w-1/2 lg:w-1/4">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Frameworks
							</h4>
							<div className="">
								<ul>
									{skills.frameworks.map((framework) => (
										<li
											key={framework.id}
											className="text-light"
										>
											{framework.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* third column */}
						<div className="w-full md:w-1/2 lg:w-1/4">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Tools
							</h4>
							<div className="">
								<ul>
									{skills.tools.map((tool) => (
										<li
											key={tool.id}
											className="text-light"
										>
											{tool.name}
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* fourth column */}
						<div className="w-full md:w-1/2 lg:w-1/4">
							<h4 className="primary-400 font-thin tracking-wide uppercase pb-8">
								Concepts
							</h4>
							<div className="">
								<ul>
									{skills.concepts.map((concept) => (
										<li
											key={concept.id}
											className="text-light"
										>
											{concept.name}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Skills;

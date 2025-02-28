export default function Hero({ title }) {
	return (
		<div className="bg-[#111827] grid-bg w-full p-10">
			<div className="flex justify-center">
				<h1 className="text-light">{title}</h1>
			</div>
		</div>
	);
}

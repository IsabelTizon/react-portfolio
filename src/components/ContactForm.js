import React from "react";

export const ContactForm = () => {
	return (
		<form className="mr-[7rem] bg-white p-10">
			{/* Name */}
			<div className="flex flex-col">
				<label
					className="label-form text-[2.5rem]"
					htmlFor="name"
				>
					Name
				</label>
				<imput
					id="name"
					type="text"
					name="name"
					className="input-form h-[30px]"
				/>
			</div>
			{/* Email */}
			<div className="flex flex-col">
				<label
					className="label-form text-[2.5rem]"
					htmlFor="email"
				>
					Email
				</label>
				<imput
					id="email"
					type="email"
					name="email"
					className="input-form h-[30px]"
				/>
			</div>
			{/* Comment */}
			<div className="">
				<label
					className="label-form text-[2.5rem] mb-[2rem]"
					htmlFor="message"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					className="input-form h-[100px]"
				/>
			</div>
			<button className="mustard mt-[35px]" type="submit">
				Send message
			</button>
		</form>
	);
};

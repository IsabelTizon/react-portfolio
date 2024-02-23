import React from "react";

export const ContactForm = () => {
	return (
		<form className="mr-[7rem]">
			{/* Name */}
			<div className="flex flex-col">
				<label className="label-form" htmlFor="name">
					Name
				</label>
				<imput
					id="name"
					type="text"
					name="name"
					className="input-form"
				/>
			</div>
			{/* Email */}
			<div className="flex flex-col">
				<label className="label-form" htmlFor="email">
					Email
				</label>
				<imput
					id="email"
					type="email"
					name="email"
					className="input-form"
				/>
			</div>
			{/* Comment */}
			<div className="">
				<label className="label-form" htmlFor="comment">
					Comment
				</label>
				<textarea
					id="comment"
					name="comment"
					className="input-form"
				/>
			</div>
		</form>
	);
};

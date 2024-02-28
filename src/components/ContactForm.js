"use client";
import React, { useState } from "react";

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mr-[7rem] bg-white p-10"
		>
			{/* Name */}
			<div className="flex flex-col">
				<label
					className="label-form text-[3.2rem]"
					htmlFor="name"
				>
					Name
				</label>
				<input
					id="name"
					type="text"
					name="name"
					className="input-form h-[30px] text-[3rem]"
					value={formData.name}
					onChange={handleChange}
					required
					minLength={3}
					maxLength={30}
				/>
			</div>
			{/* Email */}
			<div className="flex flex-col">
				<label
					className="label-form text-[3.2rem]"
					htmlFor="email"
				>
					Email
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className="input-form h-[30px] text-[3rem]"
					value={formData.email}
					onChange={handleChange}
					required
					minLength={3}
					maxLength={30}
				/>
			</div>
			{/* Message */}
			<div className="">
				<label
					className="label-form text-[3.2rem] mb-[2rem]"
					htmlFor="message"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					className="input-form h-[200px] text-[2.8rem]"
					value={formData.message}
					onChange={handleChange}
					required
					minLength={10}
					maxLength={500}
				/>
			</div>
			<button className="mustard mt-[35px]" type="submit">
				Send message
			</button>
		</form>
	);
};

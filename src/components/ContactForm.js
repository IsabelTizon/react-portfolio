"use client";
import React, { useState } from "react";

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);

		try {
			const response = await fetch("api/contact", {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			});
			if (!response.ok) {
				throw new Error(
					"HTTP error! status: " + response.status
				);

				const responseData = await response.json();
				console.log(responseData);
			}
		} catch (error) {
			console.log(
				"There was a problem with the fecth operation" +
					error.message
			);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="">
			{/* Name */}
			<div className="flex flex-col">
				<label className="label-form" htmlFor="name">
					Name
				</label>
				<input
					id="name"
					type="text"
					name="name"
					className="input-form h-[5px]"
					value={formData.name}
					onChange={handleChange}
					required
					minLength={3}
					maxLength={30}
				/>
			</div>
			{/* Email */}
			<div className="flex flex-col">
				<label className="label-form" htmlFor="email">
					Email
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className="input-form h-[5px]"
					value={formData.email}
					onChange={handleChange}
					required
					minLength={3}
					maxLength={30}
				/>
			</div>
			{/* Message */}
			<div className="">
				<label className="label-form" htmlFor="message">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					className="input-form h-[200px]"
					value={formData.message}
					onChange={handleChange}
					required
					minLength={10}
					maxLength={500}
				/>
			</div>
			<button className="purple" type="submit">
				Send message
			</button>
		</form>
	);
};

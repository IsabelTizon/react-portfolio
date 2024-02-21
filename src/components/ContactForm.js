import React from "react";

export const ContactForm = () => {
	return (
		<form>
			<div>
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
		</form>
	);
};

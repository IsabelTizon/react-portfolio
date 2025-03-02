import Hero from "../../components/global/Hero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "../../components/contact/ContactForm";

export const metadata = {
	title: "contact",
	description: "all the information to contact me",
};

const contact = () => {
	return (
		<main className="mt-[80px]">
			{/* Hero */}
			<Hero title="Contact" />

			{/* Get in contact (Links & Form) */}
			<div className="bg-[#111827]">
				<div className="flex flex-col lg:flex-row w-[90%] m-auto py-11 gap-11">
					<ContactDetails />
					<ContactForm />
				</div>
			</div>
		</main>
	);
};

export default contact;

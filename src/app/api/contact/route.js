import { NextResponse } from "next/server";

//
const fs = require("fs");
const path = require("path");

export async function POST(request) {
	const data = await request.json();

	//read data
	const filePath = path.resolve(
		process.cwd(),
		"app/data/submissions.json"
	);

	let submissions = [];

	try {
		const data = fs.readFileSync(filePath, "utf8");
		submissions = JSON.parse(data);
	} catch (error) {
		console.error("Error reading this file", error);
	}

	console.log(data, "data >>>");

	//parse json + add new data + write in json file again
	submissions.push(data);

	try {
		const newData = JSON.stringify(submission, null, 2);
		fs.writeFileSync(filePath, newData, "utf8");
	} catch (error) {
		console.error("Error writting this file", error);
	}

	return NextResponse.json({
		data: data,
		message: "This message has been successfully sent",
	});
}

// export async function GET() {
// 	return NextResponse.json({ mesage: "Hello" });
// }

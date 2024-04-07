const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smpt.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.SMPT_SENDER_EMAIL,
		pass: process.env.SMPT_SENDER_PASSWORD,
	},
});

const mailOptions = {
	from: {
		name: "Mandeep Patwa",
		address: process.env.SMPT_SENDER_EMAIL,
	},
	to: ["patwamandeep98@gmail.com"],
	subject: "Send Email using nodemailer",
	text: "Hello Text",
	html: "<b>Hello HTML</b>",
	attachments: [
		{
			filename: "test.pdf",
			path: path.join(__dirname, "test.pdf"),
			contentType: "application/pdf",
		},
	],
};

const sendMail = async (transporter, mailOptions) => {
	try {
		await transporter.sendMail(mailOptions);
		console.log("Email sent Successfully");
	} catch (error) {
		console.log(error);
	}
};

sendMail(transporter, mailOptions);

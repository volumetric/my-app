'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "apikey", // This is literally the string "apikey"
      pass: process.env.SENDGRID_API_KEY, // This is your SendGrid API Key
    },
  });

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Asimov AI Contact Form" <vinit@hellotars.com>',
      to: "vinit@hellotars.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true } as const;
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message } as const;
    }
    return { success: false, error: 'An unknown error occurred' } as const;
  }
}
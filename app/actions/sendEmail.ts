'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(
  formData: { name: string; email: string; message: string },
  attachment?: { filename: string; content: string; encoding: string; contentType: string }
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  try {
    const mailOptions: nodemailer.SendMailOptions = {
      from: '"Asimov AI Contact Form" <vinit@hellotars.com>',
      to: "vinit@hellotars.com",
      subject: attachment ? "New Image Generation" : "New Contact Form Submission",
      text: attachment
        ? `
          Prompt: ${formData.message}
          Model: ${formData.name}
        `
        : `
          Name: ${formData.name}
          Email: ${formData.email}
          Message: ${formData.message}
        `,
      html: attachment
        ? `
          <h1>New Image Generation</h1>
          <p><strong>Prompt:</strong> ${formData.message}</p>
          <p><strong>Model:</strong> ${formData.name}</p>
          <img src="cid:generatedImage" alt="Generated Image" style="max-width: 100%;">
        `
        : `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
    };

    if (attachment) {
      mailOptions.attachments = [{
        filename: attachment.filename,
        content: attachment.content,
        encoding: attachment.encoding,
        contentType: attachment.contentType,
        cid: 'generatedImage'  // Content ID for referencing in the HTML
      }];
    }

    const info = await transporter.sendMail(mailOptions);

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
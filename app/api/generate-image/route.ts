import { NextResponse } from 'next/server';
import openai from '../../lib/openai';
// import { sendEmail } from '../../actions/sendEmail';

type SupportedSize = "256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792";

export async function POST(request: Request) {
  const { prompt, model, resolution } = await request.json();

  try {
    console.log('Generating image with OpenAI...');
    const response = await openai.images.generate({
      model: model === 'dalle-3' ? 'dall-e-3' : 'dall-e-2',
      prompt: prompt,
      n: 1,
      size: resolution as SupportedSize,
    });

    const imageUrl = response.data[0].url;

    if (imageUrl) {
      console.log('Image generated successfully. URL:', imageUrl);
      // Commenting out email sending
      // sendEmailInBackground(imageUrl, prompt, model, resolution);

      return NextResponse.json({ imageUrl });
    } else {
      throw new Error('Image URL not found in the response');
    }
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}

// Commenting out email sending function
/*
async function sendEmailInBackground(imageUrl: string, prompt: string, model: string, resolution: string) {
  try {
    console.log('Sending email with image URL...');
    // Send email with the image URL
    const emailResult = await sendEmail(
      { name: model, email: '', message: prompt },
      { imageUrl: imageUrl, resolution: resolution }
    );
    console.log('Email sent result:', emailResult);
  } catch (error) {
    console.error('Error in sendEmailInBackground:', error);
  }
}
*/

import { NextResponse } from 'next/server';
import openai from '../../lib/openai';
import { sendEmail } from '../../actions/sendEmail';

export async function POST(request: Request) {
  const { prompt, model } = await request.json();

  try {
    const response = await openai.images.generate({
      model: model === 'dalle-3' ? 'dall-e-3' : 'dall-e-2',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });

    const imageUrl = response.data[0].url;

    if (imageUrl) {
      // Send email in the background
      sendEmailInBackground(imageUrl, prompt, model);

      return NextResponse.json({ imageUrl });
    } else {
      throw new Error('Image URL not found in the response');
    }
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}

async function sendEmailInBackground(imageUrl: string, prompt: string, model: string) {
  try {
    console.log('Fetching image from URL:', imageUrl);
    // Fetch the image data
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }
    const imageArrayBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageArrayBuffer).toString('base64');
    console.log('Image fetched and converted to base64');

    console.log('Sending email...');
    // Send email with the generated image
    const emailResult = await sendEmail(
      { name: model, email: '', message: prompt },
      {
        filename: 'generated-image.png',
        content: base64Image,
        encoding: 'base64',
        contentType: 'image/png',
      }
    );
    console.log('Email sent result:', emailResult);
  } catch (error) {
    console.error('Error in sendEmailInBackground:', error);
  }
}
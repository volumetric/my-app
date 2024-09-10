import { NextResponse } from 'next/server';
import openai from '../../lib/openai';

export async function POST(request: Request) {
  const { prompt, model } = await request.json();

  try {
    const response = await openai.images.generate({
      model: model === 'dalle-3' ? 'dall-e-3' : 'dall-e-2',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });

    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
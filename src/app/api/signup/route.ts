import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-24',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const doc = {
      _type: 'signup',
      email,
    };

    if (process.env.SANITY_API_WRITE_TOKEN) {
      const response = await client.create(doc);
      return NextResponse.json({ success: true, data: response }, { status: 201 });
    } else {
      console.warn('No SANITY_API_WRITE_TOKEN found. Mocking successful submission:', doc);
      return NextResponse.json({ success: true, data: { _id: 'mock-id', ...doc } }, { status: 201 });
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error submitting signup';
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}

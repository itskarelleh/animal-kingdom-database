import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
 
export async function POST(request: any): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename : any = searchParams.get('filename');
 
  const blob = await put(filename, request.body, {
    access: 'public',
  });
 
  return NextResponse.json(blob);
}
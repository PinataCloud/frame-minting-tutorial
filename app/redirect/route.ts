import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse){
  try {
   return NextResponse.redirect('https://www.pinata.cloud/blog/how-to-build-a-farcaster-frame-that-mints-nfts', { status: 302 }) 
  } catch (error) {
   console.log(error) 
    return NextResponse.json({ error: error })
  }
}

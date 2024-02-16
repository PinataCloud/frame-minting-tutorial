import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const buttonId = body.untrustedData.buttonIndex;
  if (buttonId === 1) {
    try {
      return NextResponse.redirect(
        "https://www.pinata.cloud/blog/how-to-build-a-farcaster-frame-that-mints-nfts",
        { status: 302 },
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error });
    }
  } else {
    try {
      return NextResponse.redirect("https://youtu.be/5VVOMolm-TA", {
        status: 302,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error });
    }
  }
}

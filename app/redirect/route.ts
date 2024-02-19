import { NextRequest, NextResponse } from "next/server";
import { PinataFDK } from "pinata-fdk";

const fdk = new PinataFDK({
  pinata_jwt: process.env.PINATA_JWT as string,
  pinata_gateway: process.env.GATEWAY_URL as string,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const buttonId = body.untrustedData.buttonIndex;
  const { isValid, message } = await fdk.validateFrameMessage(body);
  if (buttonId === 1) {
    try {
      if (isValid) {
        await fdk.sendAnalytics("frame-mint-tutorial-blog", body);
      }
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
      if (isValid) {
        await fdk.sendAnalytics("frame-mint-tutorial-video", body);
      }
      return NextResponse.redirect("https://youtu.be/5VVOMolm-TA", {
        status: 302,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error });
    }
  }
}

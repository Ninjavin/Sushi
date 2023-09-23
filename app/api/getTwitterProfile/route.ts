import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const username = req.nextUrl.searchParams.get("username") as string;
    // const username = req.query.username as string;
    const twitterApiUrl = `https://api.twitter.com/1.1/users/show.json?screen_name=${username}`;

    const response = await axios.get(twitterApiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const userData = response.data;
    return NextResponse.json(userData);
  } catch (error) {
    console.log(error);
    // NextResponse.status(500).json({
    //   error: "Error fetching Twitter profile in the API!",
    // });
  }
}

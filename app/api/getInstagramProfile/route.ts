import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const username = req.nextUrl.searchParams.get("username") as string;
    // const username = req.query.username as string;
    const instagramApiUrl = `https://instagram-api-20231.p.rapidapi.com/api/get_user_id/${username}`;

    const response = await axios.get(instagramApiUrl, {
      headers: {
        "X-RapidAPI-Key": `${process.env.X_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": `${process.env.X_RAPIDAPI_HOST}`,
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

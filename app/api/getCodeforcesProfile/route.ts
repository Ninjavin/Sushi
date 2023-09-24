import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const username = req.nextUrl.searchParams.get("username") as string;
    // const username = req.query.username as string;
    const codeforcesApiUrl = `https://codeforces.com/api/user.info?handles=${username}`;

    const response = await axios.get(codeforcesApiUrl);

    const userData = response.data;
    return NextResponse.json(userData);
  } catch (error) {
    console.log(error);
    // NextResponse.status(500).json({
    //   error: "Error fetching Twitter profile in the API!",
    // });
  }
}

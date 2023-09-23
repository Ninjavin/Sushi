import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("logging req query : ");
    const username = req.nextUrl.searchParams.get("username") as string;
    // const username = req.query.username as string;
    const linkedinApiUrl = `https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details`;

    const linkedinRequestData = {
      profile_id: username,
      profile_type: "personal",
      contact_info: false,
      recommendations: false,
      related_profiles: false,
    };

    const response = await axios.post(linkedinApiUrl, linkedinRequestData, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": `${process.env.X_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": `${process.env.X_RAPIDAPI_HOST_LINKEDIN}`,
      },
    });
    console.log("LINKED IN ");
    console.log(response);
    const userData = response.data;
    return NextResponse.json(userData);
  } catch (error) {
    console.log(error);
    // NextResponse.status(500).json({
    //   error: "Error fetching Twitter profile in the API!",
    // });
  }
}

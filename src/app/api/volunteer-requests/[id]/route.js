import connectToDB from "@/lib/db";
import VolunteerRequest from "@/models/VolunteerRequest";
import { requireAuth } from "@/lib/auth";

export async function GET(request, { params }) {
  try {
    await requireAuth(); // Only authenticated admins can view requests
    
    await connectToDB();
    const request = await VolunteerRequest.findById(params.id);
    
    if (!request) {
      return new Response(
        JSON.stringify({ message: "Volunteer request not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    return new Response(JSON.stringify(request), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ message: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


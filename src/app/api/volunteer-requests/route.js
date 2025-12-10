import connectToDB from "@/lib/db";
import VolunteerRequest from "@/models/VolunteerRequest";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    await requireAuth(); // Only authenticated admins can view requests
    
    await connectToDB();
    const requests = await VolunteerRequest.find().sort({ createdAt: -1 });
    
    return new Response(JSON.stringify(requests), {
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

export async function POST(req) {
  try {
    await connectToDB();
    const { fullName, email, phone, preferredField, message } = await req.json();
    
    if (!fullName || !email || !phone || !preferredField || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const volunteerRequest = await VolunteerRequest.create({
      fullName,
      email,
      phone,
      preferredField,
      message,
    });
    
    return new Response(JSON.stringify(volunteerRequest), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


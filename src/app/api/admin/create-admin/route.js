import connectToDB from "@/lib/db";
import Admin from "@/models/Admin";

// This is a one-time setup route to create the first admin
// In production, you should remove this or protect it with additional security
export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    
    if (!username || !password) {
      return new Response(
        JSON.stringify({ message: "Username and password required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return new Response(
        JSON.stringify({ message: "Admin with this username already exists" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const admin = await Admin.create({ username, password });
    
    return new Response(
      JSON.stringify({ message: "Admin created successfully", admin: { id: admin._id, username: admin.username } }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('Create admin error:', err);
    return new Response(
      JSON.stringify({ message: err.message || "Internal server error" }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


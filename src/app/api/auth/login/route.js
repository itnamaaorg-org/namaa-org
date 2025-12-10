import connectToDB from "@/lib/db";
import Admin from "@/models/Admin";
import { createSession } from "@/lib/auth";

export async function POST(req) {
  try {
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
    
    // Check for local testing admin first (development only)
    const localAdminUsername = process.env.LOCAL_ADMIN_USERNAME || 'admin';
    const localAdminPassword = process.env.LOCAL_ADMIN_PASSWORD || 'admin123';
    
    if (username === localAdminUsername && password === localAdminPassword) {
      // Create a session with a special local admin ID
      await createSession('local_admin');
      
      return new Response(
        JSON.stringify({ 
          message: "Login successful", 
          admin: { id: 'local_admin', username: localAdminUsername } 
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // If not local admin, check database
    await connectToDB();
    const admin = await Admin.findOne({ username });
    
    if (!admin) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const isPasswordValid = await admin.comparePassword(password);
    
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    await createSession(admin._id.toString());
    
    return new Response(
      JSON.stringify({ message: "Login successful", admin: { id: admin._id, username: admin.username } }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('Login error:', err);
    return new Response(
      JSON.stringify({ message: err.message || "Internal server error" }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


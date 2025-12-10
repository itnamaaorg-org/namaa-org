import connectToDB from "@/lib/db";
import Admin from "@/models/Admin";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    
    if (!session) {
      return new Response(
        JSON.stringify({ authenticated: false }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Check if it's the local admin
    if (session === 'local_admin') {
      const localAdminUsername = process.env.LOCAL_ADMIN_USERNAME || 'admin';
      return new Response(
        JSON.stringify({ 
          authenticated: true, 
          admin: { id: 'local_admin', username: localAdminUsername } 
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Check database for regular admin
    await connectToDB();
    const admin = await Admin.findById(session).select('-password');
    
    if (!admin) {
      return new Response(
        JSON.stringify({ authenticated: false }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ authenticated: true, admin: { id: admin._id, username: admin.username } }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ authenticated: false, error: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


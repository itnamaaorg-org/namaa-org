import { getSession } from "@/lib/auth";
import { db } from "@/lib/firestore";
import { doc, getDoc } from "firebase/firestore";

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
          admin: { id: 'local_admin', email: localAdminUsername, role: 'admin' } 
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const userRef = doc(db, "users", session);
    const snapshot = await getDoc(userRef);
    
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ authenticated: false }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const user = snapshot.data();
    
    return new Response(
      JSON.stringify({ authenticated: true, admin: { id: snapshot.id, email: user.email, role: user.role } }),
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

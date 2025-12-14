import { createSession } from "@/lib/auth";
import { db } from "@/lib/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Check for local testing admin first (development only)
    const localAdminUsername = process.env.LOCAL_ADMIN_USERNAME || 'admin@example.com';
    const localAdminPassword = process.env.LOCAL_ADMIN_PASSWORD || 'admin123';
    
    if (email === localAdminUsername && password === localAdminPassword) {
      // Create a session with a special local admin ID
      await createSession('local_admin');
      
      return new Response(
      JSON.stringify({ 
        message: "Login successful", 
          admin: { id: 'local_admin', email: localAdminUsername, role: 'admin' } 
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const usersRef = collection(db, "users");
    const userQuery = query(usersRef, where("email", "==", email.toLowerCase()));
    const snapshot = await getDocs(userQuery);
    if (snapshot.empty) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const doc = snapshot.docs[0];
    const user = doc.data();
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    await createSession(doc.id);
    
    return new Response(
      JSON.stringify({ message: "Login successful", admin: { id: doc.id, email: user.email, role: user.role } }),
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

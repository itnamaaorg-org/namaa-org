import { db } from "@/lib/firestore";
import { collection, query, where, getDocs, addDoc, Timestamp } from "firebase/firestore";
import bcrypt from "bcryptjs";

// This is a one-time setup route to create the first admin
// In production, you should remove this or protect it with additional security
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
    
    const usersRef = collection(db, "users");
    const existing = await getDocs(query(usersRef, where("email", "==", email.toLowerCase())));
    if (!existing.empty) {
      return new Response(
        JSON.stringify({ message: "Admin with this email already exists" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    const now = Timestamp.now();
    const docRef = await addDoc(usersRef, {
      email: email.toLowerCase(),
      password: passwordHash,
      role: "admin",
      createdAt: now,
      updatedAt: now,
    });
    
    return new Response(
      JSON.stringify({ message: "Admin created successfully", admin: { id: docRef.id, email } }),
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

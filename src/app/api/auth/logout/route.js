import { deleteSession } from "@/lib/auth";

export async function POST() {
  try {
    await deleteSession();
    
    return new Response(
      JSON.stringify({ message: "Logout successful" }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message || "Internal server error" }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}


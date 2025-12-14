import { db } from "@/lib/firestore";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

export async function POST(request, { params }) {
  try {
    const docRef = doc(db, "news", params.id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    await updateDoc(docRef, { likes: increment(1) });
    return new Response(
      JSON.stringify({ message: "Liked" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

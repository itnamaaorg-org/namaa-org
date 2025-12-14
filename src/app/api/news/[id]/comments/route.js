import { db } from "@/lib/firestore";
import { collection, addDoc, getDocs, orderBy, query, Timestamp, doc, updateDoc, increment } from "firebase/firestore";

export async function GET(request, { params }) {
  try {
    const commentsQuery = query(
      collection(db, "news", params.id, "comments"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(commentsQuery);
    const comments = snapshot.docs.map((d) => {
      const data = d.data();
      return {
        _id: d.id,
        ...data,
        createdAt: data.createdAt?.toDate?.().toISOString() || null,
      };
    });

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request, { params }) {
  try {
    const { author, text } = await request.json();
    if (!text || !text.trim()) {
      return new Response(
        JSON.stringify({ message: "Comment text is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const now = Timestamp.now();
    const comment = {
      author: author?.trim() || "مستخدم",
      text: text.trim(),
      createdAt: now,
    };

    await addDoc(collection(db, "news", params.id, "comments"), comment);
    // increment comments count on parent doc
    await updateDoc(doc(db, "news", params.id), { commentsCount: increment(1) });

    return new Response(JSON.stringify({ message: "Comment added" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

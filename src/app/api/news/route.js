import { db } from "@/lib/firestore";
import { collection, getDocs, addDoc, orderBy, query, Timestamp } from "firebase/firestore";

export async function GET() {
  // Public endpoint - no auth required
  try {
    const newsQuery = query(collection(db, "news"), orderBy("createdOn", "desc"));
    const snapshot = await getDocs(newsQuery);
    const news = snapshot.docs.map((doc) => {
      const data = doc.data();
      const toIso = (value) =>
        value && typeof value.toDate === "function"
          ? value.toDate().toISOString()
          : value || null;

      return {
        _id: doc.id,
        ...data,
        createdOn: toIso(data.createdOn),
        createdAt: toIso(data.createdAt),
        updatedAt: toIso(data.updatedAt),
        likes: data.likes || 0,
        commentsCount: data.commentsCount || 0,
      };
    });
    return new Response(JSON.stringify(news), {
      status: 200,
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

export async function POST(req) {
  try {
    // Require authentication for creating news
    const { requireAuth } = await import("@/lib/auth");
    try {
      await requireAuth();
    } catch (authErr) {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const { title, description, createdOn, image } = await req.json();
    
    if (!title || !description) {
      return new Response(
        JSON.stringify({ message: "Title and description required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const newsData = {
      title,
      description,
      createdOn: createdOn ? Timestamp.fromDate(new Date(createdOn)) : Timestamp.now(),
      ...(image ? { image } : {}),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };
    
    const docRef = await addDoc(collection(db, "news"), newsData);
    const created = { _id: docRef.id, ...newsData };
    
    return new Response(JSON.stringify(created), {
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

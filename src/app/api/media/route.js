import { db } from "@/lib/firestore";
import { collection, getDocs, addDoc, orderBy, query, Timestamp } from "firebase/firestore";

export async function GET() {
  // Public endpoint - no auth required
  try {
    const mediaQuery = query(collection(db, "media"), orderBy("createdOn", "desc"));
    const snapshot = await getDocs(mediaQuery);
    const media = snapshot.docs.map((doc) => {
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
      };
    });
    return new Response(JSON.stringify(media), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(req) {
  try {
    // Require authentication for creating media items
    const { requireAuth } = await import("@/lib/auth");
    try {
      await requireAuth();
    } catch (authErr) {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { title, description, link, createdOn, image } = await req.json();

    if (!title || !description || !link) {
      return new Response(
        JSON.stringify({ message: "Title, description, and link required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const mediaData = {
      title,
      description,
      link,
      createdOn: createdOn ? Timestamp.fromDate(new Date(createdOn)) : Timestamp.now(),
      ...(image ? { image } : {}),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, "media"), mediaData);
    const created = { _id: docRef.id, ...mediaData };

    return new Response(JSON.stringify(created), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

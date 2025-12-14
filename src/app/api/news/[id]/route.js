import { db } from "@/lib/firestore";
import { doc, getDoc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";

export async function GET(request, { params }) {
  try {
    const docRef = doc(db, "news", params.id);
    const snapshot = await getDoc(docRef);
    
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const data = snapshot.data();
    const toIso = (value) =>
      value && typeof value.toDate === "function"
        ? value.toDate().toISOString()
        : value || null;
    const news = {
      _id: snapshot.id,
      ...data,
      createdOn: toIso(data.createdOn),
      createdAt: toIso(data.createdAt),
      updatedAt: toIso(data.updatedAt),
      likes: data.likes || 0,
      commentsCount: data.commentsCount || 0,
    };
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

export async function PUT(request, { params }) {
  try {
    // Require authentication for updating news
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
    
    const { title, description, createdOn, image } = await request.json();
    
    if (!title || !description) {
      return new Response(
        JSON.stringify({ message: "Title and description required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const docRef = doc(db, "news", params.id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const updateData = {
      title,
      description,
      ...(createdOn !== undefined ? { createdOn: createdOn ? Timestamp.fromDate(new Date(createdOn)) : null } : {}),
      ...(image !== undefined ? { image } : {}),
      updatedAt: Timestamp.now(),
    };
    
    await updateDoc(docRef, updateData);
    const updatedSnap = await getDoc(docRef);
    const updatedData = updatedSnap.data();
    const toIso = (value) =>
      value && typeof value.toDate === "function"
        ? value.toDate().toISOString()
        : value || null;
    const news = {
      _id: updatedSnap.id,
      ...updatedData,
      createdOn: toIso(updatedData.createdOn),
      createdAt: toIso(updatedData.createdAt),
      updatedAt: toIso(updatedData.updatedAt),
    };
    
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

export async function DELETE(request, { params }) {
  try {
    // Require authentication for deleting news
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
    
    const docRef = doc(db, "news", params.id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    await deleteDoc(docRef);

    return new Response(
      JSON.stringify({ message: "News deleted successfully" }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
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

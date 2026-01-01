import { db } from "@/lib/firestore";
import { doc, getDoc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";

export async function GET(request, { params }) {
  try {
    const docRef = doc(db, "media", params.id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "Media item not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = snapshot.data();
    const toIso = (value) =>
      value && typeof value.toDate === "function"
        ? value.toDate().toISOString()
        : value || null;
    const media = {
      _id: snapshot.id,
      ...data,
      createdOn: toIso(data.createdOn),
      createdAt: toIso(data.createdAt),
      updatedAt: toIso(data.updatedAt),
    };
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

export async function PUT(request, { params }) {
  try {
    // Require authentication for updating media items
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

    const { title, description, link, createdOn, image } = await request.json();

    if (!title || !description || !link) {
      return new Response(
        JSON.stringify({ message: "Title, description, and link required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const docRef = doc(db, "media", params.id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "Media item not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const updateData = {
      title,
      description,
      link,
      ...(createdOn !== undefined
        ? { createdOn: createdOn ? Timestamp.fromDate(new Date(createdOn)) : null }
        : {}),
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
    const media = {
      _id: updatedSnap.id,
      ...updatedData,
      createdOn: toIso(updatedData.createdOn),
      createdAt: toIso(updatedData.createdAt),
      updatedAt: toIso(updatedData.updatedAt),
    };

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

export async function DELETE(request, { params }) {
  try {
    // Require authentication for deleting media items
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

    const docRef = doc(db, "media", params.id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "Media item not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await deleteDoc(docRef);

    return new Response(
      JSON.stringify({ message: "Media item deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
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

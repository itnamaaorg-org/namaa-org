import { db } from "@/lib/firestore";
import { doc, getDoc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { requireAuth } from "@/lib/auth";

const toIso = (value) =>
  value && typeof value.toDate === "function"
    ? value.toDate().toISOString()
    : value || null;

const jsonRes = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function GET(request, context) {
  const { id } = await context.params;
  try {
    const snapshot = await getDoc(doc(db, "news", id));
    if (!snapshot.exists()) return jsonRes({ message: "News not found" }, 404);

    const data = snapshot.data();
    return jsonRes({
      _id: snapshot.id,
      ...data,
      createdOn: toIso(data.createdOn),
      createdAt: toIso(data.createdAt),
      updatedAt: toIso(data.updatedAt),
      likes: data.likes || 0,
      commentsCount: data.commentsCount || 0,
    });
  } catch (err) {
    return jsonRes({ message: err.message }, 500);
  }
}

export async function PUT(request, context) {
  const { id } = await context.params;
  try {
    try {
      await requireAuth();
    } catch {
      return jsonRes({ message: "Unauthorized" }, 401);
    }

    const { title, description, createdOn, image } = await request.json();
    if (!title || !description)
      return jsonRes({ message: "Title and description required" }, 400);

    const docRef = doc(db, "news", id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return jsonRes({ message: "News not found" }, 404);

    await updateDoc(docRef, {
      title,
      description,
      ...(createdOn !== undefined
        ? { createdOn: createdOn ? Timestamp.fromDate(new Date(createdOn)) : null }
        : {}),
      ...(image !== undefined ? { image } : {}),
      updatedAt: Timestamp.now(),
    });

    const updatedSnap = await getDoc(docRef);
    const updatedData = updatedSnap.data();
    return jsonRes({
      _id: updatedSnap.id,
      ...updatedData,
      createdOn: toIso(updatedData.createdOn),
      createdAt: toIso(updatedData.createdAt),
      updatedAt: toIso(updatedData.updatedAt),
    });
  } catch (err) {
    return jsonRes({ message: err.message }, 500);
  }
}

export async function DELETE(request, context) {
  const { id } = await context.params;
  try {
    try {
      await requireAuth();
    } catch {
      return jsonRes({ message: "Unauthorized" }, 401);
    }

    const docRef = doc(db, "news", id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return jsonRes({ message: "News not found" }, 404);

    await deleteDoc(docRef);
    return jsonRes({ message: "News deleted successfully" });
  } catch (err) {
    return jsonRes({ message: err.message }, 500);
  }
}

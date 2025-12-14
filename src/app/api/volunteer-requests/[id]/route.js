import { db } from "@/lib/firestore";
import { doc, getDoc, deleteDoc, updateDoc, Timestamp } from "firebase/firestore";
import { requireAuth } from "@/lib/auth";

export async function GET(request, { params }) {
  try {
    await requireAuth(); // Only authenticated admins can view requests
    
    const docRef = doc(db, "volunteerRequests", params.id);
    const snapshot = await getDoc(docRef);
    
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "Volunteer request not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const data = snapshot.data();
    const toIso = (v) => (v && typeof v.toDate === 'function' ? v.toDate().toISOString() : v || null);
    const payload = {
      _id: snapshot.id,
      ...data,
      createdAt: toIso(data.createdAt),
      updatedAt: toIso(data.updatedAt),
      birthDate: toIso(data.birthDate),
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
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
    await requireAuth(); // Only authenticated admins can delete requests
    
    const docRef = doc(db, "volunteerRequests", params.id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "Volunteer request not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    await deleteDoc(docRef);
    
    return new Response(
      JSON.stringify({ message: "Request deleted successfully" }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ message: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await requireAuth(); // Only authenticated admins can update status

    const { status } = await request.json();
    const allowed = ['pending', 'reviewed', 'contacted'];
    if (!allowed.includes(status)) {
      return new Response(
        JSON.stringify({ message: "Invalid status" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const docRef = doc(db, "volunteerRequests", params.id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ message: "Volunteer request not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    await updateDoc(docRef, { status, updatedAt: Timestamp.now() });
    return new Response(
      JSON.stringify({ message: "Status updated", status }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

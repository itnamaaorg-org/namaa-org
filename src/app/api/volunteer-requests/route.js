import { db } from "@/lib/firestore";
import { collection, addDoc, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    await requireAuth(); // Only authenticated admins can view requests
    
    const requestsQuery = query(collection(db, "volunteerRequests"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(requestsQuery);
    const requests = snapshot.docs.map((doc) => {
      const data = doc.data();
      const toIso = (v) => (v && typeof v.toDate === 'function' ? v.toDate().toISOString() : v || null);
      return {
        _id: doc.id,
        ...data,
        createdAt: toIso(data.createdAt),
        updatedAt: toIso(data.updatedAt),
        birthDate: toIso(data.birthDate),
      };
    });
    
    return new Response(JSON.stringify(requests), {
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

export async function POST(req) {
  try {
    const {
      fullName,
      birthDate,
      city,
      address,
      phone,
      email,
      gender,
      education,
      isStudying,
      university,
      major,
      isWorking,
      jobTitle,
      desiredTeam,
      notes,
    } = await req.json();
    
    if (!fullName || !birthDate || !city || !address || !phone || !email || !gender || !education || !desiredTeam) {
      return new Response(
        JSON.stringify({ message: "Required fields are missing" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const now = Timestamp.now();
    const volunteerRequest = {
      fullName,
      birthDate,
      city,
      address,
      phone,
      email,
      gender,
      education,
      isStudying: !!isStudying,
      university: university || '',
      major: major || '',
      isWorking: !!isWorking,
      jobTitle: jobTitle || '',
      desiredTeam,
      notes: notes || '',
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };
    
    const docRef = await addDoc(collection(db, "volunteerRequests"), volunteerRequest);
    
    return new Response(JSON.stringify({ _id: docRef.id, ...volunteerRequest, createdAt: now.toDate().toISOString(), updatedAt: now.toDate().toISOString() }), {
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

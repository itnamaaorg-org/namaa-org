import connectToDB from "@/lib/db";
import News from "@/models/News";

export async function GET(request, { params }) {
  try {
    await connectToDB();
    const news = await News.findById(params.id);
    
    if (!news) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
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
    
    await connectToDB();
    const { title, description, createdOn } = await request.json();
    
    if (!title || !description) {
      return new Response(
        JSON.stringify({ message: "Title and description required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const news = await News.findByIdAndUpdate(
      params.id,
      { title, description, createdOn },
      { new: true, runValidators: true }
    );
    
    if (!news) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
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
    
    await connectToDB();
    const news = await News.findByIdAndDelete(params.id);
    
    if (!news) {
      return new Response(
        JSON.stringify({ message: "News not found" }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
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


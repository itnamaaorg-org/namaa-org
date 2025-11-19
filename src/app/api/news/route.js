import connectToDB from "@/lib/db"
import News from "@/models/News";

export async function GET() {
  try {
    await connectToDB();
    const news = await News.find().sort({ createdOn: -1 });
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
    await connectToDB();
    const { title, description, createdOn } = await req.json();
    
    if (!title || !description) {
      return new Response(
        JSON.stringify({ message: "Title and description required" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const newsData = { title, description, createdOn };
    
    const news = await News.create(newsData);
    console.log(news);
    
    return new Response(JSON.stringify(news), {
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

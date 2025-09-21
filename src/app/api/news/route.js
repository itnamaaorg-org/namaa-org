import connectToDB from "@/lib/db"
import News from "@/models/News";

export async function GET() {
  await connectToDB();
  const news = await News.find().sort({ createdOn: -1 });
  return new Response(JSON.stringify(news), { status: 200 });
}

export async function POST(req) {
  try {
    await connectToDB();
    const { title, description, createdOn } = await req.json();
    
    if (!title || !description) {
      return new Response(
        JSON.stringify({ message: "Title and description required" }),
        { status: 400 }
      );
    }
    
    const newsData = { title, description, createdOn };
    
    const news = await News.create(newsData);
    return new Response(JSON.stringify(news), { status: 201 });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      { status: 500 }
    );
  }
}

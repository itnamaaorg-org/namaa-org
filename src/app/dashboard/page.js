"use client";
import { useState } from "react";
import { uploadImageToFirebase, MAX_IMAGE_SIZE_BYTES } from "@/lib/uploadImage";

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdOn, setCreatedOn] = useState(""); // OªO_USO_
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      setImagePreview("");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setMessage("⚠️ حجم الصورة يجب ألا يتجاوز 5MB.");
      setImageFile(null);
      setImagePreview("");
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setMessage("");
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    
    try {
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadImageToFirebase(imageFile, "news");
      }

      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          createdOn: createdOn ? new Date(createdOn) : undefined,
          image: imageUrl,
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessage("ƒo. O¦U. OOOU?Oc OU,OrO\"Oñ O\"U+OªOO-!");
        setTitle("");
        setDescription("");
        setCreatedOn("");
        setImageFile(null);
        setImagePreview("");
      } else {
        setMessage(`ƒsÿ‹,? ${data.message}`);
      }
    } catch (err) {
      setMessage("ƒsÿ‹,? O-O_O® OrOúOœ. O-OU^U, U.OñOc OœOrOñU%.");
    }
  };
  
  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">OOOU?Oc OrO\"Oñ OªO_USO_</h1>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-semibold">OU,O1U+U^OU+</label>
          <input
            type="text"
            placeholder="OUŸO¦O\" OU,O1U+U^OU+ UØU+O..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 font-semibold">OU,U^OæU?</label>
          <textarea
            placeholder="OUŸO¦O\" OU,U^OæU? UØU+O..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block mb-2 font-semibold">O¦OOñUSOr U^U^U,O¦ OU,OU+O'OO­ (OOrO¦USOOñUS)</label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={createdOn}
            onChange={(e) => setCreatedOn(e.target.value)}
          />
        </div>

      <div>
        <label className="block mb-2 font-semibold">OU,O1U+U^OU+ OO_OOñ (USOO¦)</label>
        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="mt-3">
            <img src={imagePreview} alt="News preview" className="h-24 w-24 object-cover rounded-md border" />
          </div>
        )}
      </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          OOOU?Oc OU,OrO\"Oñ
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 p-3 rounded-md ${message.startsWith("ƒo.") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

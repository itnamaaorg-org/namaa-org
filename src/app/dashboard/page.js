"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdOn, setCreatedOn] = useState(""); // جديد
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          createdOn: createdOn ? new Date(createdOn) : undefined
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessage("✅ تم إضافة الخبر بنجاح!");
        setTitle("");
        setDescription("");
        setCreatedOn("");
      } else {
        setMessage(`⚠️ ${data.message}`);
      }
    } catch (err) {
      setMessage("⚠️ حدث خطأ. حاول مرة أخرى.");
    }
  };
  
  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">إضافة خبر جديد</h1>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-semibold">العنوان</label>
          <input
            type="text"
            placeholder="اكتب العنوان هنا..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 font-semibold">الوصف</label>
          <textarea
            placeholder="اكتب الوصف هنا..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block mb-2 font-semibold">تاريخ ووقت الإنشاء (اختياري)</label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={createdOn}
            onChange={(e) => setCreatedOn(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          إضافة الخبر
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 p-3 rounded-md ${message.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

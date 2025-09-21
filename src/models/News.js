import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;

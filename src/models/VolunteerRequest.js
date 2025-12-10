import mongoose from "mongoose";

const VolunteerRequestSchema = new mongoose.Schema(
  {
    fullName: { 
      type: String, 
      required: true,
      trim: true
    },
    email: { 
      type: String, 
      required: true,
      trim: true,
      lowercase: true
    },
    phone: { 
      type: String, 
      required: true,
      trim: true
    },
    preferredField: { 
      type: String, 
      required: true,
      enum: [
        'فريق تمكين',
        'فريق الأيتام (رفقاء نماء)',
        'فريق المبادرات التطوعية',
        'الفريق الطبي',
        'الفريق الإعلامي'
      ]
    },
    message: { 
      type: String, 
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'contacted'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

const VolunteerRequest = mongoose.models.VolunteerRequest || mongoose.model("VolunteerRequest", VolunteerRequestSchema);
export default VolunteerRequest;


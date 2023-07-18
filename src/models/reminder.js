import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    dueTime: {
      type: Date,
      required: true
    },
    createdDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    lastModifiedDate: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  {
    versionKey: false,
    collection: 'reminders'
  }
);

const Reminder = mongoose.model('Reminder', reminderSchema);
export default Reminder;


/**
 * 
{
    "id": 1,
    "title": "Buy groceries",
    "description": "Buy milk, eggs, and bread",
    "DueTime": "2023-06-20T09:30"
    "createdDate": "2021-06-20T09:30",
    "lastModifiedDate": "2021-06-20T09:30",
  }
 * 
 */
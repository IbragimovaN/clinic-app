import mongoose from "mongoose";

const requestsSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
  },
});

export default mongoose.model("Requests", requestsSchema);

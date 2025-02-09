import { Schema,model } from "mongoose";

const callSchema = new Schema({
  email: { type: String, required: true },
  number: { type: Number, required: true },
  message: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Call = model("Call", callSchema);


export default Call;

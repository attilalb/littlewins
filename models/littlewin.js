import { Schema, model, models } from "mongoose";

const LittleWinSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  story: {
    type: String,
    required: [true, "Story is required"],
  },
  tags: {
    type: [String],
    required: [true, "Tags are required"],
  },
});

const LittleWin = models.LittleWin || model("LittleWin", LittleWinSchema);

export default LittleWin;

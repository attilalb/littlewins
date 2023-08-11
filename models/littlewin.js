import { Schema, model, models } from "mongoose";

const LittleWinSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  story: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

const LittleWin = models.LittleWin || model("LittleWin", LittleWinSchema);

export default LittleWin;

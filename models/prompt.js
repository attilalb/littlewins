import { Schema, model, models } from "mongoose";

const TagSchema = new Schema({ tag: String });

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tags: {
    type: [TagSchema],
    required: [true, "Prompt tags are required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;

import { connectToDB } from "@utils/database";
import LittleWin from "@models/littlewin";

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const post = await LittleWin.findById(params.id).populate("creator");
    if (!post) return new Response("Story not found.", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts.", { status: 500 });
  }
};

// PATCH
export const PATCH = async (req, { params }) => {
  const { story, tags } = await req.json();

  try {
    await connectToDB();
    const existingStory = await LittleWin.findById(params.id);

    if (!existingStory)
      return new Response("Prompt not found.", { status: 404 });

    existingStory.story = story;
    existingStory.tags = tags;

    await existingStory.save();
    return new Response(JSON.stringify(existingStory), { status: 200 });
  } catch (error) {
    return new Response("Failed to update story.", { status: 500 });
  }
};

// DELETE

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await LittleWin.findByIdAndRemove(params.id);
    return new Response("Story deleted.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete story.", { status: 500 });
  }
};

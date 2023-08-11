import { connectToDB } from "@utils/database";
import LittleWin from "@models/littlewin";

export const POST = async (req) => {
  const { userId, story, tags } = await req.json();

  try {
    await connectToDB();
    const newWin = new LittleWin({
      creator: userId,
      story,
      tags,
    });

    await newWin.save();

    return new Response(JSON.stringify(newWin), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create new post.", { status: 500 });
  }
};

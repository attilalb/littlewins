import { connectToDB } from "@utils/database";
import LittleWin from "@models/littlewin";

export const GET = async (req) => {
  try {
    await connectToDB();

    const posts = await LittleWin.find().populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts.", { status: 500 });
  }
};

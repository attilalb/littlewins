"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    story: "",
    tags: [],
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    console.log(
      "Request Payload:",
      JSON.stringify({
        prompt: post.prompt,
        userId: session?.user.id,
        tags: post.tags,
      })
    );

    try {
      const res = await fetch("/api/little-win/new", {
        method: "POST",
        body: JSON.stringify({
          story: post.story,
          userId: session?.user.id,
          tags: post.tags,
        }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Share"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;

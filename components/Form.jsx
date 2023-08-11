import { useState } from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [tagInput, setTagInput] = useState(""); // State for tag input
  const [tags, setTags] = useState(post.tags || []); // Array of tags

  const addTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
      setPost({ ...post, tags: [...tags] });
      console.log(post);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="green_gradient">{type} your win</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your little win:
          </span>
          <textarea
            value={post.story}
            onChange={(e) => setPost({ ...post, story: e.target.value })}
            placeholder="What are you proud of today?"
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags
          </span>
          <div className="flex  gap-2 items-center">
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add your tags here"
              className="form_input"
            />
            <button
              type="button"
              onClick={addTag}
              className="px-2 py-1.5 text-sm bg-green-500 h-12 rounded-md text-white text-xs"
            >
              Add Tag
            </button>
          </div>
          <div className="mt-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="tag bg-green-500 text-white rounded-md px-3 py-2 mr-2"
              >
                #{tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2"
                >
                  &#10005;
                </button>
              </span>
            ))}
          </div>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-green-500 rounded-full text-white"
          >
            {submitting ? `${type}` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

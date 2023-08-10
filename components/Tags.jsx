"use client";

import { useState } from "react";

const Tags = ({ post }) => {
  const [currentTag, setCurrentTag] = useState("LittleWin");
  const [tags, setTags] = useState(["LittleWin"]);

  const handleChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  function removeTag(index) {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        className="form_input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={currentTag}
        placeholder="Add a tag to your little win"
      />
      <div className="flex justify-start items-center">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="px-4 py-2 rounded-md bg-green-200 flex justify-between items-center gap-3 "
          >
            #{tag}
            <div
              className="text-sm cursor-pointer"
              onClick={() => removeTag(index)}
            >
              &times;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;

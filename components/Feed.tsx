"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/little-win");
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tags) ||
        regex.test(item.story)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <div>
          <h3 className="text-xl font-semibold text-center mt-6">
            <span className="font-light text-xl">Results for: </span>
            {searchText}
            {searchText && (
              <>
                <span className="font-light text-xl">
                  {" "}
                  ({searchedResults.length})
                </span>
                <br />
                <h4 className="text-lg font-light text-center mt-4">
                  Clear search
                  <button
                    type="button"
                    onClick={() => setSearchText("")}
                    className="ml-2"
                  >
                    &#10005;
                  </button>
                </h4>
              </>
            )}
          </h3>
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        </div>
      ) : (
        <PromptCardList data={allPosts} handleTagClick={() => {}} />
      )}
    </section>
  );
};

export default Feed;

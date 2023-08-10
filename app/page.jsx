import Feed from "@components/Feed";
import Link from "next/link";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share your{" "}
        <span className="text-green-500 text-center">little wins.</span>
      </h1>
      <p className="desc mt-6 text-center w-1/2">
        littlewins is an open-source platform to share whatever you are proud of
        with the world.
      </p>

      <Link
        href="/create-prompt"
        className="rounded-full border mt-6 border-green-500 bg-green-500 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-green-500 text-center text-sm font-inter flex items-center justify-center"
      >
        Start Sharing
      </Link>
      <Feed />
    </section>
  );
};

export default Home;

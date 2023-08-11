import Feed from "@components/Feed";
import Link from "next/link";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share your <br className="max-md:hidden" />
        <span className="green_gradient text-center">little wins</span> with the
        world.
      </h1>
      <p className="desc text-center">
        <span className="green_gradient ">littlewins</span> is an open-source
        platform where you can share anything you're proud of without being
        accused of bragging.
        <br />
        Got that job? Finished a project? Made some cookies?
      </p>
      <Link href="/create-prompt" className="green_btn mt-6">
        Share now
      </Link>

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

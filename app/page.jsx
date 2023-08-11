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
        <span className="green_gradient">littlewins</span> is an open-source
        platform where you can share anything you're proud of without being
        accused of bragging.
        <br />
        Got that job? Finished a project? Made some cookies?
      </p>
      <Link href="/create-prompt" className="green_btn mt-6">
        Share now
      </Link>

      <Feed />
    </section>
  );
};

export default Home;

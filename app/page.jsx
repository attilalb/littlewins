import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptshare is an open-source platform where you can create and share
        your favorite AI prompts and discover what others shared.
      </p>

      <Feed />
    </section>
  );
};

export default Home;

import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Participate In
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Your Digital Community</span>
      </h1>
      <p className="desc text-center">
        From breaking news and entertainment to sports and politics, Tweeter is an open-source platform for you to share your thoughts.
      </p>

      <Feed />
    </section>
  )
}

export default Home
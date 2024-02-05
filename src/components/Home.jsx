import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = "http://localhost:8000/blogs";
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <div className="dark-light-text">{error}</div>}
      {isPending && <div className="dark-light-text">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;

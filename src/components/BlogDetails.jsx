import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/blogs/" + id;
  const { data: blog, isPending, error } = useFetch(url);
  const history = useHistory();

  function handleDelete() {
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  }

  return (
    <div className="blog-details">
      {isPending && !error && <div className="dark-light-text">Loading...</div>}
      {error && <div className="dark-light-text">{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="dark-light-text">written by {blog.author}</p>
          <div className="dark-light-text">{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

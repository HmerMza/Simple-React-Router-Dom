import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PageBlogDetalle = () => {
  const params = useParams();
  const { id } = params;
  const { datos } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const { title, body } = datos;

  return (
    <div className="cart">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <Link to="/blog">Atras</Link>
        </div>
      </div>
    </div>
  );
};

export default PageBlogDetalle;

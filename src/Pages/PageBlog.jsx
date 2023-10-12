import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PageBlog = () => {
  const { datos } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    let dato = e.target.value;
    if (dato) {
      setSearchParams({ filter: dato });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h2>PageBlog</h2>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {datos
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((dato) => (
            <Link
              to={`/blog/${dato.id}`}
              key={dato.id}
              className="list-group-item"
            >
              {dato.id} - {dato.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default PageBlog;

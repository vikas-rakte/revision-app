import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link to="/todos" style={{ marginRight: "1rem" }}>
        Todos
      </Link>
      <Link to="/posts" style={{ marginRight: "1rem" }}>
        Posts
      </Link>
      <Link to="/users" style={{ marginRight: "1rem" }}>
        Users
      </Link>
      <Link to="/counter" style={{ marginRight: "1rem" }}>
        Counter
      </Link>
    </nav>
  );
};

export default Navbar;

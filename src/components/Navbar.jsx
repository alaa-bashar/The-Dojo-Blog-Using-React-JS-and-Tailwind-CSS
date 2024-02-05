import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  function handleTheme() {
    const htmlEle = document.documentElement;
    htmlEle.classList.toggle("dark");
  }

  return (
    <div>
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <MdOutlineDarkMode
            size={20}
            className="dark-light-text"
            onClick={handleTheme}
          />
          <Link
            to="/"
            className="hover:text-[var(--primary-color)] dark-light-text"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="bg-[var(--primary-color)] text-white rounded-md"
          >
            New Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

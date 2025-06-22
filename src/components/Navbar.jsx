import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="text-white max-w-7xl my-0 mx-auto p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/all"} className="flex items-center gap-2">
          <img src="/src/assets/react.svg" alt="logo" className="h-8 w-8" />
          <div className="flex flex-col leading-none font-semibold text-sm md:text-lg text-black">
            <span>My</span>
            <span>Tasks</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-[#2d2d45] px-3 py-2 rounded-full w-[400px] max-w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white flex-grow"
          />
          <button className="cursor-pointer">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <button className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-full font-semibold cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
import { FaSun } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="shadow-md h-[60px]">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link to="/" className="font-bold text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        QueryVault
      </Link>
      <nav className="flex gap-5">
        <button className="text-2xl"><FaSun /></button>
        <Link to="/profile" className="text-2xl">
          <CgProfile />
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;

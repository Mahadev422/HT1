import { FaSun } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="">
    <div className="container justify-center mx-auto flex items-center py-4 px-6">
      <h1 className="font-bold text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Query
        <br />
        Vault
      </h1>
      
    </div>
  </header>
);

export default Header;

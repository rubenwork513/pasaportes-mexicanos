import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex h-16 md:h-20 w-full bg-[#540000] items-center px-6 md:px-12 justify-center ">
      <div className="flex items-center justify-center  w-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-20 md:w-24"
          />
        </Link>
      </div>
    </nav>
  )
}

import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex flex-col md:flex-row justify-between items-center py-6 shadow-lg px-4 ">

        <div className="">
        <Logo></Logo>
        </div>

        <ul className="flex gap-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donateNow"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Dontation Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/details/:id"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Donate Now
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>


      </nav>
    </div>
  );
};

export default Navbar;

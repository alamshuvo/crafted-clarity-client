import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, loading, signOutproile } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const item = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", item);
  }, [theme]);
  const handleSignOut = () => {
    signOutproile();
    Swal.fire({
      icon: "success",
      title: "LogOut",
      text: "User LogOut Sucessfully!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  const hadleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#B3C8CF] p-2 hover:bg-[#BED7DC] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#B3C8CF] p-2 hover:bg-[#BED7DC] hover:text-[#F1EEDC] ml-3 rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/allArtAndCrafts"}
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#B3C8CF] p-2 hover:bg-[#BED7DC] hover:text-[#F1EEDC] ml-3 rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/addCraftItem"}
        >
          Add Craft item
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#B3C8CF] p-2 hover:bg-[#BED7DC] hover:text-[#F1EEDC] ml-3 rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/myArtAndCraftList"}
        >
          My Art And Craft List
        </NavLink>
      </li>
    </>
  );
  return loading ? (
    <div className="w-16 mx-auto text-red flex justify-center items-center h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
  ) : (
    <div className="navbar bg-[#BED7DC] dark:bg-[#F1EEDC]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-5 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            {user ? (
              <div className="md:flex  ">
                <Link>
                  {" "}
                  <button
                    onClick={handleSignOut}
                    className="btn mr-3  hover:outline-1 "
                  >
                    LogOut
                  </button>
                </Link>
              </div>
            ) : (
              <div className="md:flex  ">
                <Link to={"/login"}>
                  {" "}
                  <button className="btn hover:outline-1 ">Login</button>
                </Link>
                <Link to={"/register"}>
                  {" "}
                  <button className="btn hover:outline-1 ">Register</button>
                </Link>
              </div>
            )}
          </ul>
        </div>
        <div>
          <Link to={"/"}>
            <button className="btn btn-ghost md:text-xl border bg-[#B3C8CF] p-2 hover:bg-[#BED7DC] hover:text-[#F1EEDC] rounded-md ">
              Crafted-Clarity
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="md:flex  navbar-end">
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-12 rounded-full ">
              
                <a id="clickable">  <img
                  referrerPolicy="no-referrer"
                  className="w-full"
                  alt="user"
                  src={user?.photoURL || <p>user</p>}
                /></a>
                <Tooltip anchorSelect="#clickable" clickable>
                <div className="flex flex-col p-4 gap-2">
                <button>{user?.displayName || "User Name"}</button>
                  <Link>
                {" "}
                <button
                  onClick={handleSignOut}
                  className="btn mr-3  hover:outline-1 "
                >
                  LogOut
                </button>
              </Link>
                </div>
                </Tooltip>
              </div>
            </div>
            <div className="md:flex hidden ">
           
            </div>
          </div>
        ) : (
          <div className="md:flex hidden  ">
            <Link to={"/login"}>
              {" "}
              <button className="btn mr-3  hover:outline-1 ">Login</button>
            </Link>
            <Link to={"/register"}>
              {" "}
              <button className="btn mr-3  hover:outline-1 ">Register</button>
            </Link>
          </div>
        )}
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={hadleTheme}
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

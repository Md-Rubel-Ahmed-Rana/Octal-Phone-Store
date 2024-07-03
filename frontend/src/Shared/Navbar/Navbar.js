import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthProvider";
import logo from "../../images/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then(() => {
      swal("Oops", "You have logged out", "warning");
      navigate("/");
    });
  };
  const { data: currentUser = {} } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const res = await fetch(
        `https://octal-phone-server.vercel.app/users/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="lg:flex justify-between items-center">
      {/* <div className="flex items-center justify-center gap-3">
        <Link to="/">
          <img className="w-14 h-14 rounded-full" src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <h2 className="text-2xl font-bold">Octal Phone Store</h2>
        </Link>
      </div>
      <div className="text-center">
        <ul className="lg:flex lg:gap-4 grid gap-2">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/blogs">Blogs</Link>{" "}
          </li>
          {user?.uid ? (
            <>
              <li>
                {" "}
                <Link to="/dashboard">Dashboard</Link>{" "}
              </li>
              <li onClick={handleLogout}>
                {" "}
                <Link>Logout</Link>{" "}
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/register">Register</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/login">Login</Link>{" "}
              </li>
            </>
          )}
        </ul>
      </div> */}
      <div className="navbar bg-base-200 lg:bg-base-100 py-4">
        <div className="navbar-start w-full flex gap-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow navbar-end"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {}

              {user?.uid ? (
                <>
                  {currentUser?.role === "admin" ? (
                    <>
                      <li>
                        <Link to="/dashboard/allbuyers">All Buyers</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/allsellers">All Sellers</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      {currentUser?.role === "seller" ? (
                        <>
                          <li>
                            <Link to="/dashboard/myproducts">My Products</Link>
                          </li>
                          <li>
                            <Link to="/dashboard/addProduct">Add Product</Link>
                          </li>
                          <li>
                            <Link to="/dashboard/mybuyers">My Buyers</Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to="/dashboard/myorders">My Orders</Link>
                          </li>
                          <li>
                            <Link to="/dashboard/mywishlist">My Wishlist</Link>
                          </li>
                        </>
                      )}
                    </>
                  )}
                  <li onClick={handleLogout}>
                    <Link>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-3 w-full">
            <Link className="hidden lg:block" to="/">
              <img className="w-14 h-14 rounded-full" src={logo} alt="logo" />
            </Link>
            <Link to="/">Octal Phone Store</Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-2 flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li onClick={handleLogout}>
                  <Link>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

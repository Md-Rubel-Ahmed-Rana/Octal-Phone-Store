import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import Loader from '../Shared/Loader/Loader';
import Navbar from '../Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    // check weather use has token or not
    const token = localStorage.getItem("accessToken");
    // if not token, logout this user
    if (!token) {
        logout()
            .then(() => {
                navigate("/")
            })
    }

    const { data: currenUser = [], isLoading } = useQuery({
        queryKey: ["user", user],
        queryFn: async () => {
            const res = await fetch(`https://octal-phone-server.vercel.app/users/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
                <Navbar />
                <div className="drawer drawer-mobile  px-20 py-10">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <h3 className="lg:text-4xl text-white text-2xl mb-4 text-center">Welcome to Dashboard</h3>
                        <Outlet />
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80">
                            {
                                currenUser.role === "admin" ? <>
                                    <li> <Link to="/dashboard/allbuyers">All Buyers</Link> </li>
                                    <li > <Link to="/dashboard/allsellers">All Sellers</Link> </li>
                                </> : <>
                                    {
                                        currenUser.role === "seller" ? <>
                                                <li > <Link to="/dashboard/myproducts">My Products</Link> </li>
                                                <li > <Link to="/dashboard/addProduct">Add Product</Link> </li>
                                                <li > <Link to="/dashboard/mybuyers">My Buyers</Link> </li>
                                        </> : <>
                                                    <li > <Link to="/dashboard/myorders">My Orders</Link> </li>
                                                    <li > <Link to="/dashboard/mywishlist">My Wishlist</Link> </li>
                                        </>
                                    }
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
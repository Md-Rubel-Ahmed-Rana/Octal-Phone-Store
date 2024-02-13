import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from "../../images/logo.png"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        .then(() => {
            swal("Oops", "You have logged out", "warning");
            navigate("/")
        })
    }
    // 
    return (
        <div className='lg:flex bg-[#F2f2f2] justify-between items-center lg:px-20 py-2 '>
            <div className='flex items-center justify-center gap-3'>
                <Link to="/">
                    <img className='w-14 h-14 rounded-full' src={logo} alt="logo" />
                </Link>
                <Link to="/"> 
                    <h2 className='text-2xl font-bold'>Octal Phone Store</h2> 
                 </Link>
            </div>
            <div className='text-center'>
                <ul className='lg:flex lg:gap-4 grid gap-2'>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/blogs">Blogs</Link> </li>
                    {
                        user?.uid ? <>
                            <li> <Link to="/dashboard">Dashboard</Link> </li>
                            <li onClick={handleLogout}> <Link>Logout</Link> </li>
                        </> : <>
                                <li> <Link to="/register">Register</Link> </li>
                                <li> <Link to="/login">Login</Link> </li>
                        </>
                    }
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
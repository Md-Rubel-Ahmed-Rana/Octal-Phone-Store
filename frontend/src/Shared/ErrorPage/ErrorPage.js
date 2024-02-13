import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../images/not-found.png"

const ErrorPage = () => {
    return (
        <div className='bg-black h-screen py-10'>
            <div className='w-96 mx-auto bg-gray-800  rounded-md p-10 text-center text-white'>
                <img src={notFound} alt="" />
                <p className='mt-3 leading-6'>Oops, The page you are looking is not found. Please try with correct route/path</p>
                <Link to="/"><button className="bg-blue-700 px-10 mt-3 py-2 rounded">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Advertisment = () => {
    const [advertises, setAdvertises] = useState([])

    useEffect(() => {
        axios.get("https://octal-phone-server.vercel.app/advertises")
            .then((data) => setAdvertises(data.data))
    }, []);

    return (
        <div className="py-20">
            <h2 className="text-center text-4xl font-bold">Super Discount by Advertising!!!</h2>
            <h1 className='text-4xl text-center'>30% Discount</h1>
            {
                advertises.length === 0 ? "" :
                    <div className='grid lg:grid-cols-3 gap-10 p-10 rounded-md'>
                        {
                            advertises.map((advertise) => <div key={advertise._id} className='relative w-full animate__animated animate__fadeInUp bg-[#F2f2f2] p-10 rounded-lg'>
                                <img className='rounded w-full h-60' src={advertise.image} alt="" />
                                <h3 className='absolute top-28 lg:rotate-45 text-4xl bg-green-500 p-2 text-black'>{advertise.name}</h3>
                                <p className="text-center text-xl mt-3">30% Discount for next 5 days.</p>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default Advertisment;
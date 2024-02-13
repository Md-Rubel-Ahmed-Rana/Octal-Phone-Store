import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyWishlist = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://octal-phone-server.vercel.app/wishlist`)
            .then((data) => setProducts(data.data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                {
                    products.length === 0 ? <h3 className='text-3xl'>You have no Wishlists</h3> : <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.resalePrice}</td>
                                    <th>
                                        <Link to={`/dashboard/payment/${product._id}`}> <button className="btn btn-primary btn-xs">Pay</button></Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default MyWishlist;
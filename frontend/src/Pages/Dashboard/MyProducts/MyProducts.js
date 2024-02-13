import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["products", user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(`https://octal-phone-server.vercel.app/myproducts/${user?.email}`)
                const data = await res.json();
                return data
            }
        }
    })

    const myProducts = products.filter((product) => product.seller_email === user?.email);

    const handleAdvertise = (advertise) => {
        const advertiseData = {
            name: advertise.name,
            image: advertise.img,
            id: advertise._id,
            price: advertise.resalePrice,
            seller_email: advertise.seller_email
        }
        fetch("https://octal-phone-server.vercel.app/seller/advertise", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(advertiseData)
        })
            .then((res) => res.json())
            .then(() => {
                swal("Done!", "Advertised successfully", "success");
            })
            .catch((err) => console.log(err))
    }

    const handleDelete = (product) => {
        axios.delete(`https://octal-phone-server.vercel.app/myProducts/delete/${product._id}`)
            .then(() => {
                axios.delete(`https://octal-phone-server.vercel.app/advertise/delete/${product._id}`)
                    .then(() => {
                        swal("Oops!", "Product deleted successfully", "success");
                        refetch()
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className='grid  lg:grid-cols-2 gap-2'>
                {
                    myProducts.length === 0 ? <h2 className="text-2xl">You have not added any product.</h2> : myProducts.map((product, index) => <div className='rounded-md w-full shadow-lg bg-slate-200 m-1 p-4 gap-3' key={index}>
                        <div className='mb-4'>
                            <img className='h-48 rounded w-full' src={product.img} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl mb-2">{product?.name}</h2>
                            <p className='mb-2'>Resale Price: {product?.resalePrice}</p>
                            <div className='flex justify-between'>
                                <button className='bg-blue-500 p-2 rounded text-white'>Available</button>
                                <button onClick={() => handleAdvertise(product)} className='bg-green-500 p-2 rounded text-white'>Advertise</button>
                                <button onClick={() => handleDelete(product)} className='bg-red-500 p-2 rounded text-white'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts;
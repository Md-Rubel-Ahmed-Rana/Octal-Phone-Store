import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext)
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        axios.get("https://octal-phone-server.vercel.app/buyers")
            .then((data) => setBuyers(data.data))
    }, [])

    const myBuyers = buyers.filter((buyer) => buyer.seller_email === user?.email);;

    return (
        <div className="overflow-x-auto">
            {
                myBuyers.length === 0 ? <h4 className="text-2xl">Your product is not purchesed yet.</h4> :
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, index) => <tr key={buyer._id}>
                                    <th>{index + 1}</th>
                                    <td>{buyer.buyerName}</td>
                                    <td>{buyer.phoneName}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.phoneNumber}</td>
                                    <td>{buyer.location}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>

            }

        </div>
    );
};

export default MyBuyers;
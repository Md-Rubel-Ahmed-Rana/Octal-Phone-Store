import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);

    // load currently logged in user
    const { data: currenUser = [] } = useQuery({
        queryKey: ["users", user],
        queryFn: async () => {
            const res = await fetch(`https://octal-phone-server.vercel.app/users/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    // send the currentUser role to get specific data
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ["users", currenUser],
        queryFn: async () => {
            const res = await fetch(`https://octal-phone-server.vercel.app/users?role=${currenUser?.role}`)
            const data = await res.json()
            return data;
        }
    })

    // select only buyers form all users
    const buyers = users.filter((user) => user.role === "buyer");


    // delete user from database
    const handleDeleteUser = (email) => {
        fetch(`https://octal-phone-server.vercel.app/users/${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(() => {
                swal("Done", "Buyer deleted successfully", "success");
                refetch()
            })
            .catch((err) => console.log(err))
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, index) => <tr key={buyer._id}>
                            <th>{index + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>{buyer.role}</td>
                            <td><button onClick={() => handleDeleteUser(buyer.email)} className='bg-red-500 px-2 py-1 text-white rounded'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;
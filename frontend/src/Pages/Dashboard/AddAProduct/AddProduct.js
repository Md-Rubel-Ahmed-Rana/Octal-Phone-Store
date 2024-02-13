import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const imageHostKey = process.env.REACT_APP_imgbbKey
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image)

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    let categoryId = "";
                    if (data.category==="samsung") {
                        categoryId = "1"
                    } else if (data.category === "oppo") {
                        categoryId = "2"
                    } else if (data.category === "iphone") {
                        categoryId = "3"
                    } else if (data.category === "huawei") {
                        categoryId = "4"
                    } else {
                        return swal("Sorry", "Your brand is not allowed. Try with iPhone or Samsung or Oppo or Huawei", "warning");
                    }

                    const name = data.name
                    const img = imgData.data.url
                    const location = data.location
                    const originalPrice = data.originalPrice
                    const resalePrice = data.resalePrice
                    const usedTime = data.usedTime
                    const postedTime = data.postedTime
                    const sellerName = data.sellerName
                    const seller_email = data.sellerEmail
                    const condition = data.condition


                    const product = { name, category_id: categoryId, img, location, originalPrice, resalePrice, usedTime, postedTime, seller: sellerName, seller_email, isVerified: false, condition }

                    fetch("https://octal-phone-server.vercel.app/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then((res) => res.json())
                        .then(() => {
                            swal("Great!", "Product added successfully", "success");
                            navigate("/dashboard/myproducts")
                        })
                        .catch((err) => swal("Opps!", `${err.message}`, "error"))
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid lg:grid-cols-2 gap-2">
                <div>
                    <select className="p-2 w-full border" type="text" {...register("category", {required: true})} id="category">
                        <option disabled>Select One</option>
                        <option value="samsung">samsung</option>
                        <option value="iphone">Iphone</option>
                        <option value="oppo">Oppo</option>
                        <option value="huawei">Huawei</option>
                    </select>
                </div>
                <div>
                    <input placeholder='Product Name (Samsung 10)' className="p-2 w-full border" type="text" {...register("name", { required: true })} />
                </div>
                <div>
                    <input className="p-2 w-full  border" type="file" {...register("image", { required: true })} />
                </div>
                <div>
                    <input placeholder='Location' className="p-2 w-full border" type="text" {...register("location", { required: true })} />
                </div>
                <div>
                    <input placeholder='Original Price' className="p-2 w-full border" type="text" {...register("originalPrice", { required: true })} />
                </div>
                <div>
                    <input placeholder='Resale Price' className="p-2 w-full border" type="text" {...register("resalePrice", { required: true })} />
                </div>
                <div>
                    <input placeholder='Used Time' className="p-2 w-full border" type="text" {...register("usedTime", { required: true })} />
                </div>
                <div>
                    <input placeholder='Today Date (dd-mm-yyyy)' className="p-2 w-full border" type="text" {...register("postedTime", { required: true })} />
                </div>
                <div>
                    <input defaultValue={user?.displayName} placeholder='Seller Name' className="p-2 w-full border" type="text" {...register("sellerName", { required: true })} />
                </div>
                <div>
                    <input defaultValue={user?.email} placeholder='Seller Email' className="p-2 w-full border" type="text" {...register("sellerEmail", { required: true })} readOnly />
                </div>
                <div>
                    <input placeholder='Condition {excelent or good or fair}' className="p-2 w-full border" type="text" {...register("condition", { required: true })} />
                </div>
            </div>
            <div className="w-full mx-auto mt-3 lg:mb-5 mb-20 block text-center">
                <input className="bg-blue-800 w-full px-5 py-2 rounded text-white cursor-pointer" type="submit" value="Add Product" />
            </div>
        </form>
    );
};

export default AddProduct;
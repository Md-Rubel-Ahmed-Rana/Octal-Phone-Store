import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";


const Login = () => {
    const { loginUser, setUser, loginWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleToken = useToken()

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setUser(user)

                // generate a secret token;
                handleToken(user.email)
                swal("Great!", "Logged in successfully", "success");
                navigate(from, { replace: true })
            })
            .catch((err) => swal("Opps", `${err.message}`, "error"))
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    role: "buyer"
                }
                fetch("https://octal-phone-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then((res) => res.json())
                    .then(() => {
                        handleToken(user.email)
                        swal("Great!", "Logged in successfully", "success")
                        navigate(from, { replace: true })
                    })
                    .catch((err) => swal("Opps", `${err.message}`, "success"))

            })
            .catch((err) => swal("Opps", `${err.message}`, "success"))
    }

    return (
        <div className="lg:py-10">
            <div className="lg:w-1/2 bg-[#F2f2f2] mx-auto text-center lg:px-20 py-10 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input className="p-2 lg:w-2/3 w-full border rounded" type="email" {...register("email", {required: true})} placeholder="Enter you email" />
                    </div>
                    <div>
                        <input className="p-2 lg:w-2/3 w-full border rounded" type="password" {...register("password", { required: true })} placeholder="Enter you password" />
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto mt-3">
                        <button className="btn btn-primary w-full px-5 py-2 rounded" type="submit">Login</button>
                    </div>
                </form>
                <button onClick={handleLoginWithGoogle} className="text-white mt-4 btn btn-primary py-2 rounded lg:w-2/3 w-full mx-auto px-10">Login with Google</button>
            </div>
        </div>
    );
}

export default Login
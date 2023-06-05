import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/actionCreator";

function Login() {
    const [loginForm, setloginForm] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function loginSubmit(e) {
        e.preventDefault();
        try {
            await dispatch(login(loginForm));

            let user = localStorage.username;

            if (user) {
                toast.success("logged in!", {
                    pauseOnFocusLoss: false,
                    pauseOnHover: false,
                    autoClose: 500,
                });

                // navigate("/");
            }
        } catch (err) {
            toast.error(err.message, {
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                autoClose: 500,
            });
        }
    }

    function inputHandler(e) {
        const filledLogin = { ...loginForm };
        const { value, name } = e.target;
        filledLogin[name] = value;

        setloginForm(filledLogin);
    }

    return (
        <div className="container">
            <div className="container m-8 flex justify-center ">
                <ToastContainer />
                <form
                    onSubmit={loginSubmit}
                    className="p-8 border-2 shadow-sm border-black w-1/3"
                >
                    <h1 className="text-3xl my-4">Masuk</h1>
                    <label className="">Email</label>
                    <div className="container my-2 flex w-full">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="text"
                            name="email"
                            value={loginForm.email}
                            onChange={inputHandler}
                        />
                    </div>
                    <label className="">Password</label>
                    <div className="container my-2 flex w-full ">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="password"
                            name="password"
                            value={loginForm.password}
                            onChange={inputHandler}
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="text-sm">
                            <Link to="/register">
                                <span class="font-medium text-blue-600 hover:text-blue-500">Don't have an account?
                                    Register</span>
                            </Link>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="my-4 py-2 px-4 rounded border-2 hover:bg-red-600 ease-linear duration-100 hover:text-white"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
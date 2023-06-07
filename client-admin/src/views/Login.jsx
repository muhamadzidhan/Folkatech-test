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

            let user = localStorage.email;

            if (user) {
                toast.success("logged in!", {
                    pauseOnFocusLoss: false,
                    pauseOnHover: false,
                    autoClose: 500,
                });

                navigate("/");
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
                    className="p-8 border-2 shadow-sm border-black w-1/3" style={{ width: '568px', height: '509px', left: '473px', top: '157px' }}
                >
                    <h1 className="text-3xl my-4" style={{
                        width: '87px',
                        height: '25px',
                        left: '507px',
                        top: '199px',
                        fontFamily: 'Gotham',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '26px',
                        lineHeight: '25px',
                        letterSpacing: '0.04em',
                        color: '#730C07',
                    }}>Masuk</h1>
                    <label className="">Email</label>
                    <div className="container my-2 flex w-full" box-shadow="0px 1px 4px rgba(0, 0, 0, 0.25)" border-radius="7px" style={{
                        width: '500px',
                        height: '59px',
                        left: '507px',
                        top: '260px',
                        background: '#FFFFFF'
                    }}>
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={loginForm.email}
                            onChange={inputHandler}
                        />
                    </div>
                    <label className="">Password</label>
                    <div className="container my-2 flex w-full" box-shadow="0px 1px 4px rgba(0, 0, 0, 0.25)" border-radius="7px" style={{
                        width: '500px',
                        height: '59px',
                        left: '507px',
                        top: '344px',
                        background: '#FFFFFF',
                    }}>
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginForm.password}
                            onChange={inputHandler}
                        />
                    </div>
                    <button
                        type="submit"
                        className="my-4 py-2 px-4 rounded border-2 hover:bg-red-600 ease-linear duration-100 hover:text-white" style={{ backgroundColor: '#EB3F36', width: '500px', height: '59px' }}
                    >
                        Masuk
                    </button>
                    <div className="flex items-center justify-between" style={{
                        width: '290px',
                        height: '15px',
                        left: '609px',
                        top: '605px',
                        fontFamily: 'Gotham',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '15px',
                        color: '#7C7C7C'}}>
                    <div className="text-sm">
                        <Link to="/register">
                            <span className="font-medium text-blue-600 hover:text-blue-500">Belum punya akun?
                                Daftar Sekarang</span>
                        </Link>
                    </div>
            </div>
        </form>
            </div >
        </div >
    )
}

export default Login
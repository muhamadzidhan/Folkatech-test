import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { postUser } from "../store/actions/actionCreator";

function Register() {
    const [registerForm, setRegisterForm] = useState({
        namaDepan: "",
        namaBelakang: "",
        email: "",
        nomorTelepon: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function inputHandler(e) {
        const inputForm = {
            ...registerForm,
        };

        const { name, value } = e.target;

        inputForm[name] = value;

        setRegisterForm(inputForm);
    }

    async function registerSubmit(e) {
        const loading = toast.loading("Registering...");
        try {
            e.preventDefault();
            let message = await dispatch(postUser(registerForm));

            toast.update(loading, {
                render: message,
                type: "success",
                autoClose: 0,
                isLoading: false,
            });
            navigate("/login");
        } catch (err) {
            toast.update(loading, {
                render: err.message,
                autoClose: 0,
                type: "error",
                isLoading: false,
            });
        }
    }

    return (
        <div className="container">
            <div className="container m-8 flex justify-center ">
                <form
                    onSubmit={registerSubmit}
                    className="p-8 border-2 shadow-sm border-black w-1/3"
                    box-shadow="0px 1px 12px rgba(0, 0, 0, 0.25)"
                    border-radius="10px"
                    style={{
                        width: '568px',
                        height: '600px',
                        left: '472px',
                        top: '130px',

                        background: '#FFFFFF',
                    }}
                >
                    <h1 className="text-3xl my-4" style={{
                        width: '229px',
                        height: '25px',
                        left: '506px',
                        top: '172px',

                        fontFamily: 'Gotham',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '26px',
                        lineHeight: '25px',
                        /* identical to box height */

                        textAlign: 'center',
                        letterSpacing: '0.04em',

                        color: '#730C07',
                    }}>Daftar Sekarang</h1>
                    <label className="">Nama Depan</label>
                    <div className="container my-2 flex w-full">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="text"
                            name="namaDepan"
                            value={registerForm.namaDepan}
                            onChange={inputHandler}
                        />
                    </div>
                    <label className="">Nama Belakang</label>
                    <div className="container my-2 flex w-full">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="text"
                            name="namaBelakang"
                            value={registerForm.namaBelakang}
                            onChange={inputHandler}
                        />
                    </div>
                    <label className="">Email</label>
                    <div className="container my-2 flex w-full">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="text"
                            name="email"
                            value={registerForm.email}
                            onChange={inputHandler}
                        />
                    </div>
                    <label className="">Nomor Telepon</label>
                    <div className="container my-2 flex w-full ">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="text"
                            name="nomorTelepon"
                            value={registerForm.nomorTelepon}
                            onChange={inputHandler}
                        />
                    </div>
                    <label className="">Password</label>
                    <div className="container my-2 flex w-full ">
                        <input
                            className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
                            type="password"
                            name="password"
                            value={registerForm.password}
                            onChange={inputHandler}
                        />
                    </div>
                    <button
                        type="submit"
                        className="my-4 py-2 px-4 rounded border-2 hover:bg-red-600 ease-linear duration-100 hover:text-white"
                    >
                        Register
                    </button>
                    <div class="flex items-center justify-between">
                        <div class="text-sm">
                            <Link to="/login">
                                <span class="font-medium text-blue-600 hover:text-blue-500">Have an account? Login</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Register

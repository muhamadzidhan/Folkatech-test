import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./Navbar"
import { fetchProducts } from "../store/actions/actionCreator"

export default function Layout() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts()).catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex flex-col h-full w-screen justify-center gap-8">
            <NavBar />
            <Outlet />
        </div>
    );
}
import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import NavBar from "../components/Navbar";
import { Layout,ProductSection } from "../components"
import Landing from "../views/Landing";
import Detail from "../views/Detail";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Landing />,
                children: [
                    {
                        path: "",
                        element: <ProductSection />,
                    },
                ],
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/product/:id",
                element: <Detail />,
            },
        ],
    },
])


export default router
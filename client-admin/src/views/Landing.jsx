import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Carousel, Spinner } from "../components"

export default function Landing() {
    const { productsLoading } = useSelector((state) => state.products);
    return (
        <div className="container flex flex-col items-center h-full w-full justify-center">
            {/* <Carousel /> */}
            {productsLoading ? <Spinner /> : <Carousel />}
            {productsLoading ? <Spinner /> : <Outlet />}
        </div>
    );
}
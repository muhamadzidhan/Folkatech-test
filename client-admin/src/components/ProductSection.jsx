import { useSelector } from "react-redux";
import Card from "./Card";

export default function ProductSection() {
    const { products } = useSelector((state) => state.products);

    return (
        <div className="container grid grid-cols-4 gap-6 p-8">
            {products.map((el) => {
                return <Card product={el} key={el.id} />;
            })}
        </div>
    );
}
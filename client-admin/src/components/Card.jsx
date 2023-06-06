import { Link } from "react-router-dom"
import currency from "../helpers/currency";


export default function Card({ product }) {
    const Rating = ({ value }) => {
        const maxRating = 5;
        const stars = [];

        for (let i = 1; i <= maxRating; i++) {
            if (i <= value) {
                stars.push(<span key={i} className="star filled">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9734;</span>);
            }
        }

        return (
            <div className="rating">
                {stars}
            </div>
        );
    };
    return (
        <Link
            to={`/product/${product?.id}`}
            className="hover:scale-105 hover:shadow-md duration-100 ease-out"
        >
            <div className="max-w-sm bg-[#fefefe] rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                    className="rounded-t-lg"
                    src={product?.imagesUrl}
                    alt={product?.title}
                />
                <div className="text-center" style={{ color: 'white' }}>{product?.namaProduct}</div>
                <div className="text-center" style={{ color: 'yellow' }}>
                    <Rating value={product.rating} />
                </div>
                <div className="text-center" style={{ color: 'white' }}>
                    <h1 className="">{currency(product?.harga)}</h1>
                </div>
                <div className="p-5">
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                        {product?.title}
                    </h5>
                </div>
            </div>
        </Link>
    );
}
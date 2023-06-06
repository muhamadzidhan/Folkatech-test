import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../store/actions/actionCreator";
import { Spinner } from "../components";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import currency from "../helpers/currency";
import { EffectCards, Navigation, Pagination } from "swiper"
import { Swal } from "sweetalert2/dist/sweetalert2"


export default function Detail() {
    let { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProduct(id)).catch((err) =>
            Swal.fire("Error", err.message, "error")
        );
    }, []);

    const { product, productLoading } = useSelector((state) => state.products);

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

    const Stock = ({ stockCount }) => {
        return (
            <div className="stock">
                <span className="stock-label">Stok:</span>
                <span className="stock-count">{stockCount}</span>
            </div>
        );
    };


    return (
        <>
            {productLoading ? (
                <Spinner />
            ) : (
                <div className="container">
                    <button
                        className="py-2 px-4 border-2 border-red-500 m-4 rounded-3xl hover:bg-red-500 hover:text-white hover:font-bold duration-100 hover:translate-x-[-1rem] active:translate-x-[-1rem]"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                    <div className="container flex flex-row">
                        <div className="container p-4  md:max-w-[50vw]">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                effect="cards"
                                modules={[Navigation, Pagination, EffectCards]}
                                pagination={{ clickable: true }}
                                navigation={{ clickable: true }}
                            >
                                <SwiperSlide key={product?.id}>
                                    <img src={product?.imagesUrl} alt={product?.title} />
                                </SwiperSlide>
                                {product?.Images?.map((el) => {
                                    return (
                                        <SwiperSlide key={el.id}>
                                            <img src={el.imgUrl} alt={el.name} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <div className="container flex flex-col justify-center p-6">
                            <h4 className="font-semibold text-2xl text-center">
                                {product?.title}
                            </h4>
                            <div className="container flex flex-col mx-16 my-8">
                                <h1 className="font-semibold text-2xl ">
                                    {product?.namaProduct}
                                </h1>
                                <div className="" style={{ color: 'yellow' }}>
                                    <Rating value={product.rating} />
                                </div>
                                <div className="container flex w-full" style={{ color: 'red' }} >
                                    <h4 className="">{currency(product?.harga)}</h4>
                                </div>
                                <p className="">
                                    {product?.description}
                                </p>
                                {/* <div className="container flex flex-col w-full mt-8 text-gray-800">
                                    <h4 className="text-lg">Author</h4>
                                    <strong className="text-xl">
                                        {product?.Author?.username}
                                    </strong>
                                </div> */}
                                {/* <div className="container flex flex-col w-full mt-8 text-gray-800">
                                    <h4 className="text-lg">Category</h4>
                                    <strong className="text-xl">{product?.Category?.name}</strong>
                                </div> */}

                            </div>
                        </div>
                    </div>
                    <div className="container flex flex-col mx-16 my-8 text-center">
                        <h4 className="text-gray-800 flex w-1/2 my-4 text-lg font-semibold text-center">
                            Description
                        </h4>
                        <p className="text-gray-800 flex w-1/2 my-2">
                            {product?.description}
                        </p>
                        <p className="text-gray-800 flex w-1/2 my-2">
                            {product?.spesifikasi}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
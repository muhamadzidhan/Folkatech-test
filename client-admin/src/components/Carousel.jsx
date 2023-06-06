import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Carousel({ product }) {
    const { products } = useSelector((state) => state.products);

    return (
        <div className="container flex items-center z-10 shadow-sm w-full">
            <Swiper
                slidesPerView={2}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
            >
                {products.map((el) => {
                    return (
                        <SwiperSlide key={el.id}>
                            <Link to={`/product/${el.id}`}>
                                <img src={el?.imagesUrl} alt={el?.title} />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
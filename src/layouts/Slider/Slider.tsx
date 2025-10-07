import "./Slider.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { products } from "../../api/products";
import { useState } from "react";

type paginationProps = {
  title: string
  bgImage?: string
}

function Pagination({ title, bgImage }: paginationProps) {

  const [homeProducts, setHomeProducts] = useState(products)

  console.log(homeProducts)

  return (
    <div className="pagination" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">

        <h2 className={`pagination__title ${bgImage ? 'pagination-title__bgimage' : ''}`}>{title}</h2>
        <div className="pagination-button-wrapper">
          <button className="pagination__see-all-button">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 23.582C6.07 23.582 1.25 18.762 1.25 12.832C1.25 6.90203 6.07 2.08203 12 2.08203C17.93 2.08203 22.75 6.90203 22.75 12.832C22.75 18.762 17.93 23.582 12 23.582ZM12 3.58203C6.9 3.58203 2.75 7.73203 2.75 12.832C2.75 17.932 6.9 22.082 12 22.082C17.1 22.082 21.25 17.932 21.25 12.832C21.25 7.73203 17.1 3.58203 12 3.58203Z"
                fill="#032340"
              />
              <path
                d="M15.5 13.582H9.5C9.09 13.582 8.75 13.242 8.75 12.832C8.75 12.422 9.09 12.082 9.5 12.082H15.5C15.91 12.082 16.25 12.422 16.25 12.832C16.25 13.242 15.91 13.582 15.5 13.582Z"
                fill="#032340"
              />
              <path
                d="M11.4975 16.5825C11.3075 16.5825 11.1175 16.5125 10.9675 16.3625L7.9675 13.3625C7.6775 13.0725 7.6775 12.5925 7.9675 12.3025L10.9675 9.30246C11.2575 9.01246 11.7375 9.01246 12.0275 9.30246C12.3175 9.59246 12.3175 10.0725 12.0275 10.3625L9.5575 12.8325L12.0275 15.3025C12.3175 15.5925 12.3175 16.0725 12.0275 16.3625C11.8775 16.5125 11.6875 16.5825 11.4975 16.5825Z"
                fill="#032340"
              />
            </svg>
            <span>مشاهده همه</span>
          </button>
        </div>

        <div className="pagination-product-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={170}
            loop={true}
            slidesPerView={3}
            navigation={{
              nextEl: ".pagination__arrow-left",
              prevEl: ".pagination__arrow-right",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            speed={500}
          >
            {
              homeProducts.map(product => (
                  <SwiperSlide>
                    <ProductItem
                      image={product.image}
                      title={product.title}
                      price={product.price}
                    />
                  </SwiperSlide>
              ))
            }
          </Swiper>
          <span className="pagination__arrow pagination__arrow-right">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M8.90998 20.6695C8.71998 20.6695 8.52998 20.5995 8.37998 20.4495C8.08998 20.1595 8.08998 19.6795 8.37998 19.3895L14.9 12.8695C15.38 12.3895 15.38 11.6095 14.9 11.1295L8.37998 4.60953C8.08998 4.31953 8.08998 3.83953 8.37998 3.54953C8.66998 3.25953 9.14998 3.25953 9.43998 3.54953L15.96 10.0695C16.47 10.5795 16.76 11.2695 16.76 11.9995C16.76 12.7295 16.48 13.4195 15.96 13.9295L9.43998 20.4495C9.28998 20.5895 9.09998 20.6695 8.90998 20.6695Z"
                fill="#292D32"
              />
            </svg>
          </span>
          <span className="pagination__arrow pagination__arrow-left">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z"
                fill="#292D32"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

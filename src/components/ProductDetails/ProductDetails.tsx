import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../api/products";
import { useCart } from "../../Contexts/CartContext";
import type { product } from "../../api/products";
import HeaderTop from "../HeaderTop/HeaderTop";
import Footer from "../../layouts/Footer/Footer";
import SiteOptions from "../SIteOptions/SiteOptions";
import ProductSharePopup from "./ProductSharePopUp/ProductSharePopUp";
import IsLike from "./IsLike/IsLike";
import ProductBuy from "./ProductBuy/ProductBuy";
import ProductColors from "./ProductColors/ProductColors";
import ProductSizes from "./ProductSizes/ProductSizes";
import ProductCommentsTab from "./ProductCommentsTab/ProductCommentsTab";

type ProductBuyProps = {
  product: product;
};

function ProductDetails() {
  const { addToCart } = useCart();

  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const { id } = useParams<{ id: string }>();

  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );

  if (!product) return <p>محصول پیدا نشد</p>;

  return (
    <>
      <HeaderTop />
      <div className="container">
        <div className="product-detailes-top">
          <div className="product-details-top-right">
            <div className="product-details-main-img">
              <img
                src={selectedImage}
                alt={product.title}
                className="product-details__selected-img"
              />
            </div>
            <div className="product-details-others-imges">
              {product?.images?.map((img, index) => (
                <div
                  className={`product-detailes-other-img ${
                    img === selectedImage ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.title} ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="product-details-top-left">
            <div className="product__rate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.0027 4.44098C12.2833 3.90922 13.0448 3.90922 13.3254 4.44097L15.549 8.65543C15.6572 8.86049 15.8544 9.00377 16.0828 9.0433L20.7781 9.8557C21.3706 9.95821 21.6059 10.6825 21.1869 11.1136L17.8658 14.5307C17.7042 14.697 17.6289 14.9288 17.6619 15.1583L18.3402 19.8749C18.4258 20.47 17.8096 20.9176 17.2701 20.6523L12.994 18.5497C12.7859 18.4474 12.5422 18.4474 12.3341 18.5497L8.05802 20.6523C7.51849 20.9176 6.90237 20.47 6.98795 19.8749L7.66623 15.1583C7.69924 14.9288 7.62391 14.697 7.46232 14.5307L4.14126 11.1136C3.72223 10.6825 3.95756 9.95821 4.54999 9.8557L9.24529 9.0433C9.47375 9.00377 9.67096 8.86049 9.77915 8.65543L12.0027 4.44098Z"
                  fill="#FF991F"
                />
              </svg>
              <span className="product__rate-number">{product?.rating}</span>
            </div>
            <h2 className="product__name-id">KD17</h2>
            <p className="product__name-title">{product?.title}</p>
            <h3 className="product-detail__price">
              {product.price.toLocaleString()} تومان
            </h3>
            <div className="product-details-offs">
              <h3 className="product-details__prev-price">1,200,000</h3>
              <div className="product-details__discount">
                {product?.discount}
              </div>
            </div>

            <ProductSizes />

            <ProductColors />

            <div className="product-details-shopping-cart-wrapper">
              <div className="product__counter">
                <button onClick={decrement} className="product__counter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M6.91406 11H18.9141V13H6.91406V11Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <span>{count}</span>

                <button onClick={increment} className="product__counter-button">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9141 13H13.9141V19H11.9141V13H5.91406V11H11.9141V5H13.9141V11H19.9141V13Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              <ProductBuy product={product} count={count} />

              <div className="product__icon-like">
                <ProductSharePopup productUrl={window.location.href} />
                <IsLike id={product.id} />
              </div>
            </div>
          </div>
        </div>

        <ProductCommentsTab />
      </div>
      <SiteOptions />
      <Footer />
    </>
  );
}

export default ProductDetails;

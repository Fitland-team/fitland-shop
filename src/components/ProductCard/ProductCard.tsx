import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import formatNumber from "../../Utils/FormatNumber";

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  color?: string[];
  rating?: number;
};

function ProductCard({
  id,
  title,
  image,
  price,
  color,
  rating,
}: ProductCardProps) {

  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-img-container">
          <img src={image} alt={title} className="product__img" />
        </div>
        <div className="product-attribute">
          <div className="product-rating-title-wrapper">
            <h3 className="product__title">{title}</h3>

            <div className="product__rating">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill={i < (rating || 0) ? "#FF991F" : "#CBCBCB"}
                >
                  <path d="M7.34126 3.37847C7.62182 2.84672 8.38339 2.84672 8.66395 3.37847L9.86869 5.66189C9.97688 5.86695 10.1741 6.01023 10.4025 6.04976L12.9465 6.48993C13.5389 6.59243 13.7743 7.31672 13.3552 7.74787L11.5559 9.59927C11.3943 9.76553 11.3189 9.99736 11.3519 10.2269L11.7194 12.7823C11.805 13.3774 11.1889 13.825 10.6494 13.5598L8.33255 12.4206C8.12448 12.3183 7.88073 12.3183 7.67266 12.4206L5.35585 13.5598C4.81631 13.825 4.20019 13.3774 4.28577 12.7823L4.65327 10.2269C4.68628 9.99736 4.61095 9.76553 4.44936 9.59927L2.64999 7.74787C2.23095 7.31672 2.46629 6.59243 3.05872 6.48993L5.60266 6.04976C5.83112 6.01023 6.02832 5.86695 6.13652 5.66189L7.34126 3.37847Z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="product__size-range">از سایز M تا 3XL</p>
          <p className="product__price">{formatNumber(price)} تومان</p>

          {color && (
            <div className="product__color-circles">
              {color.map((color, key) => (
                <span
                  key={key}
                  className="color-circle"
                  style={{ backgroundColor: `#${color}` }}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default React.memo(ProductCard);

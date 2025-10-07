import  { useState } from "react";
import "./ProductSizes.css"

export default function ProductSizes() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="product-details__size-buttons"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="product-details__size-title">
        <p className="product-details__size">سایز</p>
        <svg
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9451 11.3335C13.8184 11.3335 13.6917 11.2868 13.5917 11.1868L9.24505 6.84018C8.92505 6.52018 8.40505 6.52018 8.08505 6.84018L3.73839 11.1868C3.54505 11.3802 3.22505 11.3802 3.03172 11.1868C2.83839 10.9935 2.83839 10.6735 3.03172 10.4802L7.37839 6.13352C8.08505 5.42685 9.23839 5.42685 9.95172 6.13352L14.2984 10.4802C14.4917 10.6735 14.4917 10.9935 14.2984 11.1868C14.1984 11.2802 14.0717 11.3335 13.9451 11.3335Z"
            fill="#ADADAD"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="product-details__button">
          <button className="product-detail__button-item">36</button>
          <button className="product-detail__button-item">37</button>
          <button className="product-detail__button-item">38</button>
          <button className="product-detail__button-item">39</button>
          <button className="product-detail__button-item">40</button>
        </div>
      )}
    </div>
  );
}

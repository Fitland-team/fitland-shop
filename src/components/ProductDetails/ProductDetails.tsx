import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import HeaderTop from "../HeaderTop/HeaderTop";
import Footer from "../../layouts/Footer/Footer";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <>
      <HeaderTop />
      <div className="container">
        <div className="product-detailes-top">
          <div className="product-details-top-right">
            <div className="product-details-main-img">
              <img
                src="/images/products/shoes.png"
                alt="shoes"
                className="product-details__selected-img"
              />
            </div>
            <div className="product-details-others-imges">
              <div className="product-detailes-other-img">
                <img src="/images/products/shoes.png" alt="shoes" />
              </div>
              <div className="product-detailes-other-img">
                <img src="/images/products/shoes.png" alt="shoes" />
              </div>
              <div className="product-detailes-other-img">
                <img src="/images/products/shoes.png" alt="shoes" />
              </div>
              <div className="product-detailes-other-img">
                <img src="/images/products/shoes.png" alt="shoes" />
              </div>
              <div className="product-detailes-other-img">
                <img src="/images/products/shoes.png" alt="shoes" />
              </div>
              <div className="product-detailes-other-img">
                <img src="/images/products/shoes.png" alt="shoes" />
              </div>
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
              <span className="product__rate-number">۳.۲</span>
            </div>
            <h2 className="product__name-id">KD17</h2>
            <p className="product__name-title">کفش بسکتبال</p>
            <h3 className="product-detail__price">600,000 تومان</h3>
            <div className="product-details-offs">
              <h3 className="product-details__prev-price">1,200,000</h3>
              <div className="product-details__discount">50%</div>
            </div>
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

            <div className="product-details-colors-wrapper">
              <p className="product-color__title">رنگ</p>
              <div className="product-details-buttons-colors-wrapper">
                <button
                  className="product-details__color-button"
                  onClick={() => setSelected("brown")}
                  style={{
                    backgroundColor: selected === "brown" ? "#ededed" : "#fff",
                  }}
                >
                  <div className="circle-button-color brown"></div>
                  <span>خاکی</span>
                </button>
                <button
                  className="product-details__color-button"
                  onClick={() => setSelected("yellow")}
                  style={{
                    backgroundColor: selected === "yellow" ? "#ededed" : "#fff",
                  }}
                >
                  <div className="circle-button-color yellow"></div>
                  <span>زرد</span>
                </button>
                <button
                  className="product-details__color-button"
                  onClick={() => setSelected("purple")}
                  style={{
                    backgroundColor: selected === "purple" ? "#ededed" : "#fff",
                  }}
                >
                  <div className="circle-button-color purple"></div>
                  <span>بنفش</span>
                </button>
              </div>
            </div>

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
                      fill="#FA541C"
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
                      fill="#FA541C"
                    />
                  </svg>
                </button>
              </div>
              <button className="product__add-to-shopping-card">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8541 17.75H8.20406C7.21406 17.75 6.26406 17.33 5.59406 16.6C4.92406 15.87 4.58406 14.89 4.66406 13.9L5.49406 3.94C5.52406 3.63 5.41406 3.33001 5.20406 3.10001C4.99406 2.87001 4.70406 2.75 4.39406 2.75H2.66406C2.25406 2.75 1.91406 2.41 1.91406 2C1.91406 1.59 2.25406 1.25 2.66406 1.25H4.40407C5.13407 1.25 5.82406 1.56 6.31406 2.09C6.58406 2.39 6.78406 2.74 6.89406 3.13H19.3841C20.3941 3.13 21.3241 3.53 22.0041 4.25C22.6741 4.98 23.0141 5.93 22.9341 6.94L22.3941 14.44C22.2841 16.27 20.6841 17.75 18.8541 17.75ZM6.94406 4.62L6.16406 14.02C6.11406 14.6 6.30406 15.15 6.69406 15.58C7.08406 16.01 7.62406 16.24 8.20406 16.24H18.8541C19.8941 16.24 20.8341 15.36 20.9141 14.32L21.4541 6.82001C21.4941 6.23001 21.3041 5.67001 20.9141 5.26001C20.5241 4.84001 19.9841 4.60999 19.3941 4.60999H6.94406V4.62Z"
                    fill="white"
                  />
                  <path
                    d="M16.9141 22.75C15.8141 22.75 14.9141 21.85 14.9141 20.75C14.9141 19.65 15.8141 18.75 16.9141 18.75C18.0141 18.75 18.9141 19.65 18.9141 20.75C18.9141 21.85 18.0141 22.75 16.9141 22.75ZM16.9141 20.25C16.6341 20.25 16.4141 20.47 16.4141 20.75C16.4141 21.03 16.6341 21.25 16.9141 21.25C17.1941 21.25 17.4141 21.03 17.4141 20.75C17.4141 20.47 17.1941 20.25 16.9141 20.25Z"
                    fill="white"
                  />
                  <path
                    d="M8.91406 22.75C7.81406 22.75 6.91406 21.85 6.91406 20.75C6.91406 19.65 7.81406 18.75 8.91406 18.75C10.0141 18.75 10.9141 19.65 10.9141 20.75C10.9141 21.85 10.0141 22.75 8.91406 22.75ZM8.91406 20.25C8.63406 20.25 8.41406 20.47 8.41406 20.75C8.41406 21.03 8.63406 21.25 8.91406 21.25C9.19406 21.25 9.41406 21.03 9.41406 20.75C9.41406 20.47 9.19406 20.25 8.91406 20.25Z"
                    fill="white"
                  />
                  <path
                    d="M21.6641 8.75H9.66406C9.25406 8.75 8.91406 8.41 8.91406 8C8.91406 7.59 9.25406 7.25 9.66406 7.25H21.6641C22.0741 7.25 22.4141 7.59 22.4141 8C22.4141 8.41 22.0741 8.75 21.6641 8.75Z"
                    fill="white"
                  />
                </svg>
                افزودن به سبد خرید
              </button>
              <div className="product__icon-like">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2857 13.0703C20.9057 13.0703 20.5857 12.7803 20.5357 12.4003C20.2957 10.1403 19.0757 8.09035 17.1957 6.79035C16.8557 6.55035 16.7757 6.09035 17.0057 5.75035C17.2457 5.41035 17.7157 5.33035 18.0457 5.56035C20.2857 7.11035 21.7257 9.55035 22.0157 12.2403C22.0557 12.6503 21.7657 13.0203 21.3457 13.0703C21.3357 13.0703 21.3057 13.0703 21.2857 13.0703Z"
                    fill="#2F5F8A"
                  />
                  <path
                    d="M4.15592 13.1203C4.12592 13.1203 4.10592 13.1203 4.07592 13.1203C3.66592 13.0703 3.36592 12.7003 3.40592 12.2903C3.67592 9.60026 5.10592 7.17026 7.31592 5.60026C7.65592 5.36026 8.12592 5.44026 8.36592 5.78026C8.60592 6.12026 8.52592 6.59026 8.18592 6.83026C6.32592 8.14026 5.12592 10.1903 4.89592 12.4503C4.86592 12.8303 4.53592 13.1203 4.15592 13.1203Z"
                    fill="#2F5F8A"
                  />
                  <path
                    d="M12.724 22.61C11.244 22.61 9.83403 22.27 8.51403 21.61C8.14403 21.42 7.99403 20.97 8.18403 20.6C8.37403 20.23 8.82403 20.08 9.19403 20.27C11.354 21.36 13.954 21.38 16.134 20.33C16.504 20.15 16.954 20.31 17.134 20.68C17.314 21.05 17.154 21.5 16.784 21.68C15.504 22.3 14.144 22.61 12.724 22.61Z"
                    fill="#2F5F8A"
                  />
                  <path
                    d="M12.7253 8.43988C10.7753 8.43988 9.19531 6.85988 9.19531 4.90988C9.19531 2.95988 10.7753 1.37988 12.7253 1.37988C14.6753 1.37988 16.2553 2.95988 16.2553 4.90988C16.2553 6.85988 14.6653 8.43988 12.7253 8.43988ZM12.7253 2.88988C11.6053 2.88988 10.6953 3.79988 10.6953 4.91988C10.6953 6.03988 11.6053 6.94988 12.7253 6.94988C13.8453 6.94988 14.7553 6.03988 14.7553 4.91988C14.7553 3.79988 13.8353 2.88988 12.7253 2.88988Z"
                    fill="#2F5F8A"
                  />
                  <path
                    d="M5.49484 20.6704C3.54484 20.6704 1.96484 19.0904 1.96484 17.1404C1.96484 15.2004 3.54484 13.6104 5.49484 13.6104C7.44484 13.6104 9.02484 15.1904 9.02484 17.1404C9.02484 19.0804 7.44484 20.6704 5.49484 20.6704ZM5.49484 15.1104C4.37484 15.1104 3.46484 16.0204 3.46484 17.1404C3.46484 18.2604 4.37484 19.1704 5.49484 19.1704C6.61484 19.1704 7.52484 18.2604 7.52484 17.1404C7.52484 16.0204 6.61484 15.1104 5.49484 15.1104Z"
                    fill="#2F5F8A"
                  />
                  <path
                    d="M19.8347 20.6704C17.8847 20.6704 16.3047 19.0904 16.3047 17.1404C16.3047 15.2004 17.8847 13.6104 19.8347 13.6104C21.7847 13.6104 23.3647 15.1904 23.3647 17.1404C23.3547 19.0804 21.7747 20.6704 19.8347 20.6704ZM19.8347 15.1104C18.7147 15.1104 17.8047 16.0204 17.8047 17.1404C17.8047 18.2604 18.7147 19.1704 19.8347 19.1704C20.9547 19.1704 21.8647 18.2604 21.8647 17.1404C21.8547 16.0204 20.9547 15.1104 19.8347 15.1104Z"
                    fill="#2F5F8A"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6641 21.6496C12.3541 21.6496 12.0541 21.6096 11.8041 21.5196C7.98406 20.2096 1.91406 15.5596 1.91406 8.68961C1.91406 5.18961 4.74406 2.34961 8.22406 2.34961C9.91406 2.34961 11.4941 3.00961 12.6641 4.18961C13.8341 3.00961 15.4141 2.34961 17.1041 2.34961C20.5841 2.34961 23.4141 5.19961 23.4141 8.68961C23.4141 15.5696 17.3441 20.2096 13.5241 21.5196C13.2741 21.6096 12.9741 21.6496 12.6641 21.6496ZM8.22406 3.84961C5.57406 3.84961 3.41406 6.01961 3.41406 8.68961C3.41406 15.5196 9.98406 19.3196 12.2941 20.1096C12.4741 20.1696 12.8641 20.1696 13.0441 20.1096C15.3441 19.3196 21.9241 15.5296 21.9241 8.68961C21.9241 6.01961 19.7641 3.84961 17.1141 3.84961C15.5941 3.84961 14.1841 4.55961 13.2741 5.78961C12.9941 6.16961 12.3541 6.16961 12.0741 5.78961C11.1441 4.54961 9.74406 3.84961 8.22406 3.84961Z"
                    fill="#404040"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;

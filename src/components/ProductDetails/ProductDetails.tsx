import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import HeaderTop from "../HeaderTop/HeaderTop";
import { products } from "../../api/products";
import Comment from "./Comment/Comment";
import Footer from "../../layouts/Footer/Footer";
import { useState } from "react";
import SiteOptions from "../SIteOptions/SiteOptions";
import ProductSharePopup from "./ProductSharePopUp/ProductSharePopUp";
import IsLike from "./IsLike/IsLike"



type Tab = "features" | "description" | "comments";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );

  if (!product) return <p>محصول پیدا نشد</p>;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<Tab>("features");

  // const [isLiked, setIsLiked] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
                <ProductSharePopup productUrl={window.location.href} />
                {/* <button
                  className="like-button"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
                      fill={isLiked ? "#e0245e" : "none"}
                      stroke={isLiked ? "#e0245e" : "#404040"}
                    />
                  </svg>
                </button> */}
                
                <IsLike id={product.id} />

              </div>
            </div>
          </div>
        </div>

        <div className="product-details-buttom">
          <div className="product-tabs">
            <span
              className="product-tabs__item"
              onClick={() => setActiveTab("features")}
              style={{
                backgroundColor: activeTab === "features" ? "#CFE8FF" : "",
                color: activeTab === "features" ? "#194165" : "",
              }}
            >
              ویژگی های محصول
            </span>
            <span
              className="product-tabs__item"
              onClick={() => setActiveTab("description")}
              style={{
                backgroundColor: activeTab === "description" ? "#CFE8FF" : "",
                color: activeTab === "description" ? "#194165" : "",
              }}
            >
              توضیحات
            </span>
            <span
              className="product-tabs__item"
              onClick={() => setActiveTab("comments")}
              style={{
                backgroundColor: activeTab === "comments" ? "#CFE8FF" : "",
                color: activeTab === "comments" ? "#194165" : "",
              }}
            >
              نظرات
            </span>
          </div>

          <div className="product-tabs-content">
            {activeTab === "features" && (
              <ul className="product-features__content">
                <li className="product-features__content-item">
                  <span className="product-features__content-item-title">
                    جنس
                  </span>

                  <span className="product-features__content-item-value">
                    چرم مصنوعی
                  </span>
                </li>
                <li className="product-features__content-item">
                  <span className="product-features__content-item-title">
                    جنس زیره
                  </span>

                  <span className="product-features__content-item-value">
                    ترموپلاستیک پلی اورتان (TPU)
                  </span>
                </li>
                <li className="product-features__content-item">
                  <span className="product-features__content-item-title">
                    ویژگی های زیره
                  </span>

                  <span className="product-features__content-item-value">
                    <ul>
                      <li>انعطاف پذیر</li>
                      <li>قابلیت ارتجاعی</li>
                      <li>کاهش فشار وارده</li>
                      <li>مقاومت در برابر سایش</li>
                    </ul>
                  </span>
                </li>
                <li className="product-features__content-item">
                  <span className="product-features__content-item-title">
                    ویژگی های کفی کفش
                  </span>

                  <span className="product-features__content-item-value">
                    طبی قابل تعویض
                  </span>
                </li>
              </ul>
            )}
            {activeTab === "description" && (
              <p className="product-description__content">
                یکی از دلایلی که باعث شده نایک به انتخاب اول تمامی ورزشکار های
                دنیا تبدیل شود. تکنولوژی ها و ویژگی های پیشرفته ای است که نایکی
                در تولید کفش های خود از آن بهره میبرد. کفش های نایک علاوه بر
                داشتن تکنولوژی هایی مانند Nike Air, Zoomx, Nike React و … دارای
                برخی ویژگی ها مثل وزن سبک، انعطاف پذیری بالا، تنفس پذیری و
                قابلیت تهویه هوا، بازگشت انرژی و راحتی فوق العاده است که در
                ادامه به آنها میپردازیم. اما توجه داشته باشید که تنها کفش های
                نایک اصل دارای چنین مشخصاتی هستند و کفش های کپی، های کپی، کوالی
                مستر و … فاقد هر گونه تکنولوژی و فناوری هستند و تنها ظاهر نمونه
                اورجینال کفش را تولید میکنند. اگر قصد خرید کفش نایک اصل را دارید
                یا میخواهید از اصل بودن کفش نایک خود مطمئن شوید توصیه میکنیم
                مقاله تشخیص کفش نایک اصل را مطالعه کنید.
              </p>
            )}
            {activeTab === "comments" && (
              <div className="product-comment__content">
                <div className="prouct-comment-wrapper">
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
                <div className="product-taking-comment">
                  <h3 className="comment-form__title">نظرت رو برامون بنویس</h3>
                  <p className="comment-form__subtitle">
                    ایمیل شما نشان داده نمی‌شود.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="produc-comment__form"
                  >
                    <input
                      type="text"
                      placeholder="نام"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="comment-form__input"
                    />

                    <input
                      type="email"
                      placeholder="ایمیل"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="comment-form__input"
                    />

                    <textarea
                      placeholder="نظر شما"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="comment-form__textarea"
                    />

                    <div className="comment-form__actions">
                      <div className="comment-form__stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            onClick={() => setRating(star)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`comment-form__star ${
                              rating >= star ? "active" : ""
                            }`}
                          >
                            <path
                              d="M11.3387 4.44098C11.6192 3.90922 12.3808 3.90922 12.6613 4.44097L14.8849 8.65543C14.9931 8.86049 15.1903 9.00377 15.4188 9.0433L20.1141 9.8557C20.7065 9.95821 20.9418 10.6825 20.5228 11.1136L17.2017 14.5307C17.0402 14.697 16.9648 14.9288 16.9978 15.1583L17.6761 19.8749C17.7617 20.47 17.1456 20.9176 16.606 20.6523L12.3299 18.5497C12.1219 18.4474 11.8781 18.4474 11.6701 18.5497L7.39396 20.6523C6.85442 20.9176 6.2383 20.47 6.32389 19.8749L7.00217 15.1583C7.03517 14.9288 6.95985 14.697 6.79825 14.5307L3.4772 11.1136C3.05816 10.6825 3.2935 9.95821 3.88593 9.8557L8.58123 9.0433C8.80969 9.00377 9.00689 8.86049 9.11509 8.65543L11.3387 4.44098Z"
                              fill="currentColor"
                            />
                          </svg>
                        ))}
                      </div>

                      <button type="submit" className="comment-form__button">
                        ثبت نظر و امتیاز
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <SiteOptions />
      <Footer />
    </>
  );
}

export default ProductDetails;

import React, { useState } from "react";
import Comment from "../Comment/Comment";
import "./ProductCommentsTab.css";

type Tab = "features" | "description" | "comments";

export default function ProductCommentsTab() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const [activeTab, setActiveTab] = useState<Tab>("features");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
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
              <span className="product-features__content-item-title">جنس</span>

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
            یکی از دلایلی که باعث شده نایک به انتخاب اول تمامی ورزشکار های دنیا
            تبدیل شود. تکنولوژی ها و ویژگی های پیشرفته ای است که نایکی در تولید
            کفش های خود از آن بهره میبرد. کفش های نایک علاوه بر داشتن تکنولوژی
            هایی مانند Nike Air, Zoomx, Nike React و … دارای برخی ویژگی ها مثل
            وزن سبک، انعطاف پذیری بالا، تنفس پذیری و قابلیت تهویه هوا، بازگشت
            انرژی و راحتی فوق العاده است که در ادامه به آنها میپردازیم. اما توجه
            داشته باشید که تنها کفش های نایک اصل دارای چنین مشخصاتی هستند و کفش
            های کپی، های کپی، کوالی مستر و … فاقد هر گونه تکنولوژی و فناوری
            هستند و تنها ظاهر نمونه اورجینال کفش را تولید میکنند. اگر قصد خرید
            کفش نایک اصل را دارید یا میخواهید از اصل بودن کفش نایک خود مطمئن
            شوید توصیه میکنیم مقاله تشخیص کفش نایک اصل را مطالعه کنید.
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
              <form onSubmit={handleSubmit} className="produc-comment__form">
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
  );
}

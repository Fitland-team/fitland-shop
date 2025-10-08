import { useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";
import { validateFullName, validatePhone, validateEmail } from "../validations";

type User = {
  fullName: string;
  phone: string;
  email?: string;
};

export default function RegisterForm() {
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [submitClicked, setSubmitClicked] = useState(false);

  const [acceptedRules, setAcceptedRules] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    acceptedRules: "",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    setSubmitClicked(true);
    const newErrors = {
      fullName: validateFullName(fullName),
      phone: validatePhone(phone),
      email: validateEmail(email),
      acceptedRules: acceptedRules ? "" : "باید قوانین را بپذیرید.",
    };

    setErrors(newErrors);

    // اگه هر اروری هست، ثبت‌نام نکن
    if (Object.values(newErrors).some((e) => e)) return;

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find(
      (user) => user.phone === phone || (email && user.email === email)
    );

    if (existingUser) {
      setErrors({
        ...newErrors,
        phone: "این شماره یا ایمیل قبلاً ثبت شده است.",
      });
      return;
    }

    users.push({ fullName, phone, email: email || undefined });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="register-wrapper">
      <div className="register-wrapper__title">
        <h2>ثبت‌نام</h2>
      </div>

      {/* نام */}
      <div className="register-wrapper__input">
        <label htmlFor="">نام و نام خانوادگی *</label>
        <input
          type="text"
          placeholder="نام خود را به فارسی وارد کنید"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (e.target.value.trim() === "") {
              // هنوز چیزی تایپ نشده
              setErrors((prev) => ({ ...prev, fullName: "" }));
            } else {
              // وقتی چیزی تایپ شد، بررسی کن
              const errorMsg = validateFullName(e.target.value);
              setErrors((prev) => ({ ...prev, fullName: errorMsg }));
            }
          }}
          className={
            errors.fullName
              ? "input-error" // اگه ارور وجود داره، قرمز
              : fullName
              ? "input-success" // اگه چیزی تایپ شده و اروری نیست، سبز
              : "" // هنوز چیزی تایپ نشده، حالت عادی
          }
        />
        {errors.fullName && (
          <span className="error-text">{errors.fullName}</span>
        )}
      </div>

      {/* شماره موبایل */}
      <div className="register-wrapper__input">
        <label htmlFor="">شماره تلفن همراه *</label>
        <input
          type="text"
          placeholder="09123456789"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (e.target.value.trim() === "") {
              setErrors((prev) => ({ ...prev, phone: "" }));
            } else {
              const errorMsg = validatePhone(e.target.value);
              setErrors((prev) => ({ ...prev, phone: errorMsg }));
            }
          }}
          className={
            errors.phone ? "input-error" : phone ? "input-success" : ""
          }
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      {/* ایمیل */}
      <div className="register-wrapper__input">
        <label htmlFor="">ایمیل (اختیاری)</label>
        <input
          type="text"
          placeholder="Example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);

            if (e.target.value.trim() === "") {
              // هنوز چیزی تایپ نشده، هیچ اروری نشون نده
              setErrors((prev) => ({ ...prev, email: "" }));
            } else {
              // اعتبارسنجی ایمیل و تنظیم ارور
              const errorMsg = validateEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: errorMsg }));
            }
          }}
          className={
            errors.email
              ? "input-error"
              : email && !errors.email
              ? "input-success"
              : ""
          }
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <button className="register-wrapper__btn" onClick={handleRegister}>
        تایید
      </button>

      {/* تیک قوانین */}
      <div className="register-checkbox">
        <input
          id="check"
          type="checkbox"
          checked={acceptedRules}
          onChange={(e) => {
            setAcceptedRules(e.target.checked);
            // اگر submit زده شده و حالا تیک زده شد، خطا رو پاک کن
            if (submitClicked && e.target.checked) {
              setErrors((prev) => ({ ...prev, acceptedRules: "" }));
            }
          }}
        />
        <label htmlFor="check">
          <span>قوانین و مقررات</span> را خوانده و قبول دارم.
        </label>
        {submitClicked && errors.acceptedRules && (
          <span className="error-text">{errors.acceptedRules}</span>
        )}
      </div>
    </div>
  );
}

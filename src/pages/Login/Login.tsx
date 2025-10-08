import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import LoginImage from "./LoginImage/LoginImage";
import useEnterSubmit from "../../Hooks/useEnterSubmit";
import "./Login.css";

export default function Login() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: { email: string; phone?: string }) =>
        u.email === inputValue || u.phone === inputValue
    );

    if (foundUser) {
      setError("");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/");
    } else {
      setError("کاربر یافت نشد");
    }
  };

  const handleChange = (val: string) => {
    setInputValue(val); // مقدار input رو بروز می‌کنه
    if (error) setError(""); // اگر خطایی قبلاً بود، پاکش کن
  };

  useEnterSubmit(handleLogin);

  return (
    <div className="login">
      <div className="login-section">
        <LoginForm
          inputValue={inputValue}
          error={error}
          handleLogin={handleLogin}
          handleChange={handleChange}
        />
      </div>
      <LoginImage />
    </div>
  );
}

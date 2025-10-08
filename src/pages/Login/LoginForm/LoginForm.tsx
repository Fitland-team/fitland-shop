import type { FC } from "react";
import "./LoginForm.css";

interface LoginFormProps {
  inputValue: string;
  error: string;
  handleLogin: () => void;
  handleChange: (val: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  inputValue,
  error,
  handleLogin,
  handleChange,
}) => {
  return (
    <form className="login-wrapper"  onSubmit={handleLogin}>
      <div className="login-wrapper__title">
        <h2>ورود | ثبت‌نام</h2>
      </div>
      <div className="login-wrapper__input">
        <label>لطفا شماره موبایل یا ایمیل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="*********09 یا Example@gmail.com"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          className={error ? "input-error" : ""}
        />
        {error && <span className="error-text">{error}</span>}
      </div>
      <button type="submit" className="login-wrapper__btn">
        ادامه
      </button>
    </form>
  );
};

export default LoginForm;

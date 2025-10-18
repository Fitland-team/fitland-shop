import { useState, useEffect } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useIsMobile from "../../Hooks/useIsMobile";
import useSmartBack from "../../Hooks/useSmartBack";
import useProfileSidebar from "../../Hooks/useProfileSidebar";
import "./Account.css";

export default function Account() {
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [identity, setIdentity] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { showSidebar, isMobile } = useProfileSidebar();
  const handleBack = useSmartBack('/profile')


  // گرفتن اطلاعات از localStorage وقتی کامپوننت لود شد
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.fullName) setUsername(user.fullName);
      if (user.phone) setPhone(user.phone);
      if (user.email) setEmail(user.email);
    }
  }, []);

  // فیلدهای فرم
  const fields = [
    {
      label: "نام و نام خانوادگی",
      value: username,
      setValue: setUsername,
      type: "text",
    },
    {
      label: "شماره تماس",
      value: phone,
      setValue: setPhone,
      type: "text",
      onlyNumbers: true,
    },
    { label: "کد ملی", value: identity, setValue: setIdentity, type: "text" },
    { label: "جنسیت", value: gender, setValue: setGender, type: "text" },
    { label: "ایمیل", value: email, setValue: setEmail, type: "email" },
  ];

  // وقتی کاربر اطلاعات رو ویرایش و ثبت کرد
  const submitProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^09\d{9}$/.test(phone)) {
      alert("شماره موبایل نامعتبر است");
      return;
    }

    const updatedUser = {
      fullName: username,
      phone,
      identity,
      gender,
      email,
    };

    // ذخیره در localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    setShowProfile(true);
  };


  // وقتی روی ادیت کلیک کرد
  const editProfile = () => setShowProfile(false);

  return (
    <div className="account">
      <div className="account-title">
        <h2 className="account-title__text">
          {isMobile && !showSidebar && <ArrowRightAltIcon className="back-route__mobile" onClick={handleBack} />}
          حساب کاربری
        </h2>
      </div>

      {!showProfile ? (
        <form onSubmit={submitProfile} className="account-wrapper">
          {fields.map(({ label, value, setValue, type, onlyNumbers }) => (
            <div className="account-wrapper__input" key={label}>
              <input
                type={type}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    onlyNumbers &&
                    !/^\d*$/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Delete"
                  ) {
                    e.preventDefault();
                  }
                }}
              />
              <div className="labelline">{label}</div>
            </div>
          ))}
          <button className="account-wrapper__btn" type="submit">
            ثبت
          </button>
        </form>
      ) : (
        <div className="profile-box">
          {fields.map(({ label, value }) => (
            <div className="profile-box__content" key={label}>
              <h1>{label}</h1>
              <p>{value || "ثبت نشده"}</p>
            </div>
          ))}
          <div className="edit-profile" onClick={editProfile}>
            <BorderColorIcon
              className="profile-box__edit"
              style={{ color: "rgba(250, 84, 28, 1)" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

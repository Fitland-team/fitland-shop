import "./ProfileExit.css";
import {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";

const ProfileExit = forwardRef((_, ref) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setIsShowModal(true),
  }));

  // بستن مدال با کلیک روی دکمه esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsShowModal(false);
    };
    if (isShowModal) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isShowModal]);

  // بستن مدال با کلیک روی بیرون اون
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsShowModal(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");
    setIsShowModal(false);
    window.location.reload();
  };

  if (!isShowModal) return null;

  return (
    <>
      {isShowModal && (
        <div className="exit-overlay" onClick={handleOverlayClick}>
          <div className="exit-content" ref={modalRef}>
            <div className="exit-top">
              <p className="exit__title">
                می خواهید از حساب کاربری خود خارج شوید؟
              </p>
              <button
                className="exit__close-btn"
                onClick={() => setIsShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.64245 12.9841C7.48411 12.9841 7.32578 12.9258 7.20078 12.8008C6.95911 12.5591 6.95911 12.1591 7.20078 11.9174L11.9174 7.20078C12.1591 6.95911 12.5591 6.95911 12.8008 7.20078C13.0424 7.44245 13.0424 7.84245 12.8008 8.08411L8.08411 12.8008C7.96745 12.9258 7.80078 12.9841 7.64245 12.9841Z"
                    fill="#032340"
                  />
                  <path
                    d="M12.3591 12.9841C12.2008 12.9841 12.0424 12.9258 11.9174 12.8008L7.20078 8.08411C6.95911 7.84245 6.95911 7.44245 7.20078 7.20078C7.44245 6.95911 7.84245 6.95911 8.08411 7.20078L12.8008 11.9174C13.0424 12.1591 13.0424 12.5591 12.8008 12.8008C12.6758 12.9258 12.5174 12.9841 12.3591 12.9841Z"
                    fill="#032340"
                  />
                  <path
                    d="M12.5013 18.9587H7.5013C2.9763 18.9587 1.04297 17.0253 1.04297 12.5003V7.50033C1.04297 2.97533 2.9763 1.04199 7.5013 1.04199H12.5013C17.0263 1.04199 18.9596 2.97533 18.9596 7.50033V12.5003C18.9596 17.0253 17.0263 18.9587 12.5013 18.9587ZM7.5013 2.29199C3.65964 2.29199 2.29297 3.65866 2.29297 7.50033V12.5003C2.29297 16.342 3.65964 17.7087 7.5013 17.7087H12.5013C16.343 17.7087 17.7096 16.342 17.7096 12.5003V7.50033C17.7096 3.65866 16.343 2.29199 12.5013 2.29199H7.5013Z"
                    fill="#032340"
                  />
                </svg>
              </button>
            </div>
            <div className="exit-bottom">
              <p className="exit-bottom__description">
                با خروج از حساب کاربری، به اطلاعات و سبد خرید فعلیتان دسترسی
                نخواهید داشت و برای دسترسی دوباره میتوانید دوباره وارد حسابتان
                شوید.
              </p>

              <div className="exit-bottom-buttons">
                <button
                  className="cancel__exit"
                  onClick={() => setIsShowModal(false)}
                >
                  انصراف
                </button>
                <button className="exit__btn" onClick={handleLogout}>
                  خروج از حساب
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default ProfileExit;

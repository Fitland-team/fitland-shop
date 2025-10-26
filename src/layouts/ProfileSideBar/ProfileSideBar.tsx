import { useEffect, useRef, useState } from "react";
import "./ProfileSideBar.css";
import { NavLink } from "react-router-dom";
import ProfileExit from "../../components/ExitProfile/ProfileExit";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function ProfileSelection() {
  const exitRef = useRef<{ open: () => void }>(null);

  const [user, setUser] = useState<{
    fullName?: string;
    email?: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error("خطا در خوندن اطلاعات کاربر:", err);
      }
    }
  }, []);

  // image
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    const justLoggedOut = localStorage.getItem("justLoggedOut");

    if (justLoggedOut) {
      setProfileImage(null);
      localStorage.removeItem("justLoggedOut");
    } else if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setProfileImage(base64);
      localStorage.setItem("profileImage", base64);
    };
    reader.readAsDataURL(file);
  };

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("isLoggedIn")
  );

  return (
    <>
      <div className="profile-side-bar">
        <div className="profile-side-bar-wrapper">
          <div className="side-bar-top">
            <div className="side-bar__profile-changer">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="profile"
                  className="side-bar__profile-image"
                />
              ) : (
                <div className="side-bar__profile-placeholder">
                  <svg
                    className="my-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      d="M27.9997 29.7501C20.603 29.7501 14.583 23.7301 14.583 16.3334C14.583 8.93675 20.603 2.91675 27.9997 2.91675C35.3963 2.91675 41.4163 8.93675 41.4163 16.3334C41.4163 23.7301 35.3963 29.7501 27.9997 29.7501ZM27.9997 6.41675C22.5397 6.41675 18.083 10.8734 18.083 16.3334C18.083 21.7934 22.5397 26.2501 27.9997 26.2501C33.4597 26.2501 37.9163 21.7934 37.9163 16.3334C37.9163 10.8734 33.4597 6.41675 27.9997 6.41675Z"
                      fill="#292D32"
                    />
                    <path
                      d="M48.0437 53.0833C47.087 53.0833 46.2937 52.29 46.2937 51.3333C46.2937 43.2833 38.0804 36.75 28.0004 36.75C17.9204 36.75 9.70703 43.2833 9.70703 51.3333C9.70703 52.29 8.9137 53.0833 7.95703 53.0833C7.00036 53.0833 6.20703 52.29 6.20703 51.3333C6.20703 41.37 15.9837 33.25 28.0004 33.25C40.017 33.25 49.7937 41.37 49.7937 51.3333C49.7937 52.29 49.0004 53.0833 48.0437 53.0833Z"
                      fill="#292D32"
                    />
                  </svg>
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-upload"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    disabled={!isLoggedIn} // وقتی لاگ اوت بود غیر فعال
                  />

                  <label
                    htmlFor="profile-upload"
                    style={{ cursor: isLoggedIn ? "pointer" : "not-allowed" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ cursor: "pointer" }}
                      className="add-profile__mobile"
                    >
                      <path
                        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                        fill="#000306"
                      />
                      <path
                        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                        fill="#000306"
                      />
                    </svg>
                  </label>
                </div>
              )}


            </div>

            <h4 className="side-bar__profile-name">
              {user?.fullName ? user.fullName : ""}
            </h4>
            <p className="side-bar__profile-email">
              {user?.email ? user.email : ""}
            </p>
          </div>
          <div className="side-bar-bottom">
            <ul className="side-bar__options">
              <NavLink
                to="account"
                className={({ isActive }) =>
                  isActive ? "side-bar__item active" : "side-bar__item"
                }
              >
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5005 18.9583H7.50053C6.40053 18.9583 5.48386 18.85 4.70886 18.6166C4.42553 18.5333 4.24219 18.2583 4.25886 17.9666C4.46719 15.475 6.99219 13.5166 10.0005 13.5166C13.0089 13.5166 15.5255 15.4666 15.7422 17.9666C15.7672 18.2666 15.5839 18.5333 15.2922 18.6166C14.5172 18.85 13.6005 18.9583 12.5005 18.9583ZM5.60053 17.55C6.15053 17.6583 6.77553 17.7083 7.50053 17.7083H12.5005C13.2255 17.7083 13.8505 17.6583 14.4005 17.55C13.9589 15.95 12.1339 14.7666 10.0005 14.7666C7.86719 14.7666 6.0422 15.95 5.60053 17.55Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.4974 1.66699H7.4974C3.33073 1.66699 1.66406 3.33366 1.66406 7.50033V12.5003C1.66406 15.6503 2.61406 17.3753 4.88073 18.017C5.06406 15.8503 7.28906 14.142 9.9974 14.142C12.7057 14.142 14.9307 15.8503 15.1141 18.017C17.3807 17.3753 18.3307 15.6503 18.3307 12.5003V7.50033C18.3307 3.33366 16.6641 1.66699 12.4974 1.66699ZM9.9974 11.8086C8.3474 11.8086 7.01406 10.467 7.01406 8.81701C7.01406 7.16701 8.3474 5.83366 9.9974 5.83366C11.6474 5.83366 12.9807 7.16701 12.9807 8.81701C12.9807 10.467 11.6474 11.8086 9.9974 11.8086Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99896 12.433C8.00729 12.433 6.39062 10.808 6.39062 8.81636C6.39062 6.82469 8.00729 5.20801 9.99896 5.20801C11.9906 5.20801 13.6073 6.82469 13.6073 8.81636C13.6073 10.808 11.9906 12.433 9.99896 12.433ZM9.99896 6.45801C8.69896 6.45801 7.64063 7.51636 7.64063 8.81636C7.64063 10.1247 8.69896 11.183 9.99896 11.183C11.299 11.183 12.3573 10.1247 12.3573 8.81636C12.3573 7.51636 11.299 6.45801 9.99896 6.45801Z"
                      fill="currentColor"
                    />
                  </svg>
                  حساب کاربری
                </li>
              </NavLink>
              <NavLink
                to="favorites"
                className={({ isActive }) =>
                  isActive ? "side-bar__item active" : "side-bar__item"
                }
              >
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.9974 18.0413C9.73906 18.0413 9.48906 18.008 9.28073 17.933C6.0974 16.8413 1.03906 12.9663 1.03906 7.24134C1.03906 4.32467 3.3974 1.95801 6.2974 1.95801C7.70573 1.95801 9.0224 2.50801 9.9974 3.49134C10.9724 2.50801 12.2891 1.95801 13.6974 1.95801C16.5974 1.95801 18.9557 4.33301 18.9557 7.24134C18.9557 12.9747 13.8974 16.8413 10.7141 17.933C10.5057 18.008 10.2557 18.0413 9.9974 18.0413ZM6.2974 3.20801C4.08906 3.20801 2.28906 5.01634 2.28906 7.24134C2.28906 12.933 7.76406 16.0997 9.68906 16.758C9.83906 16.808 10.1641 16.808 10.3141 16.758C12.2307 16.0997 17.7141 12.9413 17.7141 7.24134C17.7141 5.01634 15.9141 3.20801 13.7057 3.20801C12.4391 3.20801 11.2641 3.79967 10.5057 4.82467C10.2724 5.14134 9.73906 5.14134 9.50573 4.82467C8.73073 3.79134 7.56406 3.20801 6.2974 3.20801Z"
                      fill="currentColor"
                    />
                  </svg>
                  علاقه مندی ها
                </li>
              </NavLink>
              <NavLink
                to="comments"
                className={({ isActive }) =>
                  isActive ? "side-bar__item active" : "side-bar__item"
                }
              >
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.9974 19.0087C9.4224 19.0087 8.88073 18.717 8.4974 18.2087L7.2474 16.542C7.2224 16.5087 7.1224 16.467 7.08073 16.4587H6.66406C3.18906 16.4587 1.03906 15.517 1.03906 10.8337V6.66699C1.03906 2.98366 2.98073 1.04199 6.66406 1.04199H13.3307C17.0141 1.04199 18.9557 2.98366 18.9557 6.66699V10.8337C18.9557 14.517 17.0141 16.4587 13.3307 16.4587H12.9141C12.8474 16.4587 12.7891 16.492 12.7474 16.542L11.4974 18.2087C11.1141 18.717 10.5724 19.0087 9.9974 19.0087ZM6.66406 2.29199C3.68073 2.29199 2.28906 3.68366 2.28906 6.66699V10.8337C2.28906 14.6003 3.58073 15.2087 6.66406 15.2087H7.08073C7.50573 15.2087 7.98906 15.4503 8.2474 15.792L9.4974 17.4587C9.78906 17.842 10.2057 17.842 10.4974 17.4587L11.7474 15.792C12.0224 15.4253 12.4557 15.2087 12.9141 15.2087H13.3307C16.3141 15.2087 17.7057 13.817 17.7057 10.8337V6.66699C17.7057 3.68366 16.3141 2.29199 13.3307 2.29199H6.66406Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.9974 9.99967C9.53073 9.99967 9.16406 9.62467 9.16406 9.16634C9.16406 8.70801 9.53906 8.33301 9.9974 8.33301C10.4557 8.33301 10.8307 8.70801 10.8307 9.16634C10.8307 9.62467 10.4641 9.99967 9.9974 9.99967Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.3333 9.99967C12.8667 9.99967 12.5 9.62467 12.5 9.16634C12.5 8.70801 12.875 8.33301 13.3333 8.33301C13.7917 8.33301 14.1667 8.70801 14.1667 9.16634C14.1667 9.62467 13.8 9.99967 13.3333 9.99967Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.66927 9.99967C6.2026 9.99967 5.83594 9.62467 5.83594 9.16634C5.83594 8.70801 6.21094 8.33301 6.66927 8.33301C7.1276 8.33301 7.5026 8.70801 7.5026 9.16634C7.5026 9.62467 7.13594 9.99967 6.66927 9.99967Z"
                      fill="currentColor"
                    />
                  </svg>
                  دیدگاه‌ها و نظرات
                </li>
              </NavLink>
              <li
                className="side-bar__item"
                onClick={() => exitRef.current?.open()}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.537 12.8085C14.3786 12.8085 14.2203 12.7502 14.0953 12.6252C13.8536 12.3835 13.8536 11.9835 14.0953 11.7419L15.787 10.0502L14.0953 8.35853C13.8536 8.11686 13.8536 7.71686 14.0953 7.4752C14.337 7.23353 14.737 7.23353 14.9786 7.4752L17.112 9.60853C17.3536 9.85019 17.3536 10.2502 17.112 10.4919L14.9786 12.6252C14.8536 12.7502 14.6953 12.8085 14.537 12.8085Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.6078 10.6748H8.13281C7.79115 10.6748 7.50781 10.3915 7.50781 10.0498C7.50781 9.70814 7.79115 9.4248 8.13281 9.4248H16.6078C16.9495 9.4248 17.2328 9.70814 17.2328 10.0498C17.2328 10.3915 16.9495 10.6748 16.6078 10.6748Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.79948 17.2913C5.50781 17.2913 2.50781 14.2913 2.50781 9.99967C2.50781 5.70801 5.50781 2.70801 9.79948 2.70801C10.1411 2.70801 10.4245 2.99134 10.4245 3.33301C10.4245 3.67467 10.1411 3.95801 9.79948 3.95801C6.24115 3.95801 3.75781 6.44134 3.75781 9.99967C3.75781 13.558 6.24115 16.0413 9.79948 16.0413C10.1411 16.0413 10.4245 16.3247 10.4245 16.6663C10.4245 17.008 10.1411 17.2913 9.79948 17.2913Z"
                    fill="currentColor"
                  />
                </svg>
                خروج
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ProfileExit ref={exitRef} />
    </>
  );
}

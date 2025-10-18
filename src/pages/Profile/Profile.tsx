import "./Profile.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ProfileSideBar from "../../layouts/ProfileSideBar/ProfileSideBar";
import Footer from "../../layouts/Footer/Footer";
import FooterMobile from "../../layouts/FooterMobile/FooterMobile";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useIsMobile from "../../Hooks/useIsMobile";
import { useEffect, useState } from "react";

export default function Profile() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (isMobile) {
      if (location.pathname === "/profile") {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    } else {
      setShowSidebar(true);
    }
  }, [location.pathname, isMobile]);

  const handleBack = () => {
    if (window.history.state && window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("..", { replace: true });
    }
  };

  return (
    <>
      <HeaderTop />
      <div className="container profile-content">
        {(!isMobile || showSidebar) && <ProfileSideBar />}
        {(!isMobile || !showSidebar) && (
          <div className="profile-wrapper">
            {isMobile && !showSidebar && (
              <button className="back-btn" onClick={handleBack}>
                ← بازگشت
              </button>
            )}
            <Outlet />
          </div>
        )}
      </div>
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
}

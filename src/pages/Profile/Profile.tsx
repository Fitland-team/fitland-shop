import "./Profile.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ProfileSideBar from "../../layouts/ProfileSideBar/ProfileSideBar";
import Footer from "../../layouts/Footer/Footer";
import FooterMobile from "../../layouts/FooterMobile/FooterMobile";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useProfileSidebar from "../../Hooks/useProfileSidebar";
import { useEffect } from "react";

export default function Profile() {

  const { showSidebar, isMobile } = useProfileSidebar();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/profile" && !isMobile) {
      navigate("/profile/account", { replace: true });
    }
  }, [location.pathname, isMobile, navigate]);

  return (
    <>
      <HeaderTop />
      <div className="container profile-content">
        {(!isMobile || showSidebar) && <ProfileSideBar />}
        {(!isMobile || !showSidebar) && (
          <div className="profile-wrapper">
            <Outlet />
          </div>
        )}
      </div>
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
}

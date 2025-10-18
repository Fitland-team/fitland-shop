import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useIsMobile from "./useIsMobile";

/**
 * هوک برای کنترل نمایش سایدبار در صفحه پروفایل.
 * - وقتی کاربر در موبایل روی مسیر اصلی پروفایل (/profile) هست → سایدبار نمایش داده می‌شود.
 * - در بقیه مسیرها → سایدبار پنهان می‌شود.
 * - در دسکتاپ همیشه نمایش داده می‌شود.
 */
export default function useProfileSidebar() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setShowSidebar(location.pathname === "/profile");
    } else {
      setShowSidebar(true);
    }
  }, [isMobile, location.pathname]);

  return { showSidebar, isMobile };
}

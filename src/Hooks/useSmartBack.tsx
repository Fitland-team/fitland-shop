import { useNavigate } from "react-router-dom";

/**
 * یک هوک برای مدیریت بازگشت هوشمند در صفحات.
 * اگر در history مسیر قبلی وجود داشته باشد، به آن بازمی‌گردد؛
 * در غیر این صورت، به مسیر پیش‌فرض هدایت می‌شود.
 *
 * @param defaultPath مسیر پیش‌فرض در صورتی که history وجود نداشته باشد (مثلاً "/profile")
 * @param delay تاخیر اختیاری برای بازگشت (میلی‌ثانیه)
 * @returns تابع handleBack برای استفاده در onClick
 */
export default function useSmartBack(defaultPath: string = "/", delay: number = 0) {
  const navigate = useNavigate();

  const handleBack = (): void => {
    const hasHistory = window.history.state && window.history.length > 2;

    const goBack = () => {
      if (hasHistory) {
        navigate(-1);
      } else {
        navigate(defaultPath, { replace: true });
      }
    };

    if (delay > 0) {
      setTimeout(goBack, delay);
    } else {
      goBack();
    }
  };

  return handleBack;
}

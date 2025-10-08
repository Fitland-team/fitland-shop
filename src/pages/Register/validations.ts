export function validateFullName(name: string) {
  if (!name.trim()) return "لطفاً نام و نام خانوادگی را وارد کنید.";
  return "";
}

export function validatePhone(phone: string) {
  if (!phone.trim()) return "شماره موبایل الزامی است.";
  if (!/^09\d{9}$/.test(phone))
    return "شماره موبایل باید با 09 شروع شده و 11 رقم باشد.";
  return "";
}

export function validateEmail(email: string) {
  if (!email.trim()) return "";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "فرمت ایمیل معتبر نیست.";
  return "";
}

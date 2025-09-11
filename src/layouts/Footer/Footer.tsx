import "./Footer.css";

function Footer() {
  return (

    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer__top">
          <div className="footer__links">
            <div className="footer__column">
              <p className="footer__title">محبوب‌ترین‌ها</p>
              <ul className="footer__list">
                <li>لباس مردانه</li>
                <li>کفش فوتبال</li>
                <li>دوچرخه</li>
                <li>لباس زنانه</li>
              </ul>
            </div>
            <div className="footer__column">
              <p className="footer__title">خدمات مشتریان</p>
              <ul className="footer__list">
                <li>سوالات متداول</li>
                <li>حریم خصوصی</li>
                <li>گزارش ایراد در سایت</li>
                <li>شرایط بازگرداندن محصول</li>
              </ul>
            </div>
            <div className="footer__column">
              <p className="footer__title">راهنمای خرید</p>
              <ul className="footer__list">
                <li>راهنمای ثبت سفارش</li>
                <li>شیوه های پرداخت</li>
                <li>نحوه ارسال سفارش ها</li>
                <li>نحوه پیگیری محصول</li>
              </ul>
            </div>
          </div>

          <div className="footer__social">
            <p className="footer__follow-text">
              برای دریافت تخفیف های بیشتر ما را دنبال کنید!
            </p>
            <div className="footer__icons">
              <img className="footer__icon-item" src="/images/social/youtube.svg" alt="YouTube" />
              <img className="footer__icon-item" src="/images/social/whatsapp.svg" alt="WhatsApp" />
              <img className="footer__icon-item" src="/images/social/telegram.svg" alt="Telegram" />
              <img className="footer__icon-item" src="/images/social/instagram.svg" alt="Instagram" />
            </div>
            <div className="footer__user-email">
              <input
                className="footer__user-email-input"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button className="footer__user-email-submit">ثبت</button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__bottom-desc">
            فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای
            آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال،
            فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات
            سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با
            مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند
            دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات
            خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی،
            با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار
            می دهد.
          </p>
          <div className="footer-namad-wrapper">
            <div className="footer__namad">
              <span className="footer__namad-item">
                <img src="/images/enamad.png" alt="" />
              </span>
              <span className="footer__namad-item">
                <img src="/images/etehadie.png" alt="" />
              </span>
              <span className="footer__namad-item">
                <img src="images/samandehi.png" alt="" />
              </span>
            </div>
            <p>یک هفته ضمانت بازگشت</p>
          </div>
        </div>
        <div className="full-line"></div>
        <div className="footer-copy-right">
          <p className="footer-copy-right__organ">
            تمامی حقوق مادی و معنوی این وب سایت برای مجموعه فیت لند محفوظ میباشد
          </p>
          <p className="footer__made-by">طراحی شده توسط دو احمد</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

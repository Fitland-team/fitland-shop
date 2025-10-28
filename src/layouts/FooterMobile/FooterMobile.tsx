import './FooterMobile.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FooterMobile() {
    return (
        <div className='footer-mobile'>
            <div className="container">
                <div className="footer-mobile__title">
                    <h1>برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h1>
                    <div className="footer__icons">
                        <img className="footer__icon-item" src="/images/social/youtube.svg" alt="YouTube" />
                        <img className="footer__icon-item" src="/images/social/whatsapp.svg" alt="WhatsApp" />
                        <img className="footer__icon-item" src="/images/social/telegram.svg" alt="Telegram" />
                        <img className="footer__icon-item" src="/images/social/instagram.svg" alt="Instagram" />
                    </div>
                </div>
                <div className="footer-mobile__inputs">
                    <div className="footer-social__input-title-mobile">
                        <h3 className="footer-social__input-title-text-mobile">خبرنامه فیت‌لند</h3>
                    </div>
                    <div className="footer__user-email">
                        <input
                            className="footer__user-email-input footer__user-email-input-mobile"
                            type="email"
                            placeholder="ایمیل خود را وارد کنید..."
                        />

                        <svg className="footer__user-email-input-icon" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0391 15.1237H4.95573C2.37031 15.1237 0.882812 13.6362 0.882812 11.0508V6.09245C0.882812 3.50703 2.37031 2.01953 4.95573 2.01953H12.0391C14.6245 2.01953 16.112 3.50703 16.112 6.09245V11.0508C16.112 13.6362 14.6245 15.1237 12.0391 15.1237ZM4.95573 3.08203C2.9299 3.08203 1.94531 4.06661 1.94531 6.09245V11.0508C1.94531 13.0766 2.9299 14.0612 4.95573 14.0612H12.0391C14.0649 14.0612 15.0495 13.0766 15.0495 11.0508V6.09245C15.0495 4.06661 14.0649 3.08203 12.0391 3.08203H4.95573Z" fill="#868686" />
                            <path d="M8.32483 8.30788C7.72983 8.30788 7.12775 8.12371 6.66734 7.7483L4.45025 5.97746C4.22358 5.7933 4.18109 5.46038 4.36525 5.23371C4.54942 5.00704 4.88234 4.96455 5.10901 5.14871L7.32608 6.91955C7.86442 7.35163 8.77816 7.35163 9.3165 6.91955L11.5336 5.14871C11.7603 4.96455 12.1003 4.99996 12.2773 5.23371C12.4615 5.46038 12.4261 5.80038 12.1923 5.97746L9.97525 7.7483C9.52192 8.12371 8.91983 8.30788 8.32483 8.30788Z" fill="#868686" />
                        </svg>

                        <button className="footer__user-email-submit footer__user-email-submit-mobile">ثبت</button>
                    </div>
                </div>
                <div className='footer-mobile__accordion'>
                    <Accordion
                        sx={{
                            backgroundColor: "transparent",
                            color: "white",
                            boxShadow: "none",
                            border: "none",
                            borderBottom: "1px solid #194165",
                            "&::before": { display: "none" },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#ededed", m: 0 }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                padding: ".5rem 0",
                                minHeight: "unset",
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography component="span" sx={{ color: "#ededed", fontSize: '14px', m: 0 }}>راهنمای خرید</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 0 1rem 0", }}>
                            <Typography sx={{ color: "#ededed", fontSize: '14px' }}>
                                <ul className="footer__list">
                                    <li>راهنمای ثبت سفارش</li>
                                    <li>شیوه های پرداخت</li>
                                    <li>نحوه ارسال سفارش ها</li>
                                    <li>نحوه پیگیری محصول</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "transparent",
                            color: "white",
                            boxShadow: "none",
                            border: "none",
                            borderBottom: "1px solid #194165",
                            "&::before": { display: "none" },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#ededed", m: 0 }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                padding: ".5rem 0",
                                minHeight: "unset",
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography component="span" sx={{ color: "#ededed", fontSize: '14px', m: 0 }}>اطلاعات تماس</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 0 1rem 0", }}>
                            <Typography sx={{ color: "#ededed", fontSize: '14px' }}>
                                <ul className="footer__list">
                                    <li>نشانی  تهران - تجریش - خیابان سالور</li>
                                    <li>شماره تماس  <span className="footer__column-contact-number">3456789-021</span></li>
                                    <li>پست الکترونیک  <span className="footer__column-email">info@fitland.com</span></li>
                                    <li>ساعت کاری  شنبه تا چهارشنبه 9 تا 17</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "transparent",
                            color: "white",
                            boxShadow: "none",
                            border: "none",
                            borderBottom: "1px solid #194165",
                            "&::before": { display: "none" },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#ededed", m: 0 }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                padding: ".5rem 0",
                                minHeight: "unset",
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography component="span" sx={{ color: "#ededed", fontSize: '14px', m: 0 }}>محبوب‌ترین‌ها</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 0 1rem 0", }}>
                            <Typography sx={{ color: "#ededed", fontSize: '14px' }}>
                                <ul className="footer__list">
                                    <li>لباس مردانه</li>
                                    <li>کفش فوتبال</li>
                                    <li>دوچرخه</li>
                                    <li>لباس زنانه</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            backgroundColor: "transparent",
                            color: "white",
                            boxShadow: "none",
                            border: "none",
                            borderBottom: "1px solid #194165",
                            "&::before": { display: "none" },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#ededed", m: 0 }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                padding: ".5rem 0",
                                minHeight: "unset",
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography component="span" sx={{ color: "#ededed", fontSize: '14px', m: 0 }}>خدمات مشتریان</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: "0 0 1rem 0", }}>
                            <Typography sx={{ color: "#ededed", fontSize: '14px' }}>
                                <ul className="footer__list">
                                    <li>سوالات متداول</li>
                                    <li>حریم خصوصی</li>
                                    <li>گزارش ایراد در سایت</li>
                                    <li>شرایط بازگرداندن محصول</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="footer-bottom__mobile">
                    <p className="footer__bottom-desc">
                        <span className="footer-bottom__title">فروشگاه اینترنتی فیت‌لند</span>
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
                <div className="footer-copy-righ-mobile">
                    <p className="footer-copy-right__organ footer-copy-right__organ-mobile">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00219 13.2716C6.86219 13.2716 6.72219 13.2541 6.58803 13.2133C3.56053 12.3791 1.36719 9.54994 1.36719 6.48161V3.92077C1.36719 3.26744 1.83969 2.56163 2.44636 2.3108L5.69553 0.980781C6.54136 0.636615 7.46885 0.636615 8.30885 0.980781L11.558 2.3108C12.1647 2.56163 12.6372 3.26744 12.6372 3.92077V6.48161C12.6372 9.54411 10.438 12.3733 7.41635 13.2133C7.28218 13.2541 7.14219 13.2716 7.00219 13.2716ZM7.00219 1.60495C6.66969 1.60495 6.34302 1.66913 6.02802 1.79746L2.77886 3.12744C2.49886 3.24411 2.24219 3.62327 2.24219 3.92661V6.48745C2.24219 9.16495 4.16719 11.6383 6.82136 12.3733C6.93802 12.4083 7.06635 12.4083 7.18302 12.3733C9.83719 11.6383 11.7622 9.16495 11.7622 6.48745V3.92661C11.7622 3.62327 11.5055 3.24411 11.2255 3.12744L7.97636 1.79746C7.66136 1.66913 7.33469 1.60495 7.00219 1.60495Z" fill="#ADADAD" />
                            <path d="M7.0026 7.72982C6.11594 7.72982 5.39844 7.01232 5.39844 6.12565C5.39844 5.23898 6.11594 4.52148 7.0026 4.52148C7.88927 4.52148 8.60677 5.23898 8.60677 6.12565C8.60677 7.01232 7.88927 7.72982 7.0026 7.72982ZM7.0026 5.39648C6.6001 5.39648 6.27344 5.72315 6.27344 6.12565C6.27344 6.52815 6.6001 6.85482 7.0026 6.85482C7.4051 6.85482 7.73177 6.52815 7.73177 6.12565C7.73177 5.72315 7.4051 5.39648 7.0026 5.39648Z" fill="#ADADAD" />
                            <path d="M7 9.47852C6.76083 9.47852 6.5625 9.28018 6.5625 9.04102V7.29102C6.5625 7.05185 6.76083 6.85352 7 6.85352C7.23917 6.85352 7.4375 7.05185 7.4375 7.29102V9.04102C7.4375 9.28018 7.23917 9.47852 7 9.47852Z" fill="#ADADAD" />
                        </svg>
                        تمامی حقوق مادی و معنوی این وب سایت برای مجموعه فیت لند محفوظ میباشد
                    </p>
                    <p className="footer__made-by footer__made-by-mobile">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.58073 13.2702H2.91406C1.5024 13.2702 0.726562 12.4943 0.726562 11.0827V6.41602C0.726562 5.00435 1.5024 4.22852 2.91406 4.22852H5.83073C6.0699 4.22852 6.26823 4.42685 6.26823 4.66602V11.0827C6.26823 12.0043 6.65906 12.3952 7.58073 12.3952C7.8199 12.3952 8.01823 12.5935 8.01823 12.8327C8.01823 13.0718 7.8199 13.2702 7.58073 13.2702ZM2.91406 5.10352C1.9924 5.10352 1.60156 5.49435 1.60156 6.41602V11.0827C1.60156 12.0043 1.9924 12.3952 2.91406 12.3952H5.71406C5.50406 12.051 5.39323 11.6135 5.39323 11.0827V5.10352H2.91406Z" fill="#ADADAD" />
                            <path d="M5.83073 5.10482H2.91406C2.6749 5.10482 2.47656 4.90648 2.47656 4.66732V3.50065C2.47656 2.61398 3.19406 1.89648 4.08073 1.89648H5.89489C6.02905 1.89648 6.1574 1.96064 6.23907 2.06564C6.32074 2.17647 6.34989 2.31649 6.31489 2.44482C6.27989 2.57315 6.26823 2.71898 6.26823 2.91732V4.66732C6.26823 4.90648 6.0699 5.10482 5.83073 5.10482ZM3.35156 4.22982H5.39323V2.91732C5.39323 2.86482 5.39323 2.81815 5.39323 2.77148H4.08073C3.67823 2.77148 3.35156 3.09815 3.35156 3.50065V4.22982Z" fill="#ADADAD" />
                            <path d="M8.16406 8.02018C7.9249 8.02018 7.72656 7.82185 7.72656 7.58268V4.66602C7.72656 4.42685 7.9249 4.22852 8.16406 4.22852C8.40323 4.22852 8.60156 4.42685 8.60156 4.66602V7.58268C8.60156 7.82185 8.40323 8.02018 8.16406 8.02018Z" fill="#ADADAD" />
                            <path d="M10.5 8.02018C10.2608 8.02018 10.0625 7.82185 10.0625 7.58268V4.66602C10.0625 4.42685 10.2608 4.22852 10.5 4.22852C10.7392 4.22852 10.9375 4.42685 10.9375 4.66602V7.58268C10.9375 7.82185 10.7392 8.02018 10.5 8.02018Z" fill="#ADADAD" />
                            <path d="M10.4974 13.2702H8.16406C7.9249 13.2702 7.72656 13.0718 7.72656 12.8327V10.4993C7.72656 9.93935 8.1874 9.47852 8.7474 9.47852H9.91406C10.4741 9.47852 10.9349 9.93935 10.9349 10.4993V12.8327C10.9349 13.0718 10.7366 13.2702 10.4974 13.2702ZM8.60156 12.3952H10.0599V10.4993C10.0599 10.4177 9.99573 10.3535 9.91406 10.3535H8.7474C8.66573 10.3535 8.60156 10.4177 8.60156 10.4993V12.3952Z" fill="#ADADAD" />
                            <path d="M3.5 10.3548C3.26083 10.3548 3.0625 10.1565 3.0625 9.91732V7.58398C3.0625 7.34482 3.26083 7.14648 3.5 7.14648C3.73917 7.14648 3.9375 7.34482 3.9375 7.58398V9.91732C3.9375 10.1565 3.73917 10.3548 3.5 10.3548Z" fill="#ADADAD" />
                            <path d="M11.0859 13.2702H7.58594C6.17427 13.2702 5.39844 12.4943 5.39844 11.0827V2.91602C5.39844 1.50435 6.17427 0.728516 7.58594 0.728516H11.0859C12.4976 0.728516 13.2734 1.50435 13.2734 2.91602V11.0827C13.2734 12.4943 12.4976 13.2702 11.0859 13.2702ZM7.58594 1.60352C6.66427 1.60352 6.27344 1.99435 6.27344 2.91602V11.0827C6.27344 12.0043 6.66427 12.3952 7.58594 12.3952H11.0859C12.0076 12.3952 12.3984 12.0043 12.3984 11.0827V2.91602C12.3984 1.99435 12.0076 1.60352 11.0859 1.60352H7.58594Z" fill="#ADADAD" />
                        </svg>

                        طراحی شده توسط دو احمد
                    </p>
                </div>
            </div>
            <div className="footer-copy-right__full-width-mobile"></div>
        </div>
    )
}


import './Home.css'
import Footer from "../../layouts/Footer/Footer"
import Header from "../../layouts/Header/Header"
import NewestProducts from "../../layouts/NewestProducts/NewestProducts"
import HomeBanner from "../../components/HomeBanner/HomeBanner"
import Slider from '../../layouts/Slider/Slider'
import SiteOptions from '../../components/SIteOptions/SiteOptions'
import { useEffect, useState } from 'react'
import FooterMobile from '../../layouts/FooterMobile/FooterMobile'
import useIsMobile from '../../Hooks/useIsMobile'

function Home() {

    const isMobile = useIsMobile()

    return (
        <>
            <Header />
            <NewestProducts title="جدید ترین محصولات" content="جدید ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید" firstImg="/images/Newest-Product-girl2.png" secondImg="/images/Newest-Product-girl.png" />
            <HomeBanner bgSrc="/images/Home-Banner.jpg" title="برای حال خوب" content="لوازم ایروبیک و تناسب اندام بگیر" />
            <Slider title="تخفیفات ویژه" bgImage='/images/Subtract.png' />
            <Slider title="جدید ترین کفش های ورزشی " />
            <HomeBanner bgSrc="/images/Home-Banner-2.jpg" title="برای حال خوب" content="لوازم ایروبیک و تناسب اندام بگیر" />
            <Slider title="تخفیفات ویژه" bgImage='images/Subtract2.png' />
            <NewestProducts title="پر فروش ترین محصولات" content="پرفروش ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید.
" firstImg="/images/Sale-Product-girl-1.png" secondImg="/images/Sale-Product-girl-2.png" />
            <div className="camp">
                <img src="../public/images/Ben10.png" alt="" />
            </div>
            <SiteOptions />
            {isMobile ? <FooterMobile /> : <Footer />}
        </>
    )
}

export default Home;

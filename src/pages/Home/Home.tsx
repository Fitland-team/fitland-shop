
import './Home.css'
import Footer from "../../layouts/Footer/Footer"
import Header from "../../layouts/Header/Header"
import NewestProducts from "../../layouts/NewestProducts/NewestProducts"
import HomeBanner from "../../components/HomeBanner/HomeBanner"
import Pagination from "../../layouts/Pagination/Pagination"
import SiteOptions from '../../components/SIteOptions/SiteOptions'

function Home() {
    return (
        <>
            <Header />
            <NewestProducts title="جدید ترین محصولات" content="جدید ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید" firstImg="../../images/Newest-Product-girl2.png" secondImg="../../images/Newest-Product-girl.png" />
            <HomeBanner bgSrc="../../../public/images/Home-Banner.jpg" title="برای حال خوب" content="لوازم ایروبیک و تناسب اندام بگیر" />
        <Pagination title="تخفیفات ویژه" bgImage='/images/Subtract.png'/>
            <Pagination title="جدید ترین کفش های ورزشی " />
            <HomeBanner bgSrc="../../../public/images/Home-Banner-2.jpg" title="برای حال خوب" content="لوازم ایروبیک و تناسب اندام بگیر" />
            <Pagination title="تخفیفات ویژه" bgImage='images/Subtract2.png'/>
            <NewestProducts title="پر فروش ترین محصولات" content="پرفروش ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید.
" firstImg="../../images/Sale-Product-girl-1.png" secondImg="../../images/Sale-Product-girl-2.png" />
            <div className="camp">
                <img src="../public/images/Ben10.png" alt="" />
            </div>
            <SiteOptions />
            <Footer />
        </>
    )
}

export default Home;

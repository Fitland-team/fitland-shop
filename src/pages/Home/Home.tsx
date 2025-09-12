import Footer from "../../layouts/Footer/Footer"
import Header from "../../layouts/Header/Header"
import NewestProducts from "../../layouts/NewestProducts/NewestProducts"
import HomeBanner from "../../components/HomeBanner/HomeBanner"

function Home() {
    return (
        <>
            <Header />
            <NewestProducts title="جدید ترین محصولات" content="جدید ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید" firstImg="../../images/Newest-Product-girl2.png" secondImg="../../images/Newest-Product-girl.png" />
            <HomeBanner bgSrc="../../../public/images/Home-Banner.jpg" title="برای حال خوب" content="لوازم ایروبیک و تناسب اندام بگیر" />
            <HomeBanner bgSrc="../../../public/images/Home-Banner-2.jpg" title="برای حال خوب" content="لوازم ایروبیک و تناسب اندام بگیر" />
            <NewestProducts title="پر فروش ترین محصولات" content="پرفروش ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل تحویل بگیرید.
" firstImg="../../images/Sale-Product-girl-1.png" secondImg="../../images/Sale-Product-girl-2.png" />
            <Footer />
        </>
    )
}

export default Home;

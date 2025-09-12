import './NewestProducts.css'
import NewestProductCard from '../../components/NewestProductCard/NewestProductCard'
import MainBottom from '../../components/MainBottom/MainBottom'

export default function NewestProducts() {
  return (
    <div className='container'>
      <div className="newest-products">
        <NewestProductCard img='../../images/Newest-Product-girl2.png' />
        <NewestProductCard img='../../images/Newest-Product-girl.png' />
        <div className="newest-products__content">
          <h1 className="newest-products__content-title">جدید ترین محصولات</h1>
          <p className="newest-products__content-text">
            جدید ترین محصولات با ارسال رایگان تهیه
            کنید و در سریع ترین زمان درب منزل تحویل بگیرید
          </p>
          <MainBottom bgColor='primary' title='مشاهده همه محصولات'/>
        </div>
      </div>
    </div>
  )
}

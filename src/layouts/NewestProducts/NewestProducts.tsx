import './NewestProducts.css'
import NewestProductCard from '../../components/NewestProductCard/NewestProductCard'
import MainBottom from '../../components/MainBottom/MainBottom'

type NewestProductsProps = {
  title: string,
  content: string,
  firstImg: string,
  secondImg: string
}

export default function NewestProducts({ title, content, firstImg, secondImg }: NewestProductsProps) {
  return (
    <div className='container'>
      <div className="newest-products">
        <NewestProductCard img={firstImg} />
        <NewestProductCard img={secondImg} />
        <div className="newest-products__content">
          <h1 className="newest-products__content-title">{title}</h1>
          <p className="newest-products__content-text">
            {content}
          </p>
          <MainBottom bgColor='primary' title='مشاهده همه محصولات' />
        </div>
      </div>
    </div>
  )
}

import './NewestProductCard.css'

type Image = {
    img: string
}

export default function NewestProductCard({ img }: Image) {
    return (
        <div className='newest-product__card'>
            <img src={img} alt="Product Image" className='newest-product__card-img' />
            <div className='newest-product__card-title'>
                <img src="../../images/new-product-shape.png" alt="" />
                <div className="newest-product__card-title-content">
                    <h2 className='newest-product__card-title-text'>جدید ترین تخفیفات فصل برند نایک</h2>
                    <h2 className='newest-product__card-title-text'><span className='newest-product__card-title-text-sapn'>۵۰ ٪</span> تخفیف روی تمام محصولات </h2>
                </div>
            </div>
        </div>
    )
}

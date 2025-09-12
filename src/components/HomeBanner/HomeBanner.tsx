import './HomeBanner.css'
import MainBottom from '../MainBottom/MainBottom'

type Background = {
  bgSrc: string,
  title: string,
  content: string,
}

export default function HomeBanner({ bgSrc, title, content }: Background) {
  return (
    <div className='home-banner' style={{ backgroundImage: `url(${bgSrc})` }}>
      <div className="home-banner__box">
        <div className="home-banner__box-text">
          <h1 className="home-banner__box-title">{title}</h1>
          <span className="home-banner__box-content">{content}</span>
        </div>
        <MainBottom bgColor='secondary' title='مشاهده همه محصولات' />
      </div>
    </div>
  )
}

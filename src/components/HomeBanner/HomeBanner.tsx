import './HomeBanner.css'
import MainBottom from '../MainBottom/MainBottom'
import { useEffect, useState } from 'react';

type Background = {
  bgSrc: string,
  title: string,
  content: string,
}


export default function HomeBanner({ bgSrc, title, content }: Background) {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='home-banner' style={{ backgroundImage: `url(${bgSrc})` }}>
      <div className="home-banner__box">
        <div className="home-banner__box-text">
          <h1 className="home-banner__box-title">{title}</h1>
          <span className="home-banner__box-content">{content}</span>
        </div>
        {width > 480 && (
          <MainBottom bgColor="secondary" title="مشاهده همه محصولات" />
        )}
      </div>
    </div>
  )
}

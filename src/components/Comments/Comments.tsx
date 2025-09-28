import { useState } from 'react'
import './Comments.css'
import CommentBox from '../CommentBox/CommentBox'

export default function Comments() {

  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className='comments'>
      <div className="comments-title">
        <h2>دیدگاه‌ها و نظرات</h2>
      </div>
      <div className="comments-section">
        <div className="comments-section__title">
          <span className={`comments-section__title-list ${activeIndex === 0 ? 'active-list' : ''}`}
            onClick={() => setActiveIndex(0)}
          >نظرات تایید شده 2</span>
          <span className={`comments-section__title-list ${activeIndex === 1 ? 'active-list' : ''}`}
            onClick={() => setActiveIndex(1)}
          >نظرات تایید نشده 3</span>
        </div>
        {
          activeIndex === 0 && (
            <div className="comments-box">
              <CommentBox imgSrc='/images/bicy.png' title='دوچرخه آبی کلاسیک میلان2009 ' color='آبی-مشکی' desc='بسیار دوچرخه راحت و خوش قیمتیه. توی این مدت که سوار شدم هیچ نقصی ازش ندیدم به بقیه دوستان هم پیشنهاد میکنم خریداری کنند'/>
              <CommentBox imgSrc='/images/approvedComment.png' title='ست ورزشی نایکی' color='مشکی' desc='دوخت بدی داشت و اونجور که توی تصویر نشون داده شده شیک نیست. دوخت ها بشدت مشخصه و حس بدی رو به مخاطب القا میکنه. خلاصه من از خریدم راضی'/>
            </div>
          )
        }

        {
          activeIndex === 1 && (
            <div className="not-confirmed__comments">
              <CommentBox imgSrc='/images/NotConfirmed1.png' title='دمبل 2 کیلویی گرد مدل DHZ ' color='مشکی' desc='خوبه بخرین!'/>
              <CommentBox imgSrc='/images/NotConfirmed2.png' title='توپ فوتبال مولتن سایز 5' color='سفید' desc='خیلیییی توپ خوبیه هم قیمت خوبی داره هم جنس خوب'/>
              <CommentBox imgSrc='/images/NotConfirmed3.png' title='کفش ورزشی مردانه آونگ کد 83590753' color='سرمه ای' desc='کفش خوب و نرمی بود با تشکر از فیت لند'/>
            </div>
          )
        }
      </div>
    </div>
  )
}

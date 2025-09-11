import HeaderTop from "../../components/HeaderTop/HeaderTop"
import './Header.css'
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom"

function Header() {
  return (
    <>
      <div className="header-top-title">
        <h3>با عضویت در فیت لند اولین ارسال را مهمون ما باش :)</h3>
      </div>
      <HeaderTop />
      <HeaderBottom />
    </>
  )
}

export default Header
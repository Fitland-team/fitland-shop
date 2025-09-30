import HeaderTop from "../../components/HeaderTop/HeaderTop"
import './Header.css'
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom"
import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"

function Header() {

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className={`header-top-title ${theme === 'light' ? 'light' : 'dark'}`}>
        <h3>با عضویت در فیت لند اولین ارسال را مهمون ما باش :)</h3>
      </div>
      <HeaderTop />
      <HeaderBottom />
    </>
  )
}

export default Header
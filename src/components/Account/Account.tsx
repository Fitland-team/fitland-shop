import { useState } from 'react'
import './Account.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Account() {

  const [showProfile, setShowProfile] = useState<boolean>(false)

  const [username, setUsername] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [identity, setIdentity] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const sumbmitProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowProfile(true)
  }

  const editProfile = () => {
    setShowProfile(false)
  }

  return (
    <div className='account'>
      <div className="account-title">
        <h1>حساب کاربری</h1>
      </div>
      {
        !showProfile && (
          <form onSubmit={sumbmitProfile} className="account-wrapper">
            <div className="account-wrapper__input">
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
              <div className="labelline">نام و نام خانوادگی</div>
            </div>
            <div className="account-wrapper__input">
              <input type="text" required value={phone} onChange={(e) => setPhone((e.target.value))} onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                  e.preventDefault();
                }
              }} />
              <div className="labelline">شماره تماس</div>
            </div>
            <div className="account-wrapper__input">
              <input type="text" required value={identity} onChange={(e) => setIdentity(e.target.value)} />
              <div className="labelline">کدملی</div>
            </div>
            <div className="account-wrapper__input">
              <input type="text" required value={gender} onChange={(e) => setGender(e.target.value)} />
              <div className="labelline">جنسیت</div>
            </div>
            <div className="account-wrapper__input">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="labelline">ایمیل</div>
            </div>
            <button className="account-wrapper__btn" type='submit'>ثبت</button>
          </form>
        )
      }

      {
        showProfile && (
          <div className="profile-box">
            <div className="profile-box__content">
              <h1>نام و نام خانوادگی</h1>
              <p>{username}</p>
            </div>
            <div className="profile-box__content">
              <h1>شماره تماس</h1>
              <p>{phone}</p>
            </div>
            <div className="edit-profile" onClick={editProfile}>
              <BorderColorIcon className='profile-box__edit' style={{ color: 'rgba(250, 84, 28, 1)' }} />
            </div>
            <div className="profile-box__content">
              <h1>کد ملی</h1>
              <p>{identity}</p>
            </div>
            <div className="profile-box__content">
              <h1>جنسیت</h1>
              <p>{gender}</p>
            </div>
            <div className="profile-box__content">
              <h1>ایمیل</h1>
              <p>{email}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

import { useState } from 'react';
import './Account.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Account() {
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [identity, setIdentity] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // آرایه فیلدها برای فرم و پروفایل
  const fields = [
    { label: "نام و نام خانوادگی", value: username, setValue: setUsername, type: "text" },
    { label: "شماره تماس", value: phone, setValue: setPhone, type: "text", onlyNumbers: true },
    { label: "کد ملی", value: identity, setValue: setIdentity, type: "text" },
    { label: "جنسیت", value: gender, setValue: setGender, type: "text" },
    { label: "ایمیل", value: email, setValue: setEmail, type: "email" },
  ];

  const submitProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowProfile(true);
  };

  const editProfile = () => setShowProfile(false);

  return (
    <div className='account'>
      <div className="account-title">
        <h2>حساب کاربری</h2>
      </div>

      {!showProfile ? (
        <form onSubmit={submitProfile} className="account-wrapper">
          {fields.map(({ label, value, setValue, type, onlyNumbers }) => (
            <div className="account-wrapper__input" key={label}>
              <input
                type={type}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (onlyNumbers && !/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                    e.preventDefault();
                  }
                }}
              />
              <div className="labelline">{label}</div>
            </div>
          ))}
          <button className="account-wrapper__btn" type='submit'>ثبت</button>
        </form>
      ) : (
        <div className="profile-box">
          {fields.map(({ label, value }) => (
            <div className="profile-box__content" key={label}>
              <h1>{label}</h1>
              <p>{value}</p>
            </div>
          ))}
          <div className="edit-profile" onClick={editProfile}>
            <BorderColorIcon className='profile-box__edit' style={{ color: 'rgba(250, 84, 28, 1)' }} />
          </div>
        </div>
      )}
    </div>
  );
}

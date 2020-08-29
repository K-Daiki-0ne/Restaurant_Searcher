import React from 'react';
import { registerUserName } from '../../../store/atoms/register';
import { useRecoilState } from 'recoil';
import './RegisterNameInputForm.css'

export function RegisterNameInputForm() {
  const [ loginName, setLoginName ] = useRecoilState(registerUserName);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginName(event.target.value);
  }

  return (
    <div>
      <label className='register-name-label'>Username</label>
      <input 
        type="text" 
        className="register-username"  
        placeholder="お名前を入力してください"  
        value={loginName} 
        onChange={onChange}
        required
      />
    </div>
  )
}
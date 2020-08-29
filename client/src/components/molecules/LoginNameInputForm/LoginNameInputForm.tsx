import React, { useEffect } from 'react';
import { loginUserName } from '../../../store/atoms/login';
import { useRecoilState } from 'recoil';

import './LoginNameInputForm.css';

export function LoginNameInputForm() {
  const [loginName, setLoginName] = useRecoilState(loginUserName)

  useEffect(() => {
    setLoginName('');
  }, [])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginName(event.target.value)
  }

  return (
    <div>
      <label className='name-label'>Username</label>
      <input 
        type="text" 
        className="username"  
        placeholder="お名前を入力してください"
        value={loginName}
        onChange={onChange}
        required
      />
    </div>
  )
}
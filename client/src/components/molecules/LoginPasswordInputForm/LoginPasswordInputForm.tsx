import React from 'react';
import { useRecoilState } from 'recoil';
import { loginUserName } from '../../../store/atoms/login';
import './LoginPasswordInputForm.css';

export function LoginPasswordInputForm() {
  const [loginPassword, setLoginPassword] = useRecoilState(loginUserName);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(event.target.value);
  }

  return (
    <div>
      <label className='pass-label'>Password</label>
      <input 
        type="password" 
        className="password"  
        placeholder="パスワードを入力してください"  
        value={loginPassword}
        onChange={onChange}
        required
      />
    </div>
  )
}
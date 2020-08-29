import React from 'react';
import { useRecoilState } from 'recoil';
import { loginUserPassword } from '../../../store/atoms/login';
import './LoginPasswordInputForm.css';

export function LoginPasswordInputForm() {
  const [loginPassword, setLoginPassword] = useRecoilState(loginUserPassword);

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
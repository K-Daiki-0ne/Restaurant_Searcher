import React from 'react';
import { useRecoilState } from 'recoil';
import { registerUserPassword } from '../../../store/atoms/register'
import './RegisterPasswordInputForm.css';

export function RegisterPasswordInputForm() {
  const [registerName, setRegisterPassword] = useRecoilState(registerUserPassword);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterPassword(event.target.value);
  }

  return (
    <div>
      <label className='register-pass-label'>Password</label>
      <input 
        type="password" 
        className="register-password"  
        placeholder="パスワードを入力してください"
        value={registerName}
        onChange={onChange}
        required
      />
    </div>
  )
}
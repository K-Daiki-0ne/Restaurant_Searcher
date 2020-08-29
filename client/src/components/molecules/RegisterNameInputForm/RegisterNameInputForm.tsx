import React, { useEffect } from 'react';
import { registerUserName } from '../../../store/atoms/register';
import { useRecoilState } from 'recoil';
import './RegisterNameInputForm.css'

export function RegisterNameInputForm() {
  const [ registerName, setRegisterName ] = useRecoilState(registerUserName);

  useEffect(() => {
    setRegisterName('');
  }, [])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterName(event.target.value);
  }

  return (
    <div>
      <label className='register-name-label'>Username</label>
      <input 
        type="text" 
        className="register-username"  
        placeholder="お名前を入力してください"  
        value={registerName} 
        onChange={onChange}
        required
      />
    </div>
  )
}
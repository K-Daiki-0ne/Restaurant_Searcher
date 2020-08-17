import React from 'react';
import './LoginPasswordInputForm.css';

export function LoginPasswordInputForm() {
  return (
    <div>
      <label className='pass-label'>Password</label>
      <input 
        type="password" 
        className="password"  
        placeholder="パスワードを入力してください"  
        required
      />
    </div>
  )
}
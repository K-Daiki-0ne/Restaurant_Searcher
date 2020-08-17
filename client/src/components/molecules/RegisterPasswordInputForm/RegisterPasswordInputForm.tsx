import React from 'react';
import './RegisterPasswordInputForm.css';

export function RegisterPasswordInputForm() {
  return (
    <div>
      <label className='register-pass-label'>Password</label>
      <input 
        type="password" 
        className="register-password"  
        placeholder="パスワードを入力してください"  
        required
      />
    </div>
  )
}
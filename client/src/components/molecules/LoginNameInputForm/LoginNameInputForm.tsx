import React from 'react';
import './LoginNameInputForm.css';

export function LoginNameInputForm() {
  return (
    <div>
      <label className='name-label'>Username</label>
      <input 
        type="text" 
        className="username"  
        placeholder="お名前を入力してください"  
        required
      />
    </div>
  )
}
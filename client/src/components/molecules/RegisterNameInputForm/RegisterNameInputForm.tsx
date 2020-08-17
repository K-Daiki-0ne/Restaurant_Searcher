import React from 'react';

export function RegisterNameInputForm() {
  return (
    <div>
      <label className='register-name-label'>Username</label>
      <input 
        type="text" 
        className="register-username"  
        placeholder="お名前を入力してください"  
        required
      />
    </div>
  )
}
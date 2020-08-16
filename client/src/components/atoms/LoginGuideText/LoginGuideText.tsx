import React from 'react';
import { Link } from 'react-router-dom';

export function LoginGuideText() {
  return (
    <div>
      <p>
        まだお気に入り登録をしていない人は<Link to='/register'>こちら</Link>から
      </p>
    </div>
  )
}
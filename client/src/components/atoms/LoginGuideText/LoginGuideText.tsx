import React from 'react';
import { Link } from 'react-router-dom';

export function LoginGuideText() {
  return (
    <div>
      <h3>
        まだお気に入り登録をしていない人は<Link to='/register'>こちら</Link>から
      </h3>
    </div>
  )
}
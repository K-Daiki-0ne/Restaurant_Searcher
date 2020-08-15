import React from 'react';
import './ModalDescriptionText.css';

export function ModalDescriptionText() {
  return (
    <div className='description-text'>
      <h1 className='app-guide'>RestrauntSearcherについて</h1>
      <h2 className='app-explanation'>RestrauntSearcherはあなたの周囲の飲食店を探してくれます。</h2>
      <h3 className='app-sub-explanation'>検索ボタンをクリックするとあなたの周辺の飲食店を検索します。</h3>
      <div className='app-text'>
        <p>ユーザー登録をすることで、お気に入りのお店を登録することができます。</p><br />
        <p>ユーザー登録をしたい場合はLoginをクリックしてください！</p><br />
        <p>RestrauntSearcherは無料のサービスです。また、ユーザー登録をしなくても周囲の飲食店を検索することができます。</p>
      </div>
    </div>
  )
}
import React from 'react'
import './AppFooter.css';
import {
  FooterAuthorText,
  FooterApiText,
} from '../../atoms/index';

export function AppFooter() {
  return (
    <footer className='footer'>
      <FooterAuthorText />
      <FooterApiText />
      {/* <FooterImageUrlText /> */}
    </footer>
  )
}
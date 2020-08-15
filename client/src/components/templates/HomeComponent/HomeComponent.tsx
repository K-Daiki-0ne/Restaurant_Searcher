import React from 'react';
import {
  CatchPhraseText,
  DescriptionAppText
} from '../../atoms/index';
import { SearchButton } from '../../molecules/index';

export function HomeComponent() {
  return (
    <div>
      <CatchPhraseText />
      <DescriptionAppText />
      <SearchButton />
    </div>
  )
}
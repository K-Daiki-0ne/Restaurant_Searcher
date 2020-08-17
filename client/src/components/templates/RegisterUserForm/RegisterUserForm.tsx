import React from 'react';
import { RegisterMainText } from '../../atoms/index';
import {
  RegisterNameInputForm,
  RegisterPasswordInputForm,
  RegisterButton
} from '../../molecules/index';

export function RegisterUserForm() {
  return (
    <div>
      <RegisterMainText />
      <form>
        <RegisterNameInputForm />
        <RegisterPasswordInputForm />
      </form>
      <RegisterButton />
    </div>
  )
}
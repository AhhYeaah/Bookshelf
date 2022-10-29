import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { TextInput } from '../../../components/Form/TextInput/TextInput';
import { PrimaryButton } from '../../../components/PrimaryButton/PrimaryButton';

export function LoginContainer(props: any) {
  const [changeCurrentForm]: any = useOutletContext();

  useEffect(() => {
    changeCurrentForm('login');
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Login</h1>
      <form className="flex flex-col justify-center">
        <div>
          <TextInput name="email" id="emailInput" type="email"></TextInput>
          <TextInput name="password" id="passwordInput" type="password"></TextInput>
        </div>
      </form>
      <span className="text-blue-600 self-end">Forgot password?</span>

      <PrimaryButton className="rounded-full">Sign in</PrimaryButton>

      <span>Or</span>

      <PrimaryButton>Google button</PrimaryButton>
      <Link to="/auth/cadastro">
        <span>New here? Grab a glass of beer.</span>
      </Link>
    </div>
  );
}

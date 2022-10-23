import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PrimaryButton } from '../../../components/PrimaryButton/PrimaryButton';

export function CadastroContainer() {
  const [changeCurrentForm]: any = useOutletContext();

  useEffect(() => {
    changeCurrentForm('cadastro');
  });

  return (
    <div className="flex flex-col items-center justify-between">
      <h1>Cadastro</h1>
      <form className="flex flex-col">
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" id="" className="border" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="" className="border" />
        </div>
        <span className="text-blue-600 self-end">Forgot password?</span>
        <PrimaryButton className="rounded-full">Sign in</PrimaryButton>
        <span className="self-center"> Or</span>
        <PrimaryButton>Google button</PrimaryButton>
        <Link to="/auth/login">
          <span>New here? Grab a glass of beer.</span>
        </Link>
      </form>
    </div>
  );
}

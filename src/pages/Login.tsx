import styled from 'styled-components';
import Input from '../components/common/Input';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { log } from 'util';
import TeamName from '../components/TeamName';

const Login = () => {
  const [loginContent, setLoginContent] = useState({
    email: '',
    password: '',
  });
  const [accountIsSaved, setAccountIsSaved] = useState<boolean>(
    localStorage.getItem('email') !== null
  );
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginContent({
      ...loginContent,
      [e.target.name]: e.target.value,
    });
  };
  const onClickSaveAccount = () => {
    if (accountIsSaved) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      setAccountIsSaved(false);
    } else {
      localStorage.setItem('email', loginContent.email);
      localStorage.setItem('password', loginContent.password);
      setAccountIsSaved(true);
    }
  };
  useEffect(() => {
    if (accountIsSaved) {
      setLoginContent({
        ...loginContent,
        email: localStorage.getItem('email') || '',
        password: localStorage.getItem('password') || '',
      });
    }
  }, []);
  return (
    <_Wrapper>
      <_Form onSubmit={onSubmit}>
        <TeamName />
        <Input
          value={loginContent.email}
          onChange={onChangeInput}
          placeholder="이메일을 입력해 주세요."
          name="email"
        />
        <Input
          value={loginContent.password}
          onChange={onChangeInput}
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          name="password"
        />
        <_LoginOption>
          <label>
            <input
              onClick={onClickSaveAccount}
              type="checkbox"
              checked={accountIsSaved || false}
            />
            <p>로그인 상태 유지</p>
          </label>
          <Link to="/forget-password">
            <p className="forgetPassword">비밀번호를 잊으셨나요?</p>
          </Link>
        </_LoginOption>
        <Button onClick={() => {}} backgroundColor={'#71CD74'}>
          로그인 하기
        </Button>
      </_Form>
    </_Wrapper>
  );
};

export default Login;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  > label {
    :first-of-type {
      margin-top: 60px;
    }
    margin-top: 20px;
  }
  > button {
    margin-top: 26px;
  }
`;

const _LoginOption = styled.div`
  display: flex;
  margin-top: 20px;
  > label {
    display: flex;
    align-items: center;
    > p {
      margin-left: 4px;
      font-size: 14px;
      color: ${({ theme }) => theme.color.gray9};
    }
  }
  > a {
    margin-left: auto;
    > p {
      text-decoration: underline;
      font-size: 14px;
      color: ${({ theme }) => theme.color.gray9};
    }
  }
`;

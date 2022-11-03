import styled from 'styled-components';
import Input from '../components/common/Input';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../components/common/Button';

const Login = () => {
  const [loginContent, setLoginContent] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginContent({
      ...loginContent,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <_Wrapper>
      <_Form onSubmit={onSubmit}>
        <_Title>-팀명-</_Title>
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
        <Button onClick={() => {}} backgroundColor={'#71CD74'}>
          로그인 하기
        </Button>
      </_Form>
    </_Wrapper>
  );
};

export default Login;

const _Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.gray9};
  text-align: center;
`;

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
    margin-top: 42px;
  }
`;

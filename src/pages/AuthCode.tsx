import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { theme } from '../styles/theme';
import { creatToast } from '../utils/creatToast';
import { useNavigate } from 'react-router';

const AuthCodePage: React.FC = () => {
  const [authcode, setAuthcode] = useState('');
  const navigator = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthcode(e.target.value);
  };
  const onClickAuthorization = () => {
    creatToast('success', '인증 성공');
    navigator('/first-login');
  };
  return (
    <_Wrapper>
      <_Form onSubmit={onSubmit}>
        <_Title>-팀명-</_Title>
        <Input
          value={authcode}
          onChange={onChange}
          placeholder="인증 코드를 입력해 주세요."
        />
        <Button backgroundColor="#71CD74" onClick={onClickAuthorization}>
          인증하기
        </Button>
      </_Form>
    </_Wrapper>
  );
};

export default AuthCodePage;

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
  > label {
    margin-top: 60px;
  }
  > button {
    margin-top: 20px;
  }
`;

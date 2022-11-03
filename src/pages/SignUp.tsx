import styled from 'styled-components';
import TeamName from '../components/TeamName';
import Input from '../components/common/Input';
import { ChangeEvent, useState } from 'react';
import Button from '../components/common/Button';

const SignUp = () => {
  const [signUpContent, setSignUpContent] = useState({
    email: '',
    password: '',
    checkPassword: '',
    name: '',
    phoneNumber: '',
  });
  const onChangeSignUpContent = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpContent({
      ...signUpContent,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <_Wrapper>
      <_Form>
        <TeamName />
        <Input
          value={signUpContent.email}
          onChange={onChangeSignUpContent}
          name="email"
          placeholder="이메일을 입력해 주세요."
        />
        <Input
          value={signUpContent.password}
          onChange={onChangeSignUpContent}
          name="password"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
        />
        <Input
          value={signUpContent.checkPassword}
          onChange={onChangeSignUpContent}
          name="checkPassword"
          placeholder="비밀번호를 다시 입력해 주세요."
          type="password"
        />
        <Input
          value={signUpContent.name}
          onChange={onChangeSignUpContent}
          name="name"
          placeholder="담당자 이름을 입력해 주세요."
        />
        <Input
          value={signUpContent.phoneNumber}
          onChange={onChangeSignUpContent}
          name="phoneNumber"
          placeholder="담당자의 전화번호를 입력해 주세요."
        />
        <Button onClick={() => {}} backgroundColor="#71CD74">
          회원가입 하기
        </Button>
      </_Form>
    </_Wrapper>
  );
};

export default SignUp;

const _Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const _Form = styled.form`
  margin: 200px auto;
  > label {
    margin-top: 20px;
    :first-of-type {
      margin-top: 60px;
    }
  }
  > button {
    margin-top: 20px;
  }
`;

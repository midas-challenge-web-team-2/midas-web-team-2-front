import styled from 'styled-components';
import Input from '../components/common/Input';
import { ChangeEvent, FormEvent, useState } from 'react';
import TeamName from '../components/TeamName';
import Dropdown, { DropdownItem } from '../components/common/Dropdown';
import Button from '../components/common/Button';
import { creatToast } from '../utils/creatToast';
import { useNavigate } from 'react-router';

interface UserState {
  name: string;
  email: string;
  password: string;
  pob: string;
  phoneNumber: string;
  department: string;
  rank: string;
  repassword: string;
}

type InputType =
  | 'name'
  | 'email'
  | 'password'
  | 'repassword'
  | 'pob'
  | 'phoneNumber'
  | 'department'
  | 'rank';

interface Inputs {
  name: InputType;
  placeholder: string;
  isPassword?: boolean;
}

const DepartmentDropdownItems: DropdownItem[] = [
  {
    summary: '개발부서',
    value: 'develop',
  },
  {
    summary: '디자인부서',
    value: 'design',
  },
  {
    summary: '인사팀',
    value: 'hr',
  },
];

const RankDropdownItems: DropdownItem[] = [
  {
    summary: '사원',
    value: 'common',
  },
  {
    summary: '팀장',
    value: 'team-leader',
  },
  {
    summary: '부장',
    value: 'bujang',
  },
];

const inputs: Inputs[] = [
  { name: 'name', placeholder: '이름을 입력해 주세요.' },
  { name: 'email', placeholder: '이메일을 입력해 주세요.' },
  {
    name: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    isPassword: true,
  },
  {
    name: 'repassword',
    placeholder: '비밀번호를 다시 입력해 주세요.',
    isPassword: true,
  },
  { name: 'pob', placeholder: '사번을 입력해 주세요.' },
  { name: 'phoneNumber', placeholder: '전화번호를 입력해 주세요.' },
];

const FirstLogin = () => {
  const [userInfo, setUserInfo] = useState<UserState>({
    name: '',
    email: '',
    password: '',
    pob: '',
    phoneNumber: '',
    department: '',
    rank: '',
    repassword: '',
  });
  const navigator = useNavigate();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeDropdownValue = (value: string, name: string) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onClickSetMyInfo = () => {
    creatToast('success', '정보 저장 성공');
    navigator('/');
  };
  return (
    <_Wrapper>
      <_Form onSubmit={onSubmit}>
        <TeamName />
        {inputs.map((item) => (
          <Input
            value={userInfo[item.name]}
            onChange={onChange}
            name={item.name}
            placeholder={item.placeholder}
            type={item.isPassword ? 'password' : 'text'}
          />
        ))}
        <Dropdown
          items={DepartmentDropdownItems}
          selectedValue={userInfo.department}
          onChangeDropdownValue={onChangeDropdownValue}
          name="department"
          placeholder="부서를 입력해 주세요."
        />
        <Dropdown
          items={RankDropdownItems}
          selectedValue={userInfo.rank}
          onChangeDropdownValue={onChangeDropdownValue}
          name="rank"
          placeholder="직급을 입력해 주세요."
        />
        <Button onClick={onClickSetMyInfo} backgroundColor={'#71CD74'}>
          정보 입력
        </Button>
      </_Form>
    </_Wrapper>
  );
};

export default FirstLogin;

const _Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;
const _Form = styled.form`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

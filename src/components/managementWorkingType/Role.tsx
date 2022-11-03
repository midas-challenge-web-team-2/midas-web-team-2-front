import styled from 'styled-components';
import { RoleType } from '../../pages/ManageWorkType';
import closeIcon from '../../assets/close.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  roleList: string[];
  addRole: (type: RoleType, role: string) => void;
  type: RoleType;
  deleteRole: (type: RoleType, role: string) => void;
}

const ManageRole = ({ roleList, addRole, type, deleteRole }: Props) => {
  const [role, setRole] = useState('');
  const onChangeRole = (e: ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };
  const roleType = type === 'departmentList' ? '소속' : '직급';
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <_Wrapper onSubmit={onSubmit}>
      <h1>{roleType}</h1>
      <_AddRole>
        <input onChange={onChangeRole} value={role} />
        <button onClick={() => addRole(type, role)}>추가</button>
      </_AddRole>
      <_List>
        {roleList.length === 0 && <div>{roleType}이 존재하지 않습니다.</div>}
        {roleList.map((item) => (
          <_RoleItem>
            {item}
            <img
              src={closeIcon}
              alt="삭제"
              onClick={() => deleteRole(type, item)}
            />
          </_RoleItem>
        ))}
      </_List>
    </_Wrapper>
  );
};
export default ManageRole;

const _Wrapper = styled.form`
  > h1 {
    font-size: 18px;
  }
`;

const _AddRole = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  > input {
    width: calc(100% - 60px);
    border: 1px solid ${({ theme }) => theme.color.gray5};
    border-radius: 8px;
    padding: 0 8px;
  }
  > button {
    width: 48px;
    height: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.gray1};
    border-radius: 8px;
    font-weight: bold;
  }
`;

const _List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
  gap: 8px;
  > div {
    margin-top: 8px;
  }
`;

const _RoleItem = styled.li`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.color.gray5};
  border-radius: 8px;
  > img {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

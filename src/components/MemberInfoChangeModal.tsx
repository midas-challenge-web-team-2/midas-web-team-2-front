import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export const memberInfoData = [
  '이름',
  '이메일',
  '전화번호',
  '상태',
  '사번',
  '직급',
];

export const MemberInfoChangeModal = (props: { setOnModal: any }) => {
  const { register, handleSubmit } = useForm();

  const onValid = () => {
    props.setOnModal((p: boolean) => !p);
  };

  return (
    <_container>
      <_background>
        <_memberInfoFrame>
          <_form onSubmit={handleSubmit(onValid)}>
            <_text>name</_text>
            <_input type={'text'} {...register('name')} />

            <_text>email</_text>
            <_input type={'text'} {...register('email')} />

            <_text>phoneNumber</_text>
            <_input type={'text'} {...register('phoneNumber')} />

            <_text>status</_text>
            <_input type={'text'} {...register('status')} />

            <_text>companyNumber</_text>
            <_input type={'text'} {...register('companyNumber')} />

            <_text>rank</_text>
            <_input type={'text'} {...register('rank')} />

            <_submitButton>수정</_submitButton>
          </_form>
        </_memberInfoFrame>
      </_background>
    </_container>
  );
};

const _memberInfoFrame = styled.div`
  position: absolute;
  top: 60px;
  left: 35%;
  height: 600px;
  width: 400px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.color.gray3};
`;

const _container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
`;

const _form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  padding-left: 30px;
  font-size: 16px;
`;

const _text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const _submitButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 30px;
  background-color: ${(props) => props.theme.color.main};
`;

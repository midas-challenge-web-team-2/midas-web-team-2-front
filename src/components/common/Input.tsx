import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';
import visibleIcon from '../../assets/visibleIcon.svg';
import invisibleIcon from '../../assets/invisibleIcon.svg';

interface Props extends InputStyleProps {
  type?: 'password' | 'text';
  placeholder?: string;
  name?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface InputStyleProps {
  width?: number;
  height?: number;
  disabled?: boolean;
}

const Input = ({
  width = 380,
  height = 56,
  placeholder,
  name,
  value,
  onChange,
  disabled,
  type = 'text',
}: Props) => {
  const [isInVisible, setIsInVisible] = useState(type === 'password');
  return (
    <_Wrapper width={width} height={height}>
      <input
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={isInVisible ? 'password' : 'text'}
      />
      {type === 'password' && (
        <img
          src={isInVisible ? visibleIcon : invisibleIcon}
          alt="눈"
          onClick={() => setIsInVisible((prev) => !prev)}
        />
      )}
    </_Wrapper>
  );
};

export default Input;

const _Wrapper = styled.label<InputStyleProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 12px;

  > input {
    width: calc(${({ width }) => width || 380 - 60}px);
    height: 100%;
    color: ${({ theme }) => theme.color.gray9};

    ::placeholder {
      color: ${({ theme }) => theme.color.gray5};
      font-size: 14px;
    }
  }
  > img {
    margin-left: auto;
  }
`;

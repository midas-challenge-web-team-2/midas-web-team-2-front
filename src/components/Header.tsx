import styled from 'styled-components';
import Dropdown, { DropdownItem } from './common/Dropdown';
import { useEffect, useMemo, useRef, useState } from 'react';

export type StatusType = 'working' | 'end' | '';

export interface MyInfoProps {
  image_url: string;
  name: string;
  status: StatusType;
  companyName: string;
  neededWorkingTime: number;
}

const StatusDropdownItem: DropdownItem[] = [
  {
    summary: '출근',
    value: 'working',
  },
  {
    summary: '퇴근',
    value: 'end',
  },
];

interface Props extends MyInfoProps {
  onChangeDropdownValue: (value: string, name: string) => void;
  workingTime: number;
}

const padNumber = (num: number, length: number) => {
  return String(num).padStart(length, '0');
};

const Header = ({
  image_url,
  name,
  status,
  companyName,
  onChangeDropdownValue,
  workingTime,
  neededWorkingTime,
}: Props) => {
  const startDate = useMemo(() => {
    if (status === 'working') return new Date();
  }, [status]);
  let now = new Date();
  const [hour, setHour] = useState('0');
  const [min, setMin] = useState('0');
  const [sec, setSec] = useState('0');
  const interval = useRef<any>(null);
  useEffect(() => {
    if (startDate)
      interval.current = setInterval(() => {
        now = new Date();
        setHour(padNumber(now.getHours() - startDate.getHours(), 1));
        setMin(padNumber(now.getMinutes() - startDate.getMinutes(), 1));
        setSec(padNumber(now.getSeconds() - startDate.getSeconds(), 1));
      }, 1000);
    return () => clearInterval(interval.current);
  }, [startDate]);
  useEffect(() => {
    if (status === 'end') clearInterval(interval.current);
  }, [status]);
  return (
    <_Wrapper>
      <img src={image_url} />
      <_Name>
        <p className="userName">{name}</p>
        <p className="companyName">{companyName}</p>
      </_Name>
      <Dropdown
        items={StatusDropdownItem}
        selectedValue={
          status !== ''
            ? `${
                status === 'working' ? '🟢' : '🔴'
              }${hour}시간 ${min}분 ${sec}초`
            : '출근 등록을 해보세요!'
        }
        placeholder="출근 등록을 해보세요!"
        onChangeDropdownValue={onChangeDropdownValue}
        name="status"
        width={200}
      />
      <_WorkProgress>
        {/* 자율 근무제일 경우*/}
        {/*{workingTime}시간/{neededWorkingTime}시간*/}
        {`${hour}시간 ${min}분 ${sec}초`}/8시간
      </_WorkProgress>
    </_Wrapper>
  );
};

export default Header;

const _Wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  padding: 20px 140px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray1};
  z-index: 99;

  > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  > .dropdown {
    margin-left: 20px;
  }
`;

const _Name = styled.div`
  margin-left: 20px;
  > .userName {
    font-size: 20px;
    font-weight: bold;
  }
  > .companyName {
    font-size: 12px;
    margin-top: 8px;
  }
`;

const _WorkProgress = styled.p`
  display: inline-block;
  margin-left: auto;
  font-size: 20px;
`;

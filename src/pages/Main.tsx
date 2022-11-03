import styled from 'styled-components';
import Chart from '../components/Chart';
import Header, { MyInfoProps, StatusType } from '../components/Header';
import { useMemo, useState } from 'react';

const data = [
  {
    date: '2022-10-30',
    workingTime: 1,
  },
  {
    date: '2022-10-31',
    workingTime: 8,
  },
  {
    date: '2022-11-1',
    workingTime: 9,
  },
  {
    date: '2022-11-2',
    workingTime: 9,
  },
  {
    date: '2022-11-3',
    workingTime: 9,
  },
  {
    date: '2022-11-4',
    workingTime: 8,
  },
  {
    date: '2022-11-5',
    workingTime: 1,
  },
];

const MainPage = () => {
  const [workingHistory, setWorkingHistory] = useState(data);
  const [myInfo, setMyInfo] = useState<MyInfoProps>({
    image_url: 'https://midasit.com/images/share.jpg',
    name: '김태경',
    status: '',
    companyName: '마이다스 아이티',
    neededWorkingTime: 40,
  });
  const averageTime = 8;
  const onChangeDropdownValue = (value: string, name: string) => {
    setMyInfo({
      ...myInfo,
      status: value as StatusType,
    });
  };
  const workingTime = useMemo(() => {
    let sum = 0;
    workingHistory.forEach((i) => (sum += i.workingTime));
    return sum;
  }, [workingHistory]);
  return (
    <_Container>
      <Header
        workingTime={workingTime}
        {...myInfo}
        onChangeDropdownValue={onChangeDropdownValue}
      />
      <Chart data={workingHistory} average={averageTime} />
    </_Container>
  );
};
export default MainPage;

const _Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

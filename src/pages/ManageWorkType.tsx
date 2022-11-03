import styled from 'styled-components';
import { useMemo, useState } from 'react';
import WorkingTypes from '../components/managementWorkingType/WorkingTypes';
import SelectDay from '../components/managementWorkingType/SelectDay';
import ChangeTime from '../components/managementWorkingType/ChangeTime';
import Button from '../components/common/Button';

export type WorkingDayType = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export type WorkingType = 'fixed' | 'free' | 'selectable';

export type ChangeAbleTime =
  | 'startWorkingTime'
  | 'endWorkingTime'
  | 'duringTime'
  | 'restTime';

interface WorkingTypeState {
  type: WorkingType;
  workingDay: WorkingDayType[];
  restDay: WorkingDayType[];
  startWorkingTime: string;
  endWorkingTime?: string;
  duringTime: string;
  restTime: string;
}

const changeAbleArray: ChangeAbleTime[] = [
  'startWorkingTime',
  'duringTime',
  'restTime',
];

enum ChangeButtonSummary {
  startWorkingTime = '출근 시간',
  duringTime = '일하는 시간',
  restTime = '휴게시간',
  endWorkingTime = '',
}

const ManageWorkType = () => {
  const [workingType, setWorkingType] = useState<WorkingTypeState>({
    type: 'fixed',
    workingDay: ['월', '화', '수', '목', '금'],
    restDay: ['토', '일'],
    startWorkingTime: '9:00',
    endWorkingTime: '18:00',
    duringTime: '8:00',
    restTime: '1:00',
  });
  const changeWorkingType = (type: WorkingType) => {
    setWorkingType({
      ...workingType,
      type,
    });
  };
  const removeFromWorkingDays = (day: WorkingDayType) => {
    setWorkingType({
      ...workingType,
      workingDay: workingType.workingDay.filter((i) => i !== day),
      restDay: workingType.restDay.concat(day),
    });
  };
  const removeFromRestDays = (day: WorkingDayType) => {
    setWorkingType({
      ...workingType,
      workingDay: workingType.workingDay.concat(day),
      restDay: workingType.restDay.filter((i) => i !== day),
    });
  };
  const onChangeTime = (type: ChangeAbleTime, hour: string, minute: string) => {
    setWorkingType({
      ...workingType,
      [type]: `${hour}:${minute}`,
    });
  };
  const onClickSave = () => {};
  const inputSummary = useMemo(() => {
    if (workingType.type === 'fixed') return '출근 시간';
    else if (workingType.type === 'free') return '출근 가능 시간';
    else return '필수 근무 시간';
  }, [workingType.type]);
  return (
    <_Wrapper>
      <_Flex>
        <div>
          <_Title>근무 유형</_Title>
          <WorkingTypes
            workingType={workingType.type}
            changeWorkingType={changeWorkingType}
          />
          <_Title className="workingDay">일하는 날</_Title>
          <SelectDay
            days={workingType.workingDay}
            onClickRemove={removeFromWorkingDays}
          />
          <_Title className="workingDay">쉬는 날</_Title>
          <SelectDay
            days={workingType.restDay}
            onClickRemove={removeFromRestDays}
          />
        </div>
        <div>
          {changeAbleArray.map((item: ChangeAbleTime) => {
            return (
              <>
                <_Title className="time">
                  {item === 'startWorkingTime'
                    ? inputSummary
                    : ChangeButtonSummary[item]}
                </_Title>
                <ChangeTime
                  startTime={workingType[item] || ''}
                  onChangeTime={onChangeTime}
                  type={item}
                  endTime={
                    workingType.type !== 'fixed' && item === 'startWorkingTime'
                      ? workingType.endWorkingTime
                      : undefined
                  }
                />
              </>
            );
          })}
        </div>
      </_Flex>
      <Button onClick={onClickSave} backgroundColor={'#71CD74'} width={329}>
        저장하기
      </Button>
    </_Wrapper>
  );
};
export default ManageWorkType;

const _Wrapper = styled.div`
  padding: 100px 0 0 62px;
  display: flex;
  flex-direction: column;
  > button {
    margin-top: 60px;
  }
  align-items: center;
`;

const _Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 60px;
  > div {
    :first-of-type {
      width: 500px;
    }
    > .workingTime {
      margin-top: 40px;
    }
    > .time {
      margin-top: 42px;
    }
  }
`;

const _Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.gray9};
  margin-top: 32px;
  :first-of-type {
    margin-top: 0;
  }
`;

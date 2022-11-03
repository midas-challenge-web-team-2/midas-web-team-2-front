import styled from 'styled-components';
import { useMemo, useState } from 'react';
import WorkingTypes from '../components/managementWorkingType/WorkingTypes';
import SelectDay from '../components/managementWorkingType/SelectDay';
import ChangeTime from '../components/managementWorkingType/ChangeTime';
import Button from '../components/common/Button';
import ManageRole from '../components/managementWorkingType/Role';

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
  departmentList: string[];
  rankList: string[];
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

export type RoleType = 'departmentList' | 'rankList';

const ManageWorkType = () => {
  const [workingType, setWorkingType] = useState<WorkingTypeState>({
    type: 'fixed',
    workingDay: ['월', '화', '수', '목', '금'],
    restDay: ['토', '일'],
    startWorkingTime: '9:00',
    endWorkingTime: '18:00',
    duringTime: '8:00',
    restTime: '1:00',
    departmentList: ['개발1팀', '개발2팀'],
    rankList: ['사원', '팀장', '부장'],
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
    console.log(type, hour, minute);
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
  const addRole = (type: RoleType, role: string) => {
    setWorkingType({
      ...workingType,
      [type]: workingType[type].concat(role),
    });
  };
  const deleteRole = (type: RoleType, role: string) => {
    setWorkingType({
      ...workingType,
      [type]: workingType[type].filter((item) => item !== role),
    });
  };
  return (
    <_Wrapper>
      <_Flex>
        <_WorkingType>
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
        </_WorkingType>
        <_WorkingTime>
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
        </_WorkingTime>
        <_Role className="role">
          <ManageRole
            type="departmentList"
            addRole={addRole}
            roleList={workingType.departmentList}
            deleteRole={deleteRole}
          />
          <ManageRole
            type="rankList"
            addRole={addRole}
            roleList={workingType.rankList}
            deleteRole={deleteRole}
          />
        </_Role>
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
  > .role {
    width: 230px;
  }
  > div {
    h1:first-of-type {
      :first-of-type {
        margin-top: 0;
      }
    }
    > .workingTime {
      margin-top: 40px;
    }
    > .time {
      margin-top: 42px;
    }
  }
`;

const _WorkingType = styled.div`
  width: 500px;
`;

const _WorkingTime = styled.div``;

const _Role = styled.div`
  > form:last-of-type {
    margin-top: 30px;
  }
`;

const _Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.gray9};
  margin-top: 32px;
`;

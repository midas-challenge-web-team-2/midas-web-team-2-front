import styled from 'styled-components';
import { WorkingType } from '../../pages/ManageWorkType';

enum WorkTypeIntroduction {
  fixed = '출·퇴근 시간이 고정되어있습니다.',
  free = '유연한 출근시간이지만 하루의 근무시간이 정해져있습니다.',
  selectable = '주단위 근무시간은 정해져있지만 출·퇴근시간이 자율입니다. 필수 근무시간이 정해져 있습니다.',
}

enum WorkingTypeSummary {
  fixed = '고정',
  free = '시차',
  selectable = '선택적',
}

const workingTypeButtons: WorkingType[] = ['fixed', 'free', 'selectable'];

interface Props {
  workingType: WorkingType;
  changeWorkingType: (type: WorkingType) => void;
}

const WorkingTypes = ({ workingType, changeWorkingType }: Props) => {
  return (
    <>
      <_WorkingTypes>
        {workingTypeButtons.map((i) => (
          <_Button
            isSelected={workingType === i}
            onClick={() => changeWorkingType(i)}
          >
            {WorkingTypeSummary[i]}
          </_Button>
        ))}
      </_WorkingTypes>
      <_Summary>{WorkTypeIntroduction[workingType]}</_Summary>
    </>
  );
};

export default WorkingTypes;

const _WorkingTypes = styled.div`
  display: flex;
  gap: 0 12px;
  margin-top: 24px;
`;

const _Button = styled.button<{
  isSelected: boolean;
}>`
  min-width: 80px;
  padding: 12px 8px;
  border: 2px solid
    ${({ theme, isSelected }) => (isSelected ? '' : theme.color.gray4)};
  border-radius: 12px;
  font-weight: bold;
  font-size: 18px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.main : theme.color.gray1};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray1 : theme.color.gray9};
`;

const _Summary = styled.strong`
  font-size: 14px;
  display: inline-block;
  margin-top: 8px;
`;

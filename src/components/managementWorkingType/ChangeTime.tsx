import { ChangeAbleTime } from '../../pages/ManageWorkType';
import styled from 'styled-components';

interface Props {
  startTime: string;
  endTime?: string;
  onChangeTime: (type: ChangeAbleTime, hour: string, minute: string) => void;
  type: ChangeAbleTime;
}

const ChangeTime = ({ startTime, endTime, onChangeTime, type }: Props) => {
  const [startHour, startMinute] = startTime.split(':');
  const changeTime = (hour: string, minute: string, isEndTime?: boolean) => {
    onChangeTime(isEndTime ? 'endWorkingTime' : type, hour, minute);
  };
  return (
    <_Wrapper>
      <_TimeButton divided={endTime !== undefined}>
        <input
          type="number"
          value={startHour}
          onChange={(event) =>
            Number(event.target.value) <= 23 &&
            changeTime(event.target.value, startMinute)
          }
        />
        :
        <input
          type="number"
          value={startMinute}
          onChange={(event) =>
            Number(event.target.value) <= 59 &&
            changeTime(startHour, event.target.value)
          }
        />
      </_TimeButton>
      {endTime && (
        <>
          <_To>~</_To>
          <_TimeButton divided={true}>
            <input
              type="number"
              value={endTime.split(':')[0]}
              onChange={(event) =>
                Number(event.target.value) <= 23 &&
                changeTime(startHour, event.target.value)
              }
            />
            :
            <input
              type="number"
              value={endTime.split(':')[1]}
              onChange={(event) =>
                Number(event.target.value) <= 59 &&
                changeTime(startHour, event.target.value)
              }
            />
          </_TimeButton>
        </>
      )}
    </_Wrapper>
  );
};

export default ChangeTime;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 329px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray5};
  border-radius: 8px;
  margin-top: 8px;
`;

const _To = styled.div`
  font-size: 30px;
`;

const _TimeButton = styled.div<{
  divided: boolean;
}>`
  width: ${({ divided }) => (divided ? 48 : 100)}%;
  display: flex;
  justify-content: center;
  > input {
    width: ${({ divided }) => (divided ? 20 : 48)}%;
    text-align: center;
    font-size: 18px;
  }
`;

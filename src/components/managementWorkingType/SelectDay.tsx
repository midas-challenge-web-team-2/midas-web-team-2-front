import styled from 'styled-components';
import { WorkingDayType } from '../../pages/ManageWorkType';
import closeIcon from '../../assets/close.svg';

interface Props {
  days: WorkingDayType[];
  onClickRemove: (day: WorkingDayType) => void;
}

const SelectDay = ({ days, onClickRemove }: Props) => {
  return (
    <_Wrapper>
      {days.map((i) => (
        <_SelectedDays>
          {i}
          <img src={closeIcon} alt="닫기" onClick={() => onClickRemove(i)} />
        </_SelectedDays>
      ))}
    </_Wrapper>
  );
};

export default SelectDay;

const _Wrapper = styled.ul`
  display: flex;
  gap: 0 12px;
  margin-top: 8px;
`;

const _SelectedDays = styled.li`
  padding: 8px 12px;
  border: 2px solid ${({ theme }) => theme.color.gray5};
  border-radius: 4px;
  > img {
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }
`;

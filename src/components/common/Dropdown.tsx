import styled from 'styled-components';
import { useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import triangleIcon from '../../assets/triangle.svg';

export interface DropdownItem {
  summary: string;
  value: string;
}

interface Props {
  items: DropdownItem[];
  placeholder?: string;
  selectedValue: string;
  onChangeDropdownValue: (value: string, name: string) => void;
  width?: number;
  height?: number;
  name: string;
}

const Dropdown = ({
  items,
  placeholder,
  width = 380,
  height = 56,
  onChangeDropdownValue,
  selectedValue,
  name,
}: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const selected = useMemo(() => {
    const index = items.findIndex((item) => item.value === selectedValue);
    if (index === -1) {
      return selectedValue;
    } else return items[index].summary;
  }, [selectedValue]);
  return (
    <_Wrapper width={width} height={height} className="dropdown">
      <_Selected
        isNotSelected={selectedValue === ''}
        onClick={() => setIsOpened(true)}
      >
        {selected}
        <img src={triangleIcon} alt="드롭다운 내리기" />
      </_Selected>
      {isOpened && (
        <OutsideClickHandler onOutsideClick={() => setIsOpened(false)}>
          <_ItemsWrapper>
            {items.map((item) => (
              <_Item
                onClick={() => {
                  onChangeDropdownValue(item.value, name);
                  setIsOpened(false);
                }}
              >
                {item.summary}
              </_Item>
            ))}
          </_ItemsWrapper>
        </OutsideClickHandler>
      )}
    </_Wrapper>
  );
};
export default Dropdown;

const _Wrapper = styled.div<{
  width: number;
  height: number;
}>`
  position: relative;
  width: ${({ width }) => width}px;
  > label {
    height: ${({ height }) => height}px;
  }
`;

const _Selected = styled.label<{
  isNotSelected: boolean;
}>`
  padding: 0 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 8px;
  color: ${({ theme, isNotSelected }) =>
    isNotSelected ? theme.color.gray5 : theme.color.gray9};
  font-size: 14px;
  > img {
    margin-left: auto;
  }
`;

const _ItemsWrapper = styled.ul`
  width: 100%;
  max-height: 180px;
  overflow: scroll;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.color.gray5};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray1};
  z-index: 2;
`;

const _Item = styled.li`
  width: 100%;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 48px;
  :hover {
    background-color: ${({ theme }) => theme.color.gray3};
  }
`;

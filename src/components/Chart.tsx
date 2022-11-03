import styled from 'styled-components';
import background from '../assets/chartBackGround.svg';

interface WorkHistory {
  workingTime: number;
  date: string;
}

interface Props {
  data: WorkHistory[];
  average: number;
}

const Chart = ({ data, average }: Props) => {
  return (
    <_Wrapper>
      <_Bars>
        {data.map((item, index) => (
          <>
            <_Bar index={index}>
              {Array(item.workingTime)
                .fill(void 0)
                .map((_, idx) => (
                  <div className={idx < average ? 'common' : 'over'} />
                ))
                .reverse()}
            </_Bar>
            <_Date index={index}>{item.date}</_Date>
          </>
        ))}
      </_Bars>
    </_Wrapper>
  );
};

export default Chart;

const _Wrapper = styled.div`
  background-image: url(${background});
  object-fit: contain;
  width: 1140px;
  height: 480px;
  margin-top: 100px;
`;

const _Bars = styled.div`
  width: 900px;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const _Bar = styled.div<{
  index: number;
}>`
  width: 96px;
  position: absolute;
  bottom: 1px;
  left: ${({ index }) => index * 16}%;
  > div {
    background-color: #c1d4ef;
    height: 19px;
  }
  > .over {
    background-color: #f5d5d5;
  }
`;

const _Date = styled.p<{
  index: number;
}>`
  width: 100px;
  text-align: center;
  left: ${({ index }) => index * 16}%;
  position: absolute;
  bottom: -30px;
`;

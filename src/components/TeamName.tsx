import styled from 'styled-components';

const TeamName = () => {
  return <_TeamName>IMING</_TeamName>;
};

export default TeamName;

const _TeamName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray9};
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

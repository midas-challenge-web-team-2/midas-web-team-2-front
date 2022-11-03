import styled from 'styled-components';

const TeamName = () => {
  return <_TeamName>-팀명-</_TeamName>;
};

export default TeamName;

const _TeamName = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray9};
  text-align: center;
`;

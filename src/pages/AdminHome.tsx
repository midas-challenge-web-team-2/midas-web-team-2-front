import styled from 'styled-components';
import { memberInfoData } from '../components/MemberInfoChangeModal';
import memberDummyData from '../archive/memberData.json';

const memberData = () => {
  const result = [];

  for (let i = 0; i < 3; i++) {
    result.push(
      <_memberInfos>
        <_memberInfoText>{memberDummyData['member2'].name}</_memberInfoText>
        <_memberInfoText>{memberDummyData['member2'].email}</_memberInfoText>
        <_memberInfoText>
          {memberDummyData['member2'].phoneNumber}
        </_memberInfoText>
        <_memberInfoText>{memberDummyData['member2'].status}</_memberInfoText>
        <_memberInfoText>
          {memberDummyData['member2'].companyNumber}
        </_memberInfoText>
        <_memberInfoText>{memberDummyData['member2'].rank}</_memberInfoText>
        <_memberInfoText>
          {memberDummyData['member2'].entryDate}
        </_memberInfoText>
        <_memberInfoText>{memberDummyData['member2'].tenure}</_memberInfoText>
      </_memberInfos>
    );
  }
  return result;
};

export const AdminHome = () => {
  return (
    <_container>
      {/* 좌측 사이드 메뉴 (어드민 정보, 검색 바) */}
      <_sideBar>
        <_profileWrapper>
          <_profileBox />
          <_nameText>어드민</_nameText>
        </_profileWrapper>

        <_memberSearchBar type={'search'} placeholder={'구성원 검색'} />
      </_sideBar>

      {/* 어드민 회사 구성원 정보 */}
      <_memberWrapper>
        <_header>
          <_memberTitle>🌱 구성원</_memberTitle>
          <_memberButton>코드 발급</_memberButton>
        </_header>

        <_memberInfoCategoryWrapper>
          {memberInfoData.map((infoData, idx) => (
            <_memberInfoCategory key={idx}>{infoData}</_memberInfoCategory>
          ))}
        </_memberInfoCategoryWrapper>
        <_memberInfoTextWrapper>{memberData()}</_memberInfoTextWrapper>
      </_memberWrapper>
    </_container>
  );
};

const _container = styled.div`
  display: flex;
`;

const _sideBar = styled.div`
  position: relative;
  width: 20%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.gray3};
`;

const _profileWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 30px 0 0 30px;
`;

const _profileBox = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.gray6};
`;

const _nameText = styled.p`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.color.gray9};
`;

const _memberSearchBar = styled.input`
  width: 170px;
  height: 40px;
  margin: 120px 0 0 30px;
  padding: 0 15px 0 15px;
  border-radius: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.color.gray9};
  background-color: ${(props) => props.theme.color.gray1};

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color.gray5};
  }
`;

const _memberWrapper = styled.div`
  height: 150vh;
  width: 80%;
`;

const _header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 130px;
  background-color: white;
`;

const _memberTitle = styled.h1`
  font-size: 36px;
  color: black;
`;

const _memberButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 30px;
  font-size: 16px;
  color: ${(props) => props.theme.color.gray1};
  background-color: ${(props) => props.theme.color.main};
`;

const _memberInfoCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const _memberInfoCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const _memberInfoText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.color.gray6};
  margin: 20px;
`;

const _memberInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _memberInfos = styled.div`
  display: flex;
  justify-content: space-around;
`;

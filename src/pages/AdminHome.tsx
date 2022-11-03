import styled from "styled-components";

export const AdminHome = () => {
  return (
    <_container>
      {/* 좌측 사이드 메뉴 (어드민 정보, 검색 바) */}
      <_sideBar>
        <_profileWrapper>
          <_profileBox />
          <_nameText>어드민</_nameText>
        </_profileWrapper>

        <_memberSearchBar type={"search"} placeholder={"구성원 검색"} />
      </_sideBar>

      {/* 어드민 회사 구성원 정보 */}
      <_memberWrapper>
        <_header>
          <_memberTitle>구성원</_memberTitle>
          <_memberButton>코드 발급</_memberButton>
        </_header>

        <_memberInfoCategoryWrapper>
          <>
            <_memberInfoCategory>이름</_memberInfoCategory>
            <_memberInfoCategory>이메일</_memberInfoCategory>
            <_memberInfoCategory>전화번호</_memberInfoCategory>
            <_memberInfoCategory>상태</_memberInfoCategory>
            <_memberInfoCategory>사번</_memberInfoCategory>
            <_memberInfoCategory>직급</_memberInfoCategory>
            <_memberInfoCategory>입사일</_memberInfoCategory>
            <_memberInfoCategory>근속시간</_memberInfoCategory>
          </>
        </_memberInfoCategoryWrapper>
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
  background-color: ${(props) => props.theme.color.gray2};
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
  font-size: 20px;
  color: ${(props) => props.theme.color.gray1};
  background-color: ${(props) => props.theme.color.gray5};

  &::-webkit-input-placeholder {
    color: white;
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
  background-color: ${(props) => props.theme.color.gray8};
`;

const _memberInfoCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const _memberInfoCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

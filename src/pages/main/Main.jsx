import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Routing from "../../routes/Routing";

// 페이지 타이틀 스타일
const titleStyle = {
  textAlign: "center",
  fontFamily: "yg-jalnan",
  marginBottom: "20px",
};

// 페이지 타이틀 링크 스타일
const linkStyle = {
  textDecoration: "none",
  color: "#ff7028",
  fontSize: "52px",
};

// Main 컴포넌트
function Main() {
  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header>
          <h1 style={titleStyle}>
            <Link to="/" style={linkStyle}>
              한끼얼마
            </Link>
          </h1>
        </Header>
        <Wrapper>
          <NavBar isLoggedIn={isLoggedIn} />
          <Routing />
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

// 페이지 헤더 스타일
const Header = styled.section`
  display: flex;
  flex-direction: column;
`;

// 페이지 컨텐츠 래퍼 스타일
const Wrapper = styled.section`
  max-width: 960px;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Main;

import { createGlobalStyle } from 'styled-components';
import '../assets/font.css';

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  // 변수 정의: 주요 색상 설정
  :root {
    --main-color: #FF7043;
  }

  // HTML 및 body 요소에 대한 기본 스타일 설정
  html,
  body {
    width: 100%;
    height: 100%;
  }

  // 여러 요소의 패딩과 마진 초기화
  body,
  div,
  p,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0;
  }

  // body 요소에 상단 여백 추가
  body {
    margin-top: 20px;
  }

  // 섹션 요소 중앙 정렬 설정
  section {
    width: 960px;
    margin: 0 auto;
  }

  // 버튼 스타일 설정
  button {
    padding: 0;
    background-color: transparent;
    border: none;
  }

  // .title 클래스 스타일 설정
  .title {
    text-decoration: none;
    color: #ff7028;
    font-size: 52px;
    padding: 0px;
    text-align: center;
    font-family: "yg-jalnan";
    box-shadow: inset 0 0 30px green;
  }

  // .navbar-brand 클래스 스타일 설정
  .navbar-brand {
    font-family: "yg-jalnan";
    color: #ff973c;
    font-size: 24px;
  }

  // 목록 스타일 초기화
  ol,
  ul,
  li {
    list-style: none;
  }

  // body 요소 기본 폰트 스타일 설정
  body {
    font-family: "Nanum Gothic", "맑은 고딕", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #676767;
    border-top: 30px solid #ffffff; /* 넓이 스타일 색상 */
  }

  // #campaign 아이디 스타일 설정
  #campaign {
    display: block;
    margin: auto;
  }

  // #lit 아이디 스타일 설정
  #lit {
    font-family: "yg-jalnan";
    font-size: 3em;
    color: #ff7028;
    text-align: center;
    text-decoration: none;
    padding: 20;
    margin: 20;
    clear: both;
    margin-top: 20px;
  }

  // #wrap 아이디 스타일 설정
  #wrap {
    width: 960px;
    margin: 0 auto;
  }

  // #header, #footer 아이디 스타일 설정
  #header, #footer {
    width: 100%;
    margin: 0 auto;
  }

  // #footer 스타일 설정
  #footer {
    padding: 20px 0 15px;
    margin-top: 50px;
    background-color: #ff7028;
    font-size: 0.9em;
    text-align: center;
    font-style: normal;
    color: #fff;
    clear: both;
  }

  // #footerlogo 스타일 설정
  #footerlogo {
    display: inline-block;
    text-decoration: none;
    color: #ff7028;
    font-size: 2.5em;
    padding-top: 15px;
    text-align: center;
    font-family: "yg-jalnan";
  }

  // #logo, #logo a 스타일 설정
  #logo, #logo a {
    float: left;
  }

  // .img 클래스 스타일 설정
  .img {
    width: auto;
    height: auto;
    display: block;
  }

  // .container 클래스 스타일 설정
  .container {
    display: block;
    width: 984px;
    height: auto;
    max-width: 100%; /* 창 사이즈가 1000px보다 작아지면 100% 처리 */
    margin: 0 auto;
    clear: both;
    min-height: 500px;
  }

  // 테이블 헤더 스타일 설정
  thead tr {
    background-color: #ff7028;
    color: #ffffff;
  }

  // 레이블 스타일 설정
  label {
    padding: 10;
    margin: 10;
  }
`;

export default GlobalStyle;

import React from 'react';
import homeImg from '../../assets/img/index.png';

// Home 컴포넌트 정의
function Home() {
  return (
    <>
      {/* 홈 이미지 표시 */}
      <img src={homeImg} alt='homeImg' style={imgStyle} />
      {/* 홈 타이틀 표시 */}
      <p style={titleStyle}>가성비 장인들의 매 '끼' 자랑</p>
    </>
  );
}

// 이미지 스타일 정의
const imgStyle = {
  marginTop: '2em', // 위쪽 여백 2em
};

// 타이틀 스타일 정의
const titleStyle = {
  fontFamily: 'yg-jalnan', // 폰트 "yg-jalnan" 사용
  fontSize: '3em', // 폰트 크기 3em
  color: '#FF7043', // 글자색 오렌지
  textAlign: 'center', // 텍스트 중앙 정렬
  marginTop: '30px', // 위쪽 여백 30px
};

export default Home;

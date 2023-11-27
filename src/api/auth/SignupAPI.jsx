import { URL } from '../BaseURL';

// 회원가입 요청을 보내는 API 함수
const SignAPI = async (userInfo) => {
  try {
    // 서버의 회원가입 엔드포인트로 POST 요청을 보냄
    const res = await fetch(`${URL}/members/forms`, {
      method: 'POST',
      body: JSON.stringify({ ...userInfo }), // 사용자 정보를 JSON 형식으로 전송
      headers: {
        'Content-Type': 'application/json', // 요청 헤더에 JSON 데이터로 설정
      },
    });
    // 응답 데이터를 JSON 형식으로 파싱하여 반환
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('회원가입 요청 실패', error); // 오류 발생 시 오류 메시지 출력
  }
};

export default SignAPI;

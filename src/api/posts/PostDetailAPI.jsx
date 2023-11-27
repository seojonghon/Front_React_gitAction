import { URL } from '../BaseURL';

// 특정 게시물의 상세 정보를 가져오는 API 함수
const PostDetailAPI = (id) => {
  // 특정 게시물의 상세 정보를 서버로 요청하는 동작
  const getPostDetail = async () => {
    try {
      // 서버의 특정 게시물 엔드포인트로 GET 요청을 보냄
      const res = await fetch(`${URL}/posts/${id}`, {
        method: 'GET',
      });
      // 응답 데이터를 JSON 형식으로 파싱
      const data = res.json();
      console.log('요청 성공', data); // 요청 성공 시 데이터와 함께 로그 출력
      return data;
    } catch (error) {
      console.error('Post Detail 데이터 전송 실패', error); // 오류 발생 시 오류 메시지 출력
    }
  };

  return getPostDetail;
};

export default PostDetailAPI;

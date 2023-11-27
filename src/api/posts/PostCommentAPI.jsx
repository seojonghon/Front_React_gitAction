import { URL } from '../BaseURL';

// 댓글을 작성하는 API 함수
const PostCommentAPI = (id, accesstoken, csrfToken, comment) => {
  // 내부 함수 정의: 실제 댓글을 서버로 전송하는 동작
  const postComment = async () => {
    try {
      // 서버의 댓글 엔드포인트로 POST 요청을 보냄
      const res = await fetch(`${URL}/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json', // JSON 데이터로 설정
          Authorization: `Bearer ${accesstoken}`, // 인증 토큰을 헤더에 추가
          'X-CSRF-Token': `${csrfToken}`, // CSRF 토큰을 헤더에 추가
        },
        body: JSON.stringify({
          content: `${comment}`, // 댓글 내용을 JSON 데이터에 포함
        }),
      });
      // 응답 데이터를 JSON 형식으로 파싱
      const data = res.json();
      console.log(data);
      return data;
    } catch (error) {
        console.error('Post Comment 데이터 전송 실패', error); // 오류 발생 시 오류 메시지 출력
    }
  };

  return postComment;
};

export default PostCommentAPI;

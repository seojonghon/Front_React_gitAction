import { URL } from '../BaseURL';

// 서버에 데이터를 POST하여 게시하는 비동기 함수 정의
const PostRecipeAPI = (data, accesstoken, csrfToken) => {
  // 서버에 POST 요청을 보내고 데이터를 게시하는 함수
  const postRecipe = async () => {
    try {
      // 서버로 POST 요청을 전송
      const res = await fetch(`${URL}/posts/forms`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accesstoken}`,
          'X-CSRF-Token': `${csrfToken}`,
        },
        body: JSON.stringify(data),
      });
      // 서버 응답 데이터를 JSON 형식으로 변환
      const response = res.json();
      console.log(response);
      return response;
    } catch (error) {
      // 데이터 전송 실패 시, 에러 메시지 출력
      console.error('댓글 데이터 전송 실패', error);
    }
  };

  return postRecipe;
};

export default PostRecipeAPI;

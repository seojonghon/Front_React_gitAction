import { URL } from '../BaseURL';

// IngredientsAPI 함수는 서버에서 재료(ingredients) 데이터를 가져오는 비동기 함수를 정의
const IngredientsAPI = (id) => {
  // 서버에 GET 요청을 보내고 데이터를 가져오는 함수
  const getIngredients = async () => {
    try {
      // 서버의 URL로 GET 요청을 전송
      const res = await fetch(`${URL}/posts/forms/ingredients`, {
        method: 'GET',
      });

      // 서버 응답 데이터를 JSON 형식으로 변환
      const data = res.json();

      // 데이터 요청 성공 시, 데이터와 성공 메시지를 출력
      console.log('요청 성공', data);

      // 데이터 반환
      return data;
    } catch (error) {
      // 데이터 요청 실패 시, 에러 메시지 출력
      console.error('Ingredients 데이터 요청 실패', error);
    }
  };

  // getIngredients 함수를 외부로 노출하여 다른 곳에서 사용 가능
  return getIngredients;
};

export default IngredientsAPI;

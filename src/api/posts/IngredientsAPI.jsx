import { URL } from "../BaseURL";

/**
 * IngredientsAPI 모듈
 * 재료 목록 데이터를 가져오는 API 모듈
 */
const IngredientsAPI = () => {
  /**
   * GetIngredients 함수
   * 서버로부터 재료 목록 데이터를 가져옵니다.
   * @returns {Promise} 재료 목록 데이터가 포함된 Promise
   */
  const GetIngredients = async () => {
    try {
      const res = await fetch(`${URL}/posts/forms/ingredients`, {
        method: "GET",
      });
      const ingredients = await res.json();
      return ingredients;
    } catch (error) {
      console.error("재료 목록 데이터 전송 실패", error);
    }
  };

  return GetIngredients;
};

export default IngredientsAPI;

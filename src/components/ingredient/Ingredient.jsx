import { useCallback, useState } from 'react';
import { ReactComponent as PlusButton } from '../../assets/img/icon-plus.svg';
import { styled } from 'styled-components';

// Ingredient 컴포넌트는 재료와 수량을 입력받아 데이터를 업데이트
export const Ingredient = ({ inData, formData, setFormData }) => {
  // 수량, 선택된 재료, 버튼 상태를 관리하는 상태 변수 초기화
  const [amount, setAmount] = useState('0');
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // 수량 입력 핸들러
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // 재료 선택 핸들러
  const handleIngredientChange = (event) => {
    // 선택한 재료를 찾아서 상태 업데이트
    const selected = inData.ingredients.find((item) => item.name === event.target.value);
    setSelectedIngredient(selected);
  };

  // 폼 제출 핸들러
  const submitHandler = useCallback((e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    // 새로운 재료 객체 생성
    const newIngredient = {
      id: selectedIngredient.id, // 선택한 재료의 id 사용
      quantity: amount, // 실제 수량으로 변경
      price: selectedIngredient.price, // 선택한 재료의 가격 사용
      unit: selectedIngredient.unit, // 선택한 재료의 단위 사용
    };

    // 기존 데이터에 새로운 재료 추가
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients: [...prevFormData.ingredients, newIngredient],
    }));

    setIsButtonVisible(false);
  }, [amount, selectedIngredient, setFormData]);

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        {/* 품목 선택 */}
        품목:
        <select value={selectedIngredient.name} onChange={handleIngredientChange}>
          {inData && inData.ingredients && inData.ingredients.length > 0 ? (
            inData.ingredients.map((res, i) => (
              <option key={i}>{res.name}</option>
            ))
          ) : (
            <option>선택지 없음</option>
          )}
        </select>
        {/* 수량 입력 */}
        수량:
        <input
          type='number'
          min='0'
          style={{ height: '15px', width: '120px' }}
          value={amount}
          onChange={handleAmountChange}
        />
        {/* 추가 버튼 */}
        {isButtonVisible && (
          <button type='submit'>
            <PlusButton />
          </button>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 30px;
  align-items: center;
`;

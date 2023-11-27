import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/button/Button';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom, csrfTokenAtom } from '../../atom/Atom';
import PostRecipeAPI from '../../api/form/PostRecipe';
import IngredientsAPI from '../../api/form/IngredientsAPI';
import { Ingredient } from '../../components/ingredient/Ingredient';
import { SectionWrapper } from '../post/Post';

function FormIngredients() {
  // Recoil 상태 및 Router 훅 사용
  const token = useRecoilValue(accessTokenAtom);
  const CsrfToken = useRecoilValue(csrfTokenAtom);

  // 폼 데이터 및 관련 상태 초기화
  const [formData, setFormData] = useState({
    post: {
      title: '',
      content: '',
    },
    ingredients: [],
  });

  // 재료 데이터 및 선택된 재료 초기화
  const [inData, setInData] = useState([]);

  // Router 훅 사용
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state.title;
  const contents = location.state.contents;

  // API 호출 함수 초기화
  const getIngredients = IngredientsAPI();
  const postRecipe = PostRecipeAPI(formData, token, CsrfToken);

  // 재료 데이터를 가져오는 API 호출 함수
  const getInApi = useCallback(async () => {
    const indata = await getIngredients();
    return indata;
  }, [getIngredients]);

  useEffect(() => {
    // 컴포넌트가 마운트되면 재료 데이터를 가져와서 상태에 저장
    const fetchDataAndSetData = async () => {
      const indata = await getInApi();
      setInData(indata);

    // 폼 데이터 초기화
    setFormData((prevData) => ({
      ...prevData,
      post: { ...prevData.post, title, content: contents },
    }));
  };

  fetchDataAndSetData();
}, [getInApi, title, contents]);

  const saveForm = async () => {
    // 게시글 저장 로직 추가
    postRecipe().then((res) => {
      alert('등록되었습니다');
      navigate('/posts'); // 저장 후 게시글 리스트 페이지로 이동
    });
  };

  const prevPage = () => {
    navigate('/posts/form'); // 레시피 등록 페이지로 이동
  };

  return (
    <Wrapper>
      {/* 요리 이름 표시 */}
      <h2 style={{ marginBottom: '20px' }}>요리 이름: {title}</h2>

      <SectionWrapper style={{ marginBottom: '20px' }}>
        {/* 레시피 내용 표시 */}
        레시피 내용: {contents}
      </SectionWrapper>

      <h2 style={{ marginBottom: '10px' }}>재료를 등록해주세요</h2>
      <section style={{ minHeight: '30vh' }}>
        {/* 재료 입력 컴포넌트 반복 사용 */}
        <Ingredient inData={inData} formData setFormData={setFormData} />
        <Ingredient inData={inData} formData setFormData={setFormData} />
        <Ingredient inData={inData} formData setFormData={setFormData} />
        <Ingredient inData={inData} formData setFormData={setFormData} />
        <Ingredient inData={inData} formData setFormData={setFormData} />
      </section>
      <ButtonWrapper>
        <Button onClick={prevPage} content='이전' />
        <Button onClick={saveForm} content='저장' />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 50vh;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  bottom: 0;
  justify-content: center;
`;

export default FormIngredients;

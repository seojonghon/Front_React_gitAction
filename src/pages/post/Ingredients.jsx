import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import axios from "axios";

function Ingredients() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const title = queryParams.get("title");
  const contents = queryParams.get("contents");

  const saveForm = async () => {
    // 게시글을 저장하는 로직을 추가
    // form은 name으로 받아온 각 영역의 값을 뜻하는듯함
    await axios
      .post("https://rest-recipe-book-dptb.run.goorm.site")
      .then((res) => {
        alert("등록되었습니다");
        navigate("/posts"); // 저장 후, 게시글 리스트 페이지로 이동(현재는 메인)
      });
  };

  // 서버 응답 확인??

  const prevPage = () => {
    navigate("/posts/forms"); // 레시피 등록 페이지로 이동
  };

  return (
    <>
      <div>요리 이름: {title}</div>
      <div>레시피 내용: {contents}</div>

      <h2>재료를 등록해주세요</h2>
      <div>
        품목: {} 수량: {}
        <button type="submit">
          <MdAdd />
        </button>
        <br />
        <button onClick={prevPage}>이전</button>
        <button onClick={saveForm}>저장</button>
      </div>
    </>
  );
}

export default Ingredients;

import { styled } from "styled-components";

// Button 컴포넌트
function Button(props) {
  return (
    <>
      <StyledButton type="submit" {...props}>
        {props.content}
      </StyledButton>
    </>
  );
}

// 스타일된 버튼 컴포넌트
const StyledButton = styled.button`
  border-radius: 10px; // 모서리 둥글게
  font-size: 15px; // 글꼴 크기
  width: ${(props) => props.width || "170px"}; // 너비 (기본값: 170px)
  height: ${(props) => props.height || "40px"}; // 높이 (기본값: 40px)
  background-color: ${(props) =>
    props.backgroundcolor ||
    "var(--main-color)"}; // 배경색 (기본값: --main-color)
  color: ${(props) => props.color || "white"}; // 글꼴 색상 (기본값: 흰색)
`;

export default Button;

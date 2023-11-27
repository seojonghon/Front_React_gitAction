// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "axios";
// import DOMPurify from "dompurify";

// function stripHtmlTags(html) {
//   return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
// }

// function PostForm() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     contents: "",
//   });

//   const { title, contents } = form;

//   const onChange = (name, value) => {
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const nextPage = () => {
//     const sanitizedContents = stripHtmlTags(contents);
//     navigate(
//       `/postingredients?title=${encodeURIComponent(
//         title
//       )}&contents=${encodeURIComponent(sanitizedContents)}`
//     );
//   };

//   // 페이지 새로고침 혹은 창닫기 시도시 경고 메세지 출력
//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       event.preventDefault();
//       event.returnValue =
//         "변경사항이 저장되지 않을 수 있습니다. 정말 페이지를 나가시겠습니까?";
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   return (
//     <>
//       <div className="recipebox">
//         <h1 style={{ fontWeight: "bold" }}>레시피 등록</h1>
//         <hr />

//         <div>요리 이름</div>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => onChange("title", e.target.value)}
//         />

//         <div>레시피 내용</div>
//         <ReactQuill
//           value={contents}
//           onChange={(value) => onChange("contents", value)}
//         />
//         <hr />

//         <button onClick={nextPage}>다음</button>
//       </div>
//     </>
//   );
// }

// export default PostForm;

// // 재료 등록 부분 값 받아오기..?
// // 새로고침할때 내용이 사라집니다 괜찮으신가요? 같은거 alret으로 넣기

// // 버튼 + 같은건 투두앱 만들었던거에서 가져오기
// // 추가는 10개까지 가능? 혹은 제한 없이..대신 무언가 선택하지 않으면(기본값)넘어가지 않도록 설정
// // 플러스 버튼 누르면 옆에 마이너스 버튼 생기게...id값 1?인거는 안생기게 하거나 하면?될듯?

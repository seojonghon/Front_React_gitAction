import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// 루트 컨테이너 요소를 가져옴
const container = document.getElementById("root");

// React DOM의 루트를 생성
const root = createRoot(container);

// 루트 컴포넌트인 App을 렌더링
root.render(<App />);

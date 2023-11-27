import { RecoilRoot } from 'recoil';
import Main from "./pages/main/Main";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Main />
      </RecoilRoot>
    </>
  );
}

export default App;

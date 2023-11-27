import { useRecoilValue, useResetRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  accessTokenAtom,
  csrfTokenAtom,
  isLoginAtom,
  userNameAtom,
} from '../../atom/Atom';

// NavBar 컴포넌트는 사용자 인증 상태에 따라 네비게이션 바를 렌더링
function NavBar(props) {
  // React Router의 useNavigate를 사용하여 페이지 간 이동 관리
  const navigate = useNavigate();

  // Recoil 상태 값을 가져오고 초기화하기 위한 훅 사용
  const isLogin = useRecoilValue(isLoginAtom);
  const userName = useRecoilValue(userNameAtom);
  const resetToken = useResetRecoilState(accessTokenAtom);
  const resetCsrfToken = useResetRecoilState(csrfTokenAtom);
  const resetLogin = useResetRecoilState(isLoginAtom);
  const resetUserName = useResetRecoilState(userNameAtom);

  // 로그아웃 처리를 담당하는 함수
  const logoutHandler = () => {
    resetToken();
    resetCsrfToken();
    resetLogin();
    resetUserName();
    navigate('/');
  };

  return (
    <NavWrapper>
      {isLogin ? (
        // 사용자가 로그인한 경우
        <ul>
          <LeftLi>
            <StyledLink to='/posts'>Recipe List</StyledLink>
          </LeftLi>
          <RightLi>
            <Profile>{userName}</Profile>
            <button onClick={logoutHandler} style={{color: "white", fontSize: 15}}>Logout</button>
          </RightLi>
        </ul>
      ) : (
        // 사용자가 로그인하지 않은 경우
        <ul>
          <LeftLi>
            <StyledLink to='/posts'>Recipe List</StyledLink>
          </LeftLi>
          <RightLi>
            <StyledLink to='/login'>Login</StyledLink>
            <StyledLink to='/signup'>Join</StyledLink>
          </RightLi>
        </ul>
      )}
    </NavWrapper>
  );
}

// 프로필 스타일
const Profile = styled.div`
  font-size: 18px;
  margin-right: 20px;
  color: white;
`;

// 네비게이션 바 스타일
const NavWrapper = styled.nav`
  width: 100%;
  height: 36px;
  background-color: var(--main-color);
  font-size: 24px;
  font-family: "NPSfontBold";
  padding: 8px 0px;
  line-height: 36px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  border-radius: 10px;
`;

// 스타일된 링크
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

// 왼쪽 목록 스타일
const LeftLi = styled.li`
  font-size: 18px;
  margin-left: 20px;
`;

// 오른쪽 목록 스타일
const RightLi = styled.li`
  font-size: 18px;
  margin-right: 20px;
  display: flex;
  gap: 20px;
`;

export default NavBar;

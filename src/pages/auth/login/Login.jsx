import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutWrapper } from '../../../layout/Layout';
import LoginAPI from '../../../api/auth/LoginAPI';
import {
  accessTokenAtom,
  csrfTokenAtom,
  isLoginAtom,
  userNameAtom,
} from '../../../atom/Atom';

// 로그인 페이지 컴포넌트
function Login() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isPwValid, setIsPwValid] = useState(null);

  const [ setAccessToken] = useRecoilState(accessTokenAtom);
  const [ setCsrfToken] = useRecoilState(csrfTokenAtom);
  const [ setIsLogin] = useRecoilState(isLoginAtom);
  const [ setUserName] = useRecoilState(userNameAtom);

  const navigate = useNavigate();

  // 아이디 유효성 검사
  function idValidCheck(event) {
    setUserId(event.target.value);
  }

  // 비밀번호 유효성 검사
  function pwValidCheck(event) {
    setUserPassword(event.target.value);
    const testPassword = /^[A-Za-z0-9]{6,20}$/;
    if (userPassword !== '' && userPassword.match(testPassword)) {
      setIsPwValid(true);
    } else {
      setIsPwValid(false);
    }
  }

  // 로그인 양식 제출 처리
  const onHandleSubmit = async () => {
    const data = {
      username: userId,
      password: userPassword,
    };
    try {
      const res = await LoginAPI(data);
      alert('어서오세요!');
      setAccessToken(res.access_token);
      setCsrfToken(res.csrf_token);
      setUserName(res.username);
      setIsLogin(true);
      navigate('/');
    } catch (err) {
      console.log('아이디 비밀번호를 확인하세요.');
    }
  };

  useEffect(() => {
    // 이 부분에서 useEffect에 필요한 동작을 추가
  }, []);

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Title>로그인</Title>
        <Input
          label='아이디'
          type='text'
          id='userId'
          name='userId'
          placeholder=''
          value={userId}
          onChange={idValidCheck}
        />
        <Input
          label='비밀번호'
          type='password'
          id='userPw'
          name='userPw'
          placeholder=''
          value={userPassword}
          onChange={pwValidCheck}
          isvalid={isPwValid}
          errmsg='* 6자리 이상 입력하세요.'
        />
        <Button type='submit' content='로그인' style={{ marginTop: '50px' }} />
        <Link
          to={'/join'}
          style={{
            width: '100px',
            height: '30px',
            textDecoration: 'none',
            textAlign: 'center',
            marginTop: '30px',
            color: 'inherit',
          }}
        >
          회원가입
        </Link>
      </Wrapper>
    </form>
  );
}

// 페이지 타이틀 스타일
export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  color: var(--main-color);
  font-family: 'yg-jalnan';
`;

// 컨테이너 스타일
const Wrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;

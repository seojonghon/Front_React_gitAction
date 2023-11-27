import { useState } from 'react';
import { styled } from 'styled-components';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { LayoutWrapper } from '../../../layout/Layout'
import { Title } from '../login/Login';
import SignupAPI from '../../../api/auth/SignupAPI';
import { useNavigate } from 'react-router-dom';

// 회원가입 페이지 컴포넌트
function Signup() {
  const [userId, setUserId] = useState('');
  const [userIdValid] = useState(true);
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
  });

  // 아이디 입력값 변경 처리
  const changeUserId = (e) => {
    const newUserId = e.target.value;
    setUserId(newUserId);
  };

  // 비밀번호 입력값 변경 처리
  const changeUserPw = (e) => {
    const newUserPw = e.target.value;
    setUserPassword(newUserPw);
  };

  // 비밀번호 확인 입력값 변경 처리
  const changeUserPwCheck = (e) => {
    const newUserPwCheck = e.target.value;
    setUserPasswordCheck(newUserPwCheck);
  };

  // 이메일 입력값 변경 처리
  const changeUserEmail = (e) => {
    const newUserEmail = e.target.value;
    setUserEmail(newUserEmail);
  };

  // 회원가입 양식 제출 처리
  const onHandleSubmit = async () => {
    handleEmailValid();
    handlePasswordValid();

    if (passwordValid && emailValid) {
      const updateUserInfo = {
        ...userInfo,
        username: userId,
        password: userPassword,
        email: userEmail,
      };
      await setUserInfo(updateUserInfo);
      const res = await SignupAPI(updateUserInfo);
      if (res.message === '회원가입 성공') {
        alert('환영합니다!');
        navigate('/Login');
      }
    }
  };

  // 이메일 유효성 검사
  const handleEmailValid = () => {
    const testEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        userEmail
      );
    if (!testEmail) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  // 비밀번호 확인 처리
  const handlePasswordValid = () => {
    if (userPassword !== userPasswordCheck) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  // 회원가입 양식 제출 이벤트 핸들러
  function handleSubmit(e) {
    e.preventDefault();
    onHandleSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Title>회원가입</Title>
        <Input
          label='아이디'
          type='text'
          id='userId'
          name='userId'
          placeholder=''
          value={userId}
          onChange={changeUserId}
          isvalid={userIdValid}
          errmsg='이미 가입된 아이디입니다.'
        />
        <Input
          label='비밀번호'
          type='password'
          id='userPw'
          name='userPw'
          placeholder=''
          value={userPassword}
          onChange={changeUserPw}
        />
        <Input
          label='비밀번호 확인'
          type='password'
          id='userPwCheck'
          name='userPwCheck'
          placeholder=''
          value={userPasswordCheck}
          onChange={changeUserPwCheck}
          isvalid={passwordValid}
          errmsg='* 비밀번호가 일치하지 않습니다.'
        />
        <Input
          label='이메일'
          type='email'
          id='userEmail'
          name='userEmail'
          placeholder=''
          value={userEmail}
          onChange={changeUserEmail}
          isvalid={emailValid}
          errmsg='* 올바른 이메일 형식이 아닙니다.'
        />
        <Button
          type='submit'
          content='아이디 생성'
          style={{ marginTop: '50px' }}
        />
      </Wrapper>
    </form>
  );
}

const Wrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Signup;

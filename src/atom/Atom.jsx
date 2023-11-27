import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// recoil-persist를 사용하여 상태를 로컬 스토리지에 지속적으로 저장하는 설정
const { persistAtom } = recoilPersist();

// 엑세스 토큰 상태
export const accessTokenAtom = atom({
  key: 'accessToken',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom], // recoil-persist로 지속적인 상태 저장 설정 적용
});

// CSRF 토큰 상태
export const csrfTokenAtom = atom({
  key: 'csrfToken',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom], // recoil-persist로 지속적인 상태 저장 설정 적용
});

// 사용자 이름 상태
export const userNameAtom = atom({
  key: 'userName',
  default: '', // 초기값은 빈 문자열
  effects_UNSTABLE: [persistAtom], // recoil-persist로 지속적인 상태 저장 설정 적용
});

// 로그인 상태 상태
export const isLoginAtom = atom({
  key: 'isLogin',
  default: false, // 초기값은 false (로그아웃 상태)
  effects_UNSTABLE: [persistAtom], // recoil-persist로 지속적인 상태 저장 설정 적용
});

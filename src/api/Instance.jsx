import axios from 'axios';
import { URL } from './Url';

// Axios 인스턴스를 생성하는 함수
const createAxiosInstance = (token) => {
  // 기본 설정을 가진 Axios 인스턴스 생성
  const instance = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json' },
  });

  // 토큰을 포함한 Axios 인스턴스 생성
  const tokenInstance = axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // 두 개의 Axios 인스턴스를 반환
  return { instance, tokenInstance };
};

export default createAxiosInstance;

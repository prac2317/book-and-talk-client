import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as styles from './LoginPage.css';
import logo from '@assets/icons/Book-and-talk-text.png';
import { login, logout } from '../../api/auth.ts';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts[1];
    } else {
      return null;
    }
  };

  useEffect(() => {
    const cookie = getCookie('memberId');
    setIsAuthenticated(!!cookie);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLogin();
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
    }
  }


  const logout = async () => {
    try {
      const response = axios.get('http://localhost:8080/api/v1/auth/logout', {
        withCredentials: true,
      });
      console.log('로그아웃 성공', response);
      setIsAuthenticated(false);
    } catch (error) {
      console.log('로그아웃 실패', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logoImage} src={logo} alt="logo" />
      </div>

      {isAuthenticated ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <input
              className={styles.input}
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button className={styles.loginButton} type="submit">
              로그인
            </button>
          </form>
          <div className={styles.authButtons}>
            <Link to="/signup">아이디 찾기</Link> | <Link to="/signup">비밀번호 찾기</Link> |
            <Link to="/signup">회원가입</Link>
          </div>
        </>
      )}
      <Link to="/">
        <button>홈으로</button>
      </Link>
    </div>
  );
};

export default LoginPage;

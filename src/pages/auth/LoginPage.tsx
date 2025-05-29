import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './LoginPage.css';
import logo from '@assets/icons/Book-and-talk-text.png';
import { fetchMemberId, login, logout } from '../../api/auth.ts';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [memberId, setMemberId] = useState('');
  // const [isValidEmail, setIsValidEmail] = useState(false);
  useEffect(() => {
    loadMemberId();
  }, []);

  useEffect(() => {
    if (!memberId) {
      return;
    }
    setIsAuthenticated(true);
  }, [memberId]);

  const loadMemberId = async () => {
    try {
      const res = await fetchMemberId();
      console.log(res);
      setMemberId(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLogin();
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      console.log('로그아웃 성공');
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
        <button onClick={handleLogout}>로그아웃</button>
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

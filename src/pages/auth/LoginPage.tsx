import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    cookie ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Login();
  };

  const Login = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log('로그인 성공', response);
      setIsAuthenticated(true);
    } catch (error) {
      console.log('로그인 실패', error);
    }
  };

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
    <div>
      <div>Logo</div>

      {isAuthenticated ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button type="submit">로그인</button>
          </form>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginPage;

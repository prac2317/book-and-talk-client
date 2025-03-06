import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Login();
    console.log(email);
    console.log(password);
  };

  const Login = async () => {
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
    console.log(response);
  };

  return (
    <div>
      <div>Logo</div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button type="submit">로그인</button>
      </form>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
};

export default LoginPage;

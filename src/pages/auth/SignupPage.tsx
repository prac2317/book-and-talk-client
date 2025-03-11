import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signUp();
  };

  const signUp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', {
        email,
        nickname,
        password,
      });
      console.log('회원가입 성공', response);
      navigate('/login');
    } catch (error) {
      console.log('회원가입 실패', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h6>이메일</h6>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <h6>비밀번호</h6>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <h6>닉네임</h6>
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <button type="submit">회원가입</button>
      </form>
      <Link to="/login">
        <button>로그인으로</button>
      </Link>
    </div>
  );
};

export default SignupPage;

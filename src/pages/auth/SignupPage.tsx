import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(nickname);
    console.log(password);
    console.log('회원가입 전');
    await signUp();
    console.log('회원가입 후');
  };

  const signUp = async () => {
    console.log('signUp 시작');
    const response = await axios.post('http://localhost:8080/api/v1/auth/signup', {
      email,
      nickname,
      password,
    });

    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
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

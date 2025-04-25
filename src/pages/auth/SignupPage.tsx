import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as styles from './SignupPage.css';
import logo from '@assets/icons/Book-and-talk-text.png';
import { signUp } from '@api/auth.ts';

const SignupPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitSignUp();
  };

  const submitSignUp = async () => {
    try {
      const res = await signUp(nickname, email, password);
      console.log('회원가입 성공', res);
      navigate('/login');
    } catch (error) {
      console.log('회원가입 실패', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logoImage} src={logo} alt="logo" />
      </div>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder={'닉네임'}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder={'이메일'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder={'비밀번호'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.signupButton} type="submit">
          회원가입
        </button>
      </form>
      <Link className={styles.authButtons} to="/login">
        로그인으로 돌아가기
      </Link>
    </div>
  );
};

export default SignupPage;

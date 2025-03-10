import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/login">
      <button>이메일로 로그인</button>
    </Link>
  </div>
);

export default Home;

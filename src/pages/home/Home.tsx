import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100px',
        gap: '20px',
      }}
    >
      <h1>Home</h1>
      <Link to="/login">
        <button>이메일로 로그인</button>
      </Link>
      <Link to="/books/9791162540640">
        <button>책 상세 페이지</button>
      </Link>
      <Link to="/clubs/1">
        <button>모임 상세 페이지</button>
      </Link>
    </div>
  </div>
);

export default Home;

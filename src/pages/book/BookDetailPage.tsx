import { Link, useNavigate, useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const navigate = useNavigate();
  const bookTitle = '책 제목입니다';
  const { isbn13 } = useParams();

  const createClub = () => {
    navigate('/clubs/create', {
      state: { bookTitle, isbn13 },
    });
  };

  return (
    <>
      <h2>책 상세 페이지</h2>
      <h3>isbn13: {isbn13}</h3>
      <h3>제목: {bookTitle}</h3>

      <button onClick={createClub}>모임 만들기</button>

      <Link to="/clubs/3">
        <button>모임 상세 페이지</button>
      </Link>
    </>
  );
};

export default BookDetailPage;

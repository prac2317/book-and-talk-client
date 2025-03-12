import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface getClubListResponse {
  totalCount: number;
  data: clubOverview[];
}

interface clubOverview {
  clubId: number;
  bookTitle: string;
  name: string;
  currentParticipants: number;
  maxParticipants: number;
  status: string;
  startDate: string;
}

// interface getClubListRequest {
//   isbn13: string;
// }

const BookDetailPage = () => {
  const navigate = useNavigate();
  const bookTitle = '책 제목입니다';
  // const { isbn13 } = useParams();
  const isbn13 = '9791162540640';
  const [clubCount, setClubCount] = useState(0);
  const [clubList, setClubList] = useState<clubOverview[]>([]);

  useEffect(() => {
    getClubList();
  }, []);

  const createClub = () => {
    navigate('/clubs/create', {
      state: { bookTitle, isbn13 },
    });
  };

  const getClubList = async () => {
    const response = await axios.get<getClubListResponse>(`http://localhost:8080/api/v1/clubs`, {
      params: { isbn13 },
    });
    console.log('getClubList 발동');
    console.log(response);
    setClubList(response.data.data);
    setClubCount(response.data.totalCount);
  };

  return (
    <>
      <h2>책 상세 페이지</h2>
      <h3>isbn13: {isbn13}</h3>
      <h3>제목: {bookTitle}</h3>

      <button onClick={createClub}>모임 만들기</button>

      <div>{clubCount}</div>

      <Link to="/clubs/3">
        <button>모임 상세 페이지</button>
      </Link>
      <button onClick={getClubList}>모임 목록 조회 테스트버튼</button>
      {clubList.map((club) => (
        <div key={club.clubId}>
          <div>{club.bookTitle}</div>
          <div>{club.name}</div>
          <div>{club.currentParticipants}</div>
          <div>{club.maxParticipants}</div>
          <div>{club.startDate}</div>
          <div>{club.status}</div>
        </div>
      ))}
    </>
  );
};

export default BookDetailPage;

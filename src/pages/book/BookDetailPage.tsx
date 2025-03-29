import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as styles from './BookDetailPage.css';
import groupImageExampple from '@assets/icons/img.png';
import BookCard from '@features/book/components/BookCard.tsx';

interface bookDetail {
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
}

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

const BookDetailPage = () => {
  const navigate = useNavigate();
  const bookTitle = '책 제목입니다';
  const { isbn13 } = useParams();
  const [clubCount, setClubCount] = useState(0);
  const [clubList, setClubList] = useState<clubOverview[]>([]);
  const [bookDetail, setBookDetail] = useState<bookDetail>({
    thumbnail: '',
    title: '',
    author: '',
    publisher: '',
    publishedDate: '',
    isbn13: '',
    description: '책 소개입니다.',
  });

  const mockData = [
    {
      clubId: 1,
      bookTitle: '아주 작은 습관의 힘',
      name: '북토피아 북클럽',
      currentParticipants: 3,
      maxParticipants: 10,
      status: '모집중',
      startDate: '2021-06-01',
    },
  ];

  useEffect(() => {
    setClubList(mockData);

    fetchBookDetail();

    getClubList();
  }, [isbn13]);

  const createClub = () => {
    navigate('/clubs/create', {
      state: { bookDetail },
    });
  };

  const navigateToClubDetail = (clubId: number) => {
    navigate(`/clubs/${clubId}`);
  };

  // Todo: 알라딘 검색으로 바꾸기
  const fetchBookDetail = async () => {
    if (!isbn13) return;

    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v3/search/book?target=isbn&query=${isbn13}`,
        {
          headers: { Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}` },
        },
      );
      const bookResponse = response.data.documents[0];

      setBookDetail({
        thumbnail: bookResponse.thumbnail,
        title: bookResponse.title,
        author: bookResponse.authors[0],
        publisher: bookResponse.publisher,
        publishedDate: bookResponse.datetime,
        isbn13: isbn13,
        description: bookResponse.contents ? bookResponse.contents : '책 소개입니다.',
      });

      console.log('카카오 검색 완료', response.data.documents[0]);
    } catch (error) {
      console.error('카카오 검색 실패', error);
    }
  };

  const getClubList = async () => {
    try {
      const response = await axios.get<getClubListResponse>(`http://localhost:8080/api/v1/clubs`, {
        params: { isbn13 },
      });
      console.log('클럽 리스트 불러오기 완료', response.data);
      setClubCount(response.data.totalCount);
      setClubList(response.data.data);
    } catch (error) {
      console.error('클럽 리스트 불러오기 실패', error);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </button>
      </div>
      <div className={styles.bookSection}>
        <BookCard bookDetail={bookDetail} />
        <div className={styles.bookDescriptionBox}>
          <div className={styles.bookDescriptionTitle}>책 소개</div>
          <text className={styles.bookDescription}>{bookDetail.description}</text>
        </div>
      </div>

      <div className={styles.clubSection}>
        <div className={styles.clubSectionHeader}>
          <h3>모임 리스트 {clubCount}개</h3>
          <button className={styles.clubCreateButton} onClick={createClub}>
            모임 만들기
          </button>
        </div>

        <div className={styles.clubContainer}></div>
        {clubList.map((club) => (
          <div
            className={styles.clubCard}
            key={club.clubId}
            onClick={() => navigateToClubDetail(club.clubId)}
          >
            <div>
              <img className={styles.clubThumbnail} src={groupImageExampple} alt="thumbnail" />
            </div>
            <div className={styles.clubOverview}>
              <div>{club.bookTitle}</div>
              <div>{club.name}</div>
              <div>
                {club.currentParticipants} / {club.maxParticipants}
              </div>
              <div>{club.startDate} </div>
            </div>
          </div>
        ))}
        <button onClick={getClubList}>모임 목록 조회 테스트버튼</button>
      </div>
    </>
  );
};

export default BookDetailPage;

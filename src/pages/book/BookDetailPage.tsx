import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as styles from './BookDetailPage.css';
import BookCard from '@features/book/components/BookCard.tsx';
import ClubCard from '@features/club/components/ClubCard';
import images from '@assets/icons/images';

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

interface getBookFavoriteResponse {
  isFavorite: boolean;
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
  const { isbn13 } = useParams();
  const [clubCount, setClubCount] = useState(0);
  const [clubList, setClubList] = useState<clubOverview[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [bookDetail, setBookDetail] = useState<bookDetail>({
    thumbnail: '',
    title: '',
    author: '',
    publisher: '',
    publishedDate: '',
    isbn13: '',
    description: '',
  });

  useEffect(() => {
    fetchBookDetail();
    getClubList();
  }, [isbn13]);

  useEffect(() => {
    getBookFavorite();
  }, [isFavorite]);

  const createClub = () => {
    navigate('/clubs/create', {
      state: { bookDetail },
    });
  };
  const getBookFavorite = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/favorites/books/relation`,  {
        params: { isbn13 },
        withCredentials: true,
      });
      setIsFavorite(response.data.isFavorite);
      console.log('책 즐겨찾기 여부 불러오기 성공', response.data);
    } catch (error) {
      console.error('책 즐겨찾기 여부 불러오기 실패', error);
    }
  };

  const postFavorite = async () => {
    try {
      await axios.post(`http://localhost:8080/api/v1/favorites/books`, {
        isbn13,
      },{
        withCredentials: true,
      });
      setIsFavorite(true);
      console.log('책 즐겨찾기 추가 성공');
    } catch (error) {
      console.error('책 즐겨찾기 추가 실패', error);
    }
  };

  const deleteFavorite = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/favorites/books/${isbn13}`, {
        withCredentials: true,
      });
      setIsFavorite(false);
      console.log('책 즐겨찾기 삭제 성공');
    } catch (error) {
      console.error('책 즐겨찾기 삭제 실패', error);
    }
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
        {isFavorite ? (
          <div  onClick={deleteFavorite}>
            <images.BookFavoriteFull className={styles.bookFavoriteIcon}/>
          </div>
        ) : (
          <div  onClick={postFavorite}>
            <images.BookFavoriteEmpty className={styles.bookFavoriteIcon} />
          </div>
        )}
      </div>
      <div className={styles.bookSection}>
        <BookCard isbn13={isbn13} isDetailPage={true} />
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

        <div className={styles.clubContainer}>
        {clubList.map((club) => (
          <ClubCard
            key={club.clubId}
            clubId={club.clubId}
            bookTitle={club.bookTitle}
            name={club.name}
            currentParticipants={club.currentParticipants}
            maxParticipants={club.maxParticipants}
            status={club.status}
            startDate={club.startDate}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default BookDetailPage;

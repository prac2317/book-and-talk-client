import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as styles from './BookCard.css';
import axios from 'axios';

interface BookDetail {
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
}

interface BookCardProps {
  isbn13?: string;
  isDetailPage?: boolean;
}

const BookCard = ({ isbn13, isDetailPage = false }: BookCardProps) => {
  const navigate = useNavigate();
  const [bookDetail, setBookDetail] = useState<BookDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log('책 카드 렌더링', isbn13);
    const loadBookDetail = async () => {
      try {
        await fetchBookDetail();
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch book detail'));
      } finally {
        setIsLoading(false);
      }
    };

    if (isbn13) {
      loadBookDetail();
    } else {
      setIsLoading(false);
    }
  }, [isbn13]);

  const fetchBookDetail = async () => {
    if (!isbn13) return;

    try {
      console.log('카카오 검색 시작', isbn13);
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

  const navigateToBookDetail = (isbn13: string) => {
    navigate(`/books/${isbn13}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !bookDetail) {
    return <div>Error loading book details</div>;
  }

  return (
    <div
      className={`${styles.bookCard} ${!isDetailPage ? styles.clickable : ''}`}
      onClick={() => !isDetailPage && isbn13 && navigateToBookDetail(isbn13)}
    >
      <img className={styles.bookThumbnail} src={bookDetail.thumbnail} alt="thumbnail" />
      <div className={styles.bookOverview}>
        <div className={styles.bookTitle}>{bookDetail.title}</div>
        <div className={styles.author}>{bookDetail.author}</div>
        <div className={styles.publisher}>
          <div>{bookDetail.publishedDate}</div>
          <div>{bookDetail.publisher}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

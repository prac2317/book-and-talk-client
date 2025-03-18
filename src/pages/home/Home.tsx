import { Link } from 'react-router-dom';
import * as styles from './Home.css';
import { useEffect, useState } from 'react';
import { getBookList } from '@api/book.ts';

// Bestseller, BlogBest, ItemNewAll

interface book {
  title: string;
  isbn13: string;
  cover: string;
}

const Home = () => {
  const [bookList, setBookList] = useState<book[]>([]);

  useEffect(() => {
    const loadBookList = async () => {
      const response = await getBookList('Bestseller');

      setBookList(response.data);
    };

    loadBookList();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div>로고 & 이름</div>
        <div>알림</div>
      </div>
      <div className={styles.searchSection}>searchSection</div>
      <div className={styles.categoryContainer}>
        <div className={styles.categorySection}>
          <div className={styles.categoryTitle}>bestsellerSection</div>
          <div className={styles.bookContainer}>
            {bookList.map((book, index) => (
              <div key={index} className={styles.book}>
                <div>{book.title}</div>
                <img src={book.cover} alt="cover" />
              </div>
            ))}
            <div className={styles.book}>book</div>
            <div className={styles.book}>book</div>
            <div className={styles.book}>book</div>
          </div>
        </div>
        <div className={styles.categorySection}>
          <div className={styles.categoryTitle}>blogBestSection</div>
          <div className={styles.bookContainer}>
            <div className={styles.book}>book</div>
            <div className={styles.book}>book</div>
            <div className={styles.book}>book</div>
          </div>
        </div>
        <div className={styles.categorySection}>
          <div className={styles.categoryTitle}>itemNewAllSection</div>
          <div className={styles.bookContainer}>
            <div className={styles.book}>book</div>
            <div className={styles.book}>book</div>
            <div className={styles.book}>book</div>
          </div>
        </div>
      </div>
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
};

export default Home;

import { Link, useNavigate } from 'react-router-dom';
import * as styles from './HomePage.css.ts';
import { useEffect, useState } from 'react';
import { getBookList } from '@api/book.ts';
import logoImage from '@assets/icons/small3.png';
import logoText from '@assets/icons/Logo-text.jpg';
import notification from '@assets/icons/Logo-Notification.jpg';
import searchBar from '@assets/icons/Logo-search-bar.jpg';

// Bestseller, BlogBest, ItemNewAll

interface Book {
  title: string;
  isbn13: string;
  cover: string;
}

const HomePage = () => {
  const [bestseller, setBestseller] = useState<Book[]>([]);
  const [blogBest, setBlogBest] = useState<Book[]>([]);
  const [itemNewAll, setItemNewAll] = useState<Book[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadBestseller = async () => {
      const res = await getBookList('Bestseller');
      setBestseller(res.data);
    };
    loadBestseller();

    const loadBlogBest = async () => {
      const res = await getBookList('BlogBest');
      setBlogBest(res.data);
    };
    loadBlogBest();

    const loadItemNewAll = async () => {
      const res = await getBookList('ItemNewAll');
      setItemNewAll(res.data);
    };
    loadItemNewAll();
  }, []);

  const goToNotifications = () => {
    navigate('/notifications');
  };

  const goToBookDetail = (isbn13: string) => {
    navigate(`/books/${isbn13}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoBox}>
          <img className={styles.logoImage} src={logoImage} alt="logo" />
          <img className={styles.logoText} src={logoText} alt="book-and-talk" />
        </div>
        <div>
          <img
            className={styles.notification}
            src={notification}
            alt="notification"
            onClick={goToNotifications}
          />
        </div>
      </div>
      <div className={styles.searchSection}>
        <img src={searchBar} alt="searchBar" />
      </div>
      <div className={styles.categorySection}>
        <div className={styles.categoryBox}>
          <div className={styles.categorySideDecoration}></div>
          <div className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>베스트셀러</h3>
            <div className={styles.bookBoxContainer}>
              {bestseller.map((book) => (
                <div
                  key={book.isbn13}
                  onClick={() => {
                    goToBookDetail(book.isbn13);
                  }}
                  className={styles.bookBox}
                >
                  <img className={styles.bookImage} src={book.cover} alt="cover" />
                  <text className={styles.bookTitle}>{book.title}</text>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.categoryBox}>
          <div className={styles.categorySideDecoration} />
          <div className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>블로거 추천 베스트</h3>
            <div className={styles.bookBoxContainer}>
              {blogBest.map((book) => (
                <div
                  key={book.isbn13}
                  onClick={() => {
                    goToBookDetail(book.isbn13);
                  }}
                  className={styles.bookBox}
                >
                  <img className={styles.bookImage} src={book.cover} alt="cover" />
                  <text className={styles.bookTitle}>{book.title}</text>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.categoryBox}>
          <div className={styles.categorySideDecoration} />
          <div className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>신간베스트</h3>
            <div className={styles.bookBoxContainer}>
              {itemNewAll.map((book) => (
                <div
                  key={book.isbn13}
                  onClick={() => {
                    goToBookDetail(book.isbn13);
                  }}
                  className={styles.bookBox}
                >
                  <img className={styles.bookImage} src={book.cover} alt="cover" />
                  <text className={styles.bookTitle}>{book.title}</text>
                </div>
              ))}
            </div>
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

export default HomePage;

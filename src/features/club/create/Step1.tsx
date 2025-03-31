import * as styles from './Step1.css';
import { useEffect } from 'react';
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

const Step1 = ({ bookDetail, goToNextStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <h1 className={styles.title}>이 책의 모임을 만들까요?</h1>
        <BookCard bookDetail={bookDetail} />
      </div>
      <div>
        <button className={styles.primaryButton} onClick={goToNextStep}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step1;

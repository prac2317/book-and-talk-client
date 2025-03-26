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
  useEffect(() => {
    // console.log(bookDetail.author);
  }, []);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>이 책의 모임을 만들까요?</h3>
      <BookCard bookDetail={bookDetail} />
      <div>
        {/*<button onClick={props.goToPrevStep}>이전으로</button>*/}
        <button onClick={goToNextStep}>다음으로</button>
      </div>
    </div>
  );
};

export default Step1;

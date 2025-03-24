import * as styles from './Step1.css';
import { useEffect } from 'react';

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
    <div>
      <h3>이 책의 모임을 만들까요?</h3>
      <div className={styles.bookCard}>
        <img className={styles.bookThumbnail} src={bookDetail.thumbnail} alt="thumbnail" />
        <div className={styles.bookOverview}>
          <div className={styles.bookTitle}>안녕 {bookDetail.title}</div>
          <div>{bookDetail.author}</div>
          <div>{bookDetail.publishedDate}</div>
          <div>{bookDetail.publisher}</div>
        </div>
      </div>
      <div>
        {/*<button onClick={props.goToPrevStep}>이전으로</button>*/}
        <button onClick={goToNextStep}>다음으로</button>
      </div>
    </div>
  );
};

export default Step1;

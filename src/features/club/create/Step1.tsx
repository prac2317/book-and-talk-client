import * as styles from './Step1.css';
import BookCard from '@features/book/components/BookCard.tsx';
import { Step1Props } from '@type/club';

const Step1 = ({ bookDetail, goToNextStep }: Step1Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <h1 className={styles.title}>이 책의 모임을 만들까요?</h1>
        <BookCard isbn13={bookDetail.isbn13} />
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

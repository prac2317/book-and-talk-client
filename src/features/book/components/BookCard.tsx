import * as styles from './BookCard.css';

interface bookDetail {
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
}

const BookCard = ({ bookDetail }: { bookDetail: bookDetail }) => {
  return (
    <div className={styles.bookCard}>
      <img className={styles.bookThumbnail} src={bookDetail.thumbnail} alt="thumbnail" />
      <div className={styles.bookOverview}>
        <div className={styles.bookTitle}>{bookDetail.title}</div>
        <div>{bookDetail.author}</div>
        <div>{bookDetail.publishedDate}</div>
        <div>{bookDetail.publisher}</div>
      </div>
    </div>
  );
};

export default BookCard;

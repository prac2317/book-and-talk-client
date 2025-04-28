import { useEffect, useState } from 'react';
import * as styles from './FavoriteListPage.css';
import ClubCard from '@features/club/components/ClubCard';
import BookCard from '@features/book/components/BookCard';
import { fetchbookFavoriteList, fetchClubFavoriteList } from '@api/favorite.ts';
type TabType = 'book' | 'club';

interface Club {
  clubId: number;
  bookTitle: string;
  name: string;
  currentParticipants: number;
  maxParticipants: number;
  status: string;
  startDate: string;
}
//
// interface ClubResponse {
//   totalCount: number;
//   data: Club[];
// }
//
// interface Book {
//   isbn13: string;
// }
//
// interface BookResponse {
//   totalCount: number;
//   data: Book[];
// }

const FavoriteListPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('book');
  const [bookList, setBookList] = useState<string[]>([]);
  const [clubList, setClubList] = useState<Club[]>([]);

  useEffect(() => {
    loadClubFavoriteList();
    loadBookFavoriteList();
  }, [activeTab]);

  const loadClubFavoriteList = async () => {
    try {
      const res = await fetchClubFavoriteList();
      console.log('클럽 즐겨찾기 목록 불러오기 성공', res);
      setClubList(res.data);
    } catch (error) {
      console.error('클럽 즐겨찾기 불러오기 목록 실패', error);
    }
  };

  const loadBookFavoriteList = async () => {
    try {
      const res = await fetchbookFavoriteList();
      console.log('책 즐겨찾기 목록 불러오기 성공', res);
      setBookList(res.data);
    } catch (error) {
      console.error('책 즐겨찾기 목록 불러오기 실패', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>즐겨찾기</h1>

      <div className={styles.tabSection}>
        <button
          className={`${styles.tab} ${activeTab === 'book' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('book')}
        >
          책
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'club' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('club')}
        >
          모임
        </button>
      </div>

      <div className={styles.contentSection}>
        {activeTab === 'book' ? (
          <div className={styles.bookContainer}>
            {bookList.map((book) => (
              <BookCard key={book} isbn13={book} isDetailPage={true} />
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default FavoriteListPage;

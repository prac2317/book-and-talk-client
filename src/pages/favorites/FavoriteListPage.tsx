import { useEffect, useState } from 'react';
import * as styles from './FavoriteListPage.css';
import ClubCard from '@features/club/components/ClubCard';
import BookCard from '@features/book/components/BookCard';
import axios from 'axios';
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

interface ClubResponse {
  totalCount: number;
  data: Club[];
}

interface Book {
  isbn13: string;
}

interface BookResponse {
  totalCount: number;
  data: Book[];
}

const mockClubs: ClubResponse = {
  totalCount: 3,
  data: [
    {
      clubId: 1,
      bookTitle: "아주 작은 습관의 힘",
      name: "독서 모임 환영합니다",
      currentParticipants: 1,
      maxParticipants: 10,
      status: "모집중",
      startDate: "2024-04-01"
    },
    {
      clubId: 2,
      bookTitle: "미움받을 용기",
      name: "아들러 심리학 스터디",
      currentParticipants: 5,
      maxParticipants: 8,
      status: "모집중",
      startDate: "2024-04-15"
    },
    {
      clubId: 3,
      bookTitle: "부자 아빠 가난한 아빠",
      name: "재테크 독서 모임",
      currentParticipants: 3,
      maxParticipants: 12,
      status: "모집중",
      startDate: "2024-04-20"
    }
  ]
};

const mockBooks: BookResponse = {
  totalCount: 3,
  data: [
    {
      isbn13: "9791162540640",
    },
    {
      isbn13: "9788996991342",
    },
    {
      isbn13: "9788982732362",
    }
  ]
};

const FavoriteListPage = () => {

  const [activeTab, setActiveTab] = useState<TabType>('book');
  const [bookList, setBookList] = useState<string[]>([]);
  const [clubList, setClubList] = useState<Club[]>([]);

  useEffect(() => {
    getClubFavoriteList();
    getBookFavoriteList();
  }, [activeTab]);

  const getClubFavoriteList = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/favorites/clubs', {
            withCredentials: true,
          });
          console.log('클럽 즐겨찾기 불러오기 성공', response.data);
          setClubList(response.data.data);
    } catch (error) {
        console.error('클럽 즐겨찾기 불러오기 실패', error);
    }
  };

  const getBookFavoriteList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/favorites/books', {
        withCredentials: true,
      });
      console.log('책 즐겨찾기 불러오기 성공', response.data);
      setBookList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('책 즐겨찾기 불러오기 실패', error);
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
              <BookCard
                key = {book}
                isbn13={book}
                isDetailPage={true}
              />
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

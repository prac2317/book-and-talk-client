import { useState } from 'react';
import * as styles from './FavoriteListPage.css';
import ClubCard from '@features/club/components/ClubCard';
import BookCard from '@features/book/components/BookCard';

type TabType = 'books' | 'clubs';

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
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
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
      thumbnail: "https://example.com/book1.jpg",
      title: "아주 작은 습관의 힘",
      author: "제임스 클리어",
      publishedDate: "2020-01-01",
      publisher: "비즈니스북스",
      isbn13: "9791162540640",
      description: "작은 습관의 놀라운 힘을 다룬 책"
    },
    {
      thumbnail: "https://example.com/book2.jpg",
      title: "미움받을 용기",
      author: "기시미 이치로",
      publishedDate: "2019-03-15",
      publisher: "인플루엔셜",
      isbn13: "9788996991342",
      description: "아들러 심리학을 통한 행복한 삶의 방법"
    },
    {
      thumbnail: "https://example.com/book3.jpg",
      title: "부자 아빠 가난한 아빠",
      author: "로버트 기요사키",
      publishedDate: "2018-06-20",
      publisher: "민음인",
      isbn13: "9788982732362",
      description: "부자들의 돈 관리 철학"
    }
  ]
};

const FavoriteListPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('books');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>즐겨찾기</h1>
      
      <div className={styles.tabSection}>
        <button 
          className={`${styles.tab} ${activeTab === 'books' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('books')}
        >
          책
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'clubs' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('clubs')}
        >
          모임
        </button>
      </div>

      <div className={styles.contentSection}>
        {activeTab === 'books' ? (
          <div className={styles.bookContainer}>
            {mockBooks.data.map((book) => (
              <BookCard
                key={book.isbn13}
                isbn13={book.isbn13}
              />
            ))}
          </div>
        ) : (
          <div className={styles.clubContainer}>
            {mockClubs.data.map((club) => (
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

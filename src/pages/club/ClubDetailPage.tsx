import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as styles from './ClubDetailPage.css';

interface getClubDetailResponse {
  clubId: string;
  name: string;
  bookTitle: string;
  currentParticipants: number;
  maxParticipants: number;
  startDate: string;
  duration: number;
  groupDescription: string;
  isbn13: string;
  createdAt: string;
}

const ClubDetailPage = () => {
  const { clubId } = useParams();
  const [clubDetail, setClubDetail] = useState<getClubDetailResponse>({
    clubId: '',
    name: '',
    bookTitle: '',
    currentParticipants: 0,
    maxParticipants: 0,
    startDate: '',
    duration: 0,
    groupDescription: '',
    isbn13: '',
    createdAt: '',
  });

  useEffect(() => {
    console.log(clubId);
    axios
      .get<getClubDetailResponse>(`http://localhost:8080/api/v1/clubs/${clubId}`)
      .then((response) => {
        setClubDetail(response.data);
      });
  }, []);

  const onClickDetail = () => {
    console.log(clubDetail);
  };

  const deleteClub = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/clubs/${clubId}`);
      console.log('삭제 성공');
    } catch (error) {
      console.log('삭제 실패', error);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <Link to={`/`}>
            <button>뒤로가기</button>
          </Link>
        </div>
        <div className={styles.actionButtons}>
          <button onClick={onClickDetail}>테스트용버튼</button>
          <button onClick={deleteClub}>모임 삭제</button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.pictureBox}>사진 영역</div>

        <div className={styles.titleSection}>
          <h2>{clubDetail.name}</h2>
        </div>

        <div className={styles.overviewSection}>
          <h3>모임 개요</h3>
          <div className={styles.overviewBox}>
            <div className={styles.bookTitle}>{clubDetail.bookTitle}</div>
            <div className={styles.startDate}>{clubDetail.startDate}</div>
            <div className={styles.member}>
              {clubDetail.currentParticipants}/{clubDetail.maxParticipants}
            </div>
          </div>
        </div>

        <div className={styles.descriptionSection}>
          <h3>소개글</h3>
          <div className={styles.descriptionBox}>
            <div>{clubDetail.groupDescription}</div>
          </div>
        </div>

        <div className={styles.membersSection}>
          <h3>참여 멤버</h3>
          <div className={styles.membersBox}>
            <div>오소리</div>
            <div>담비</div>
            <div>다람쥐</div>
          </div>
        </div>

        <div className={styles.locationSection}>
          <h3>지역</h3>
          <div className={styles.locationBox}></div>
        </div>

        <div className={styles.buttonSection}>
          <button>신청자 목록</button>
        </div>
      </div>
    </>
  );
};

export default ClubDetailPage;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './ClubDetailPage.css';
import images from '@assets/icons/images';

interface getClubDetailResponse {
  clubId: number;
  name: string;
  bookTitle: string;
  currentParticipant: number;
  maxParticipants: number;
  startDate: string;
  duration: number;
  clubDescription: string;
  isbn13: string;
  createdAt: string;
}

interface getClubMemberResponse {
  data: memberInformation[];
}

interface memberInformation {
  isHost: boolean;
  memberId: number;
  nickname: string;
}

const ClubDetailPage = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const [clubDetail, setClubDetail] = useState<getClubDetailResponse>({
    clubId: 0,
    name: '',
    bookTitle: '',
    currentParticipant: 0,
    maxParticipants: 0,
    startDate: '',
    duration: 0,
    clubDescription: '',
    isbn13: '',
    createdAt: '',
  });
  const [clubMember, setClubMember] = useState<memberInformation[]>([]);
  const titleLocation = 160;
  const [showHeaderBackgroundColor, setShowHeaderBackgroundColor] = useState(false);

  const date = new Date();
  const dateString = date.toLocaleDateString();

  const clubDetailMockData = {
    clubId: 3,
    name: '북토피아 북클럽',
    bookTitle: '아주 작은 습관의 힘',
    currentParticipant: 3,
    maxParticipants: 10,
    startDate: dateString,
    duration: 3,
    clubDescription:
      '북토피아 북클럽 멤버를 모집합니다.\n\n' +
      "이번 모임에선 '아주 작은 습관의 힘'을 읽습니다\n\n" +
      '읽고 독후감 (분량 상관없음) 작성과 느낀 점을 다같이 짧게 나눌 예정입니다.\n\n' +
      '관심 있으신 분들은 편하게 신청해주세요 :)',
    isbn13: '9791162540640',
    createdAt: '2019-09-09T00:00:00.000Z',
  };

  const clubMemberMockData = [
    {
      isHost: true,
      memberId: 1,
      nickname: '오소리',
    },
    {
      isHost: false,
      memberId: 2,
      nickname: '담비',
    },
    {
      isHost: false,
      memberId: 3,
      nickname: '다람쥐',
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  useEffect(() => {
    setClubMember(clubMemberMockData);
    setClubDetail(clubDetailMockData);
    getClubDetail();
  }, []);

  const handleScrollY = () => {
    if (window.scrollY > titleLocation) {
      setShowHeaderBackgroundColor(true);
    } else {
      setShowHeaderBackgroundColor(false);
    }
  };

  const getClubDetail = async () => {
    try {
      await axios
        .get<getClubDetailResponse>(`http://localhost:8080/api/v1/clubs/${clubId}`)
        .then((response) => {
          setClubDetail(response.data);
          console.log(response.data);
        });
      console.log('클럽 상세 정보 연동 완료');
    } catch (error) {
      console.error('클럽 상세 정보 연동 실패', error);
    }
  };

  const deleteClub = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/clubs/${clubId}`);
      navigate('-1');
      console.log('삭제 성공');
    } catch (error) {
      console.log('삭제 실패', error);
    }
  };

  const onClickDetail = () => {
    console.log(clubDetail);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.header} ${showHeaderBackgroundColor ? styles.headerBackgroundColor : ''}`}
      >
        <div>
          <button
            className={styles.iconButton}
            onClick={() => {
              navigate('-1');
            }}
          >
            <img src={images.backImage} alt="back" />
          </button>
        </div>
        <div className={styles.actionButtons}>
          <button onClick={deleteClub} className={styles.iconButton}>
            <img src={images.clubDeleteImage} alt="delete" />
          </button>
          <button onClick={onClickDetail} className={styles.iconButton}>
            <img src={images.clubUpdateImage} alt="update" />
          </button>
        </div>
      </div>

      <img className={styles.pictureBox} src={images.clubBackgroundImage} alt="background" />

      <div className={styles.titleSection}>
        <h2>{clubDetail.name}</h2>
      </div>
      <div className={styles.contentsContainer}>
        <div className={styles.overviewSection}>
          <h3>모임 개요</h3>
          <div className={styles.overviewBox}>
            <div className={styles.bookTitle}>
              <img src={images.clubBookImage} alt="bookTitle" />
              <span>{clubDetail.bookTitle} </span>
            </div>
            <div className={styles.startDate}>
              <img src={images.clubClockImage} alt="date" />
              <span>{clubDetail.startDate}</span>
            </div>
            <div className={styles.memberCount}>
              <img src={images.clubMemberImage} alt="member" />
              <span>
                {clubDetail.currentParticipant}/{clubDetail.maxParticipants}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.descriptionSection}>
          <h3>소개글</h3>
          <div className={styles.descriptionBox}>
            <div>{clubDetail.clubDescription}</div>
          </div>
        </div>

        <div className={styles.membersSection}>
          <h3>
            참여 멤버 ({clubDetail.currentParticipants} / {clubDetail.maxParticipants})
          </h3>
          <div className={styles.membersBox}>
            {clubMember.map((member) => (
              <div className={styles.member}>
                <img className={styles.memberProfileImage} src={images.memberImage} alt="member" />
                <span>{member.nickname}</span>
                <span>
                  {member.isHost ? (
                    <img
                      className={styles.memberHostImage}
                      src={images.memberHostImage}
                      alt="host"
                    />
                  ) : (
                    ''
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.locationSection}>
          <h3>지역</h3>
          <img className={styles.locationImage} src={images.mapExampleImage} alt="map"></img>
        </div>

        <div className={styles.buttonSection}>
          <button className={styles.button}>신청자 목록</button>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailPage;

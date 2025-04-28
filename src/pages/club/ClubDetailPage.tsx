import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './ClubDetailPage.css';
import images from '@assets/icons/images';
import ClubApplicantModal from '@features/club/application/ApplicantManagement/ClubApplicantModal.tsx';
import { fetchClubDetail, fetchClubMember, fetchVisitorClubRelation } from '@api/club.ts';
import { fetchClubFavorite, deleteClubFavorite, postClubFavorite } from '@api/favorite.ts';
import { cancelApplication } from '@api/application.ts';

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
//
// interface getClubVisitorResponse {
//   data: memberInformation[];
// }

interface memberInformation {
  isHost: boolean;
  memberId: number;
  nickname: string;
}

// interface getClubFavoriteResponse {
//   isFavorite: boolean;
// }

// type VisitorStatus = 'HOST' | 'MEMBER' | 'APPLICANT' | 'NONE';

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
  const [visitorStatus, setVisitorStatus] = useState('NONE');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

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
    setClubDetail(clubDetailMockData);
    setClubMember(clubMemberMockData);
    loadClubDetail();
    loadClubMember();
    loadVisitorClubRelation();
  }, [isModalOpen, clubId]);

  useEffect(() => {
    loadClubFavorite();
  }, [isFavorite]);

  const handleScrollY = () => {
    if (window.scrollY > titleLocation) {
      setShowHeaderBackgroundColor(true);
    } else {
      setShowHeaderBackgroundColor(false);
    }
  };

  const loadClubDetail = async () => {
    if (!clubId) return;
    try {
      const res = await fetchClubDetail(clubId);
      setClubDetail(res);
      console.log('클럽 상세 정보 연동 완료');
    } catch (error) {
      console.error('클럽 상세 정보 연동 실패', error);
    }
  };

  const loadClubMember = async () => {
    if (!clubId) return;
    try {
      const res = await fetchClubMember(clubId);
      console.log(res);
      setClubMember(res.data);
      console.log('클럽 멤버 불러오기', res);
    } catch (error) {
      console.log('클럽 멤버 불러오기 실패', error);
    }
  };

  const loadVisitorClubRelation = async () => {
    if (!clubId) return;
    try {
      const res = await fetchVisitorClubRelation(clubId);
      console.log(res);
      setVisitorStatus(res.relation);
    } catch (error) {
      console.error('방문자-클럽 관계 불러오기 실패', error);
    }
  };

  const openApplicantModal = () => {
    setIsModalOpen(true);
  };

  const handleCancelApplication = async () => {
    if (!clubId) return;

    try {
      await cancelApplication(clubId);
      setVisitorStatus('NONE');
      console.log('참가 신청 취소 완료');
    } catch (error) {
      console.log('참가 신청 취소 실패', error);
    }
  };

  const goToChatRoom = () => {
    navigate('/chat'); // TODO: 채팅방으로 직행하도록 바꾸기!
  };

  // NONE
  const goToApplicationForm = () => {
    navigate(`/clubs/applications`, {
      state: {
        clubId: clubId,
        clubName: clubDetail.name,
      },
    });
  };

  const deleteClub = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/clubs/${clubId}`);
      navigate(-1);
      console.log('삭제 성공');
    } catch (error) {
      console.log('삭제 실패', error);
    }
  };

  const onClickDetail = () => {
    console.log(clubDetail);
  };

  const loadClubFavorite = async () => {
    if (!clubId) return;

    try {
      const res = await fetchClubFavorite(clubId);
      setIsFavorite(res.isFavorite);
      console.log('클럽 즐겨찾기 여부 불러오기 성공', res.isFavorite);
    } catch (error) {
      console.error('클럽 즐겨찾기 여부 불러오기 실패', error);
    }
  };

  const toggleClubFavorite = async () => {
    if (!clubId) return;

    try {
      if (isFavorite) {
        await deleteClubFavorite(clubId);
        console.log('클럽 즐겨찾기 추가 성공');
      } else {
        await postClubFavorite(clubId);
        console.log('클럽 즐겨찾기 삭제 성공');
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('클럽 즐겨찾기 추가/삭제 실패', error);
    }
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
              navigate(-1);
            }}
          >
            <img src={images.backImage} alt="back" />
          </button>
        </div>
        <div className={styles.actionButtons}>
          {visitorStatus === 'HOST' && (
            <button onClick={deleteClub} className={styles.iconButton}>
              <img src={images.clubDeleteImage} alt="delete" />
            </button>
          )}
          {visitorStatus === 'HOST' && (
            <button onClick={onClickDetail} className={styles.iconButton}>
              <img src={images.clubUpdateImage} alt="update" />
            </button>
          )}
          {visitorStatus !== 'HOST' && isFavorite && (
            <button onClick={toggleClubFavorite} className={styles.iconButton}>
              <img src={images.clubFavoriteFull} alt="favorite" />
            </button>
          )}
          {visitorStatus != 'HOST' && !isFavorite && (
            <button onClick={toggleClubFavorite} className={styles.iconButton}>
              <img src={images.clubFavoriteEmpty} alt="favorite" />
            </button>
          )}
        </div>
      </div>

      <img className={styles.pictureBox} src={images.clubBackgroundImage} alt="background" />

      <div className={styles.titleSection}>
        <div>{clubDetail.name}</div>
      </div>
      <div className={styles.contentsContainer}>
        <div className={styles.overviewSection}>
          <div className={styles.overviewTitle}>모임 개요</div>
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
          <div className={styles.descriptionTitle}>소개글</div>
          <div className={styles.descriptionBox}>
            <div>{clubDetail.clubDescription}</div>
          </div>
        </div>

        <div className={styles.membersSection}>
          <div className={styles.memberTitle}>
            참여 멤버 ({clubDetail.currentParticipant} / {clubDetail.maxParticipants})
          </div>
          <div className={styles.membersBox}>
            {clubMember.map((member, index) => (
              <div className={styles.member} key={index}>
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
          <div className={styles.locationTitle}>지역</div>
          <img className={styles.locationImage} src={images.mapExampleImage} alt="map"></img>
        </div>

        <div className={styles.buttonSection}>
          {visitorStatus === 'HOST' && (
            <button className={styles.button} onClick={openApplicantModal}>
              신청자 목록
            </button>
          )}
          {visitorStatus === 'MEMBER' && (
            <button className={styles.button} onClick={goToChatRoom}>
              채팅하러 가기
            </button>
          )}
          {visitorStatus === 'APPLICANT' && (
            <button className={styles.button} onClick={handleCancelApplication}>
              신청 취소
            </button>
          )}
          {visitorStatus === 'NONE' && (
            <button className={styles.button} onClick={goToApplicationForm}>
              가입 신청
            </button>
          )}
        </div>
      </div>
      {isModalOpen && <div className={styles.overlay} />}
      <ClubApplicantModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        clubId={clubId}
      />
    </div>
  );
};

export default ClubDetailPage;

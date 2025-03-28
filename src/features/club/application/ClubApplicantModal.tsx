import * as styles from './ClubApplicantModal.css';
import images from '@assets/icons/images';
import ApplicantList from './ApplicantList.tsx';
import ApplicantDetail from './ApplicantDetail.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface applicantOverview {
  applicationId: number;
  questionAnswer: string;
  createAt: string;
  memberId: number;
  profileImage: string;
  nickname: string;
}

const ClubApplicantModal = ({ isModalOpen, setIsModalOpen, clubId }) => {
  const [applicantOverviews, setApplicantOverviews] = useState<applicantOverview[]>([
    {
      applicationId: 0,
      questionAnswer: '독후감 쓰는 것을 좋아해서 썼어요!',
      createAt: '나중에',
      memberId: 0,
      profileImage: '이미지 없음',
      nickname: '닉네임1',
    },
  ]);
  const [showApplicantDetail, setShowApplicantDetail] = useState(false);
  const [selectedApplicantDetail, setSelectedApplicantDetail] = useState<applicantOverview | null>(
    null,
  );

  useEffect(() => {
    getApplicants();
  }, []);

  const getApplicants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/clubs/${clubId}/applications`,
        {
          withCredentials: true,
        },
      );
      setApplicantOverviews(response.data.data);
    } catch (error) {
      console.error('참가 신청자 목록 불러오기 실패', error);
    }
  };

  const handleBack = () => {
    if (showApplicantDetail) {
      setShowApplicantDetail(false);
      setSelectedApplicantDetail(null);
    } else {
      setIsModalOpen(false);
    }
  };

  const selectApplicant = (applicantOverview: applicantOverview) => {
    setSelectedApplicantDetail(applicantOverview);
    console.log(applicantOverview);
    setShowApplicantDetail(true);
  };

  return (
    <div className={`${styles.container} ${!isModalOpen ? styles.hidden : ''}`}>
      <div className={styles.header}>
        <img src={images.backBlackImage} alt="back" onClick={handleBack} />
        <div className={styles.title}>신청자 명단</div>
      </div>
      {!showApplicantDetail && (
        <ApplicantList applicantOverviews={applicantOverviews} selectApplicant={selectApplicant} />
      )}
      {showApplicantDetail && <ApplicantDetail selectedApplicantDetail={selectedApplicantDetail} />}
    </div>
  );
};

export default ClubApplicantModal;

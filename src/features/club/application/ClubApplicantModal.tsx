import * as styles from './ClubApplicantModal.css';
import images from '@assets/icons/images';
import ApplicantList from './ApplicantList.tsx';
import ApplicantDetail from './ApplicantDetail.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchApplication, processApplication } from '@api/application.ts';

interface applicantOverview {
  clubApplicationId: string;
  questionAnswer: string;
  createdAt: string;
  status: ApplicationStatus;
  memberId: string;
  profileImage: string;
  nickname: string;
}

enum ApplicationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

enum ProcessType {
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
}

const ClubApplicantModal = ({ isModalOpen, setIsModalOpen, clubId }) => {
  const navigate = useNavigate();
  const [applicantOverviews, setApplicantOverviews] = useState<applicantOverview[]>([
    {
      clubApplicationId: '0',
      questionAnswer: '독후감 쓰는 것을 좋아해서 썼어요!',
      createdAt: '나중에',
      status: ApplicationStatus.PENDING,
      memberId: '0',
      profileImage: '이미지 없음',
      nickname: '닉네임1',
    },
  ]);
  const [showApplicantDetail, setShowApplicantDetail] = useState(false);
  const [selectedApplicantDetail, setSelectedApplicantDetail] = useState<applicantOverview | null>(
    null,
  );

  useEffect(() => {
    loadApplicants();
    console.log('발동');
  }, [isModalOpen]);

  const loadApplicants = async () => {
    try {
      const res = await fetchApplication(clubId);
      console.log('참가 신청자 목록 불러오기 성공', res);
      setApplicantOverviews(res.applicants);
    } catch (error) {
      console.log('참가 신청자 목록 불러오기 실패', error);
    }
  };

  const handleProcessApplication = async (processType: ProcessType) => {
    const memberId = selectedApplicantDetail?.memberId;
    const clubApplicationId = selectedApplicantDetail?.clubApplicationId;
    if (!memberId || !clubApplicationId) return;
    try {
      await processApplication(clubId, memberId, clubApplicationId, processType);
      setIsModalOpen(false);
      setShowApplicantDetail(false);
    } catch (error) {
      console.error('참가 신청 승인/거절 실패', error);
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
      {showApplicantDetail && (
        <ApplicantDetail
          selectedApplicantDetail={selectedApplicantDetail}
          handleProcessApplication={handleProcessApplication}
        />
      )}
    </div>
  );
};

export default ClubApplicantModal;

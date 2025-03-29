import * as styles from './ClubApplicantModal.css';
import images from '@assets/icons/images';
import ApplicantList from './ApplicantList.tsx';
import ApplicantDetail from './ApplicantDetail.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface applicantOverview {
  clubApplicationId: number;
  questionAnswer: string;
  createdAt: string;
  status: ApplicationStatus;
  memberId: number;
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
      clubApplicationId: 0,
      questionAnswer: '독후감 쓰는 것을 좋아해서 썼어요!',
      createdAt: '나중에',
      status: ApplicationStatus.PENDING,
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
    console.log('발동');
  }, [isModalOpen]);

  const getApplicants = async () => {
    try {
      const response = await axios.get<{ applicants: applicantOverview[] }>(
        `http://localhost:8080/api/v1/clubs/${clubId}/applications`,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      setApplicantOverviews(response.data.applicants);
    } catch (error) {
      console.error('참가 신청자 목록 불러오기 실패', error);
    }
  };

  const processApplication = async (processType: ProcessType) => {
    try {
      console.log(processType);
      console.log(selectedApplicantDetail?.memberId);
      console.log(selectedApplicantDetail?.clubApplicationId);
      await axios.post(`http://localhost:8080/api/v1/clubs/${clubId}/applications/process`, {
        memberId: selectedApplicantDetail?.memberId,
        clubApplicationId: selectedApplicantDetail?.clubApplicationId,
        processType: processType,
      });
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
          processApplication={processApplication}
        />
      )}
    </div>
  );
};

export default ClubApplicantModal;

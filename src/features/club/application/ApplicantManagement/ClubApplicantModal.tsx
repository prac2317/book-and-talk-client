import * as styles from './ClubApplicantModal.css.ts';
import images from '@assets/icons/images.ts';
import ApplicantListView from './ApplicantListView.tsx';
import ApplicantDetailView from './ApplicantDetailView.tsx';
import { useEffect, useState } from 'react';
import { fetchApplication, processApplication } from '@api/application.ts';
import { ApplicantOverview, ApplicationStatus, ProcessType } from '@type/application';

interface ClubApplicationModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  clubId: string | undefined;
}

const ClubApplicantModal = ({ isModalOpen, setIsModalOpen, clubId }: ClubApplicationModalProps) => {
  const [applicantOverviews, setApplicantOverviews] = useState<ApplicantOverview[]>([
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
  const [selectedApplicantOverview, setSelectedApplicantOverview] =
    useState<ApplicantOverview | null>(null);

  useEffect(() => {
    loadApplicants();
  }, [isModalOpen]);

  const loadApplicants = async () => {
    if (!clubId) return;

    try {
      const res = await fetchApplication(clubId);
      console.log('참가 신청자 목록 불러오기 성공', res);
      setApplicantOverviews(res.applicants);
    } catch (error) {
      console.log('참가 신청자 목록 불러오기 실패', error);
    }
  };

  const handleProcessApplication = async (processType: ProcessType) => {
    const memberId = selectedApplicantOverview?.memberId;
    const clubApplicationId = selectedApplicantOverview?.clubApplicationId;
    if (!memberId || !clubApplicationId || !clubId) return;
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
      setSelectedApplicantOverview(null);
    } else {
      setIsModalOpen(false);
    }
  };

  const selectApplicant = (applicantOverview: ApplicantOverview) => {
    setSelectedApplicantOverview(applicantOverview);
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
        <ApplicantListView
          applicantOverviews={applicantOverviews}
          selectApplicant={selectApplicant}
        />
      )}
      {showApplicantDetail && selectedApplicantOverview && (
        <ApplicantDetailView
          selectedApplicantOverview={selectedApplicantOverview}
          handleProcessApplication={handleProcessApplication}
        />
      )}
    </div>
  );
};

export default ClubApplicantModal;

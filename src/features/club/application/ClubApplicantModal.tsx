import * as styles from './ClubApplicantModal.css';
import images from '@assets/icons/images';
import ApplicantList from './ApplicantList.tsx';
import ApplicantDetail from './ApplicantDetail.tsx';
import { useState } from 'react';

interface applicantOverview {
  memberId: number;
  thumbnail: string;
  nickname: string;
}

const ClubApplicantModal = ({ isModalOpen, setIsModalOpen }) => {
  const [applicantOverviews, setApplicantOverviews] = useState<applicantOverview[]>([
    { memberId: 1, thumbnail: '', nickname: '닉네임 1' },
  ]);

  const [showApplicantDetail, setShowApplicantDetail] = useState(false);
  const [selectedApplicantDetail, setSelectedApplicantDetail] = useState<applicantOverview | null>(
    null,
  );

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

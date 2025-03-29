import * as styles from './ApplicantDetail.css.ts';

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

const ApplicantDetail = ({ selectedApplicantDetail, processApplication }) => {
  return (
    <div className={styles.detailSection}>
      <div className={styles.answerSection}>
        <div className={styles.profileWrapper}>
          <img src={selectedApplicantDetail.profileImage} alt="profileImage" />
          <div className={styles.questionTitle}>{selectedApplicantDetail.nickname}의 가입신청</div>
        </div>
        <div className={styles.question}>모임 질문은 나중에 추가</div>
        <div className={styles.answer}>{selectedApplicantDetail.questionAnswer} </div>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.approveButton} onClick={() => processApplication('APPROVE')}>
          수락
        </button>
        <button className={styles.rejectButton} onClick={() => processApplication('REJECT')}>
          거절
        </button>
      </div>
    </div>
  );
};

export default ApplicantDetail;

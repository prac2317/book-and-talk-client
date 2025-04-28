import * as styles from './ApplicantDetailView.css.ts';
import { ApplicantOverview, ProcessType } from '@type/application';

interface ApplicantDetailProps {
  selectedApplicantOverview: ApplicantOverview;
  handleProcessApplication: (processType: ProcessType) => void;
}

const ApplicantDetailView = ({
  selectedApplicantOverview,
  handleProcessApplication,
}: ApplicantDetailProps) => {
  return (
    <div className={styles.detailSection}>
      <div className={styles.answerSection}>
        <div className={styles.profileWrapper}>
          <img src={selectedApplicantOverview.profileImage} alt="profileImage" />
          <div className={styles.questionTitle}>
            {selectedApplicantOverview.nickname}의 가입신청
          </div>
        </div>
        <div className={styles.question}>모임 질문은 나중에 추가</div>
        <div className={styles.answer}>{selectedApplicantOverview.questionAnswer} </div>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.approveButton}
          onClick={() => handleProcessApplication(ProcessType.APPROVE)}
        >
          수락
        </button>
        <button
          className={styles.rejectButton}
          onClick={() => handleProcessApplication(ProcessType.REJECT)}
        >
          거절
        </button>
      </div>
    </div>
  );
};

export default ApplicantDetailView;

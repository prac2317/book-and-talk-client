import * as styles from './ApplicantList.css';

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
const ApplicantList = ({ applicantOverviews, selectApplicant }) => {
  return (
    <div className={styles.applicantSection}>
      {applicantOverviews.map((applicant: applicantOverview) => (
        <div
          className={styles.applicantBox}
          key={applicant.memberId}
          onClick={() => {
            selectApplicant(applicant);
          }}
        >
          <img src={applicant.profileImage} alt="profileImage" />
          <div className={styles.nickname}>{applicant.nickname}</div>
        </div>
      ))}
    </div>
  );
};

export default ApplicantList;

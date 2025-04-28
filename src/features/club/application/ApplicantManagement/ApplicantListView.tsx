import * as styles from './ApplicantListView.css.ts';
import { ApplicantOverview } from '@type/application';

interface ApplicantListProps {
  applicantOverviews: ApplicantOverview[];
  selectApplicant: (applicantOverview: ApplicantOverview) => void;
}

const ApplicantListView = ({ applicantOverviews, selectApplicant }: ApplicantListProps) => {
  return (
    <div className={styles.applicantSection}>
      {applicantOverviews.map((applicant: ApplicantOverview) => (
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

export default ApplicantListView;

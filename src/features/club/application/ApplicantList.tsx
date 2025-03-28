import * as styles from './ApplicantList.css';
import { useState } from 'react';

interface applicantOverview {
  memberId: number;
  thumbnail: string;
  nickname: string;
}

const ApplicantList = ({ applicantOverviews, selectApplicant }) => {
  // const [applicantOverviews, setApplicantOverviews] = useState<applicantOverview[]>([
  //   { memberId: 1, thumbnail: '', nickname: '닉네임 1' },
  // ]);

  return (
    <div className={styles.applicantSection}>
      {applicantOverviews.map((applicant) => (
        <div
          className={styles.applicantBox}
          key={applicant.memberId}
          onClick={() => {
            selectApplicant(applicant);
          }}
        >
          <div>thumbnail</div>
          <div className={styles.nickname}>{applicant.nickname}</div>
        </div>
      ))}
    </div>
  );
};

export default ApplicantList;

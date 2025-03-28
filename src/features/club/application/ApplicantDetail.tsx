import * as styles from './ApplicantDetail.css.ts';

interface applicantOverview {
  memberId: number;
  thumbnail: string;
  nickname: string;
}

const ApplicantDetail = ({ selectedApplicantDetail }) => {
  return (
    <div className={styles.detailSection}>
      <div className={styles.answerSection}>
        <div className={styles.questionTitle}>{selectedApplicantDetail.nickname}의 가입신청</div>
        <div className={styles.question}>저희 모임은 </div>
        <div className={styles.answer}>독후감 쓰는 것을 좋아해서 썼어요! </div>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.approveButton}>수락</button>
        <button className={styles.rejectButton}>거절</button>
      </div>
    </div>
  );
};

export default ApplicantDetail;

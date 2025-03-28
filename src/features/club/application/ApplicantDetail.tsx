import * as styles from './ApplicantDetail.css.ts';

interface applicantOverview {
  applicationId: number;
  questionAnswer: string;
  createAt: string;
  memberId: number;
  profileImage: string;
  nickname: string;
}

const ApplicantDetail = ({
  selectedApplicantDetail,
}: {
  selectedApplicantDetail: applicantOverview;
}) => {
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
        <button className={styles.approveButton}>수락</button>
        <button className={styles.rejectButton}>거절</button>
      </div>
    </div>
  );
};

export default ApplicantDetail;

import React from 'react';
import * as styles from './JoinForm.css.ts';
import images from '@assets/icons/images.ts';

const JoinForm = ({
  clubName,
  setQuestionAnswer,
}: {
  clubName: string;
  setQuestionAnswer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const question =
    '저희 모임은 책을 읽고 독후감을 작성하는 모임입니다.\n기간동안 잘 참여하실 수 있는 분이시면 좋겠습니다."';

  const handleChange = (value: string) => {
    setQuestionAnswer(value);
  };

  return (
    <div>
      <div className={styles.questionSection}>
        <div className={styles.noticeBox}>
          <div className={styles.noticeHeadline}>호스트의 질문에 답변해주세요</div>
          <div>답변은 호스트와 운영자에게만 공개됩니다</div>
        </div>
        <div className={styles.clubNameBox}>
          <div className={styles.clubNameHeadline}>가입 신청한 북클럽명</div>
          <div className={styles.clubName}>{clubName}</div>
        </div>
        <div className={styles.questionBox}>
          <div className={styles.question}>{question}</div>
          <input
            className={styles.answerInput}
            onChange={(e) => {
              handleChange(e.target.value as string);
            }}
            placeholder="호스트의 질문에 대한 답변을 작성해주세요."
          />
          <div className={styles.textCount}>0/200</div>
        </div>
      </div>
      <div className={styles.warningSection}>
        <div className={styles.warningWrapper}>
          <img src={images.applicationWarning} alt="warning" />
          <div>주의해주세요</div>
        </div>
        <div className={styles.warning}>
          전화번호, 카카오톡 아이디 등 과도한 개인정보를 물어보는 경우, 가이드라인 위반 모임이므로
          신고해주세요
        </div>
      </div>
    </div>
  );
};

export default JoinForm;

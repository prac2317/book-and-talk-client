import * as styles from './ClubApplicationPage.css.ts';
import ClubApplicationQuestion from '@features/club/application/ClubApplicationQuestion.tsx';
import ClubApplicationCompleted from '@features/club/application/ClubApplicationCompleted.tsx';
import { useState } from 'react';
import images from '@assets/icons/images.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClubApplicationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clubId, clubName } = location.state || {};
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionAnswer, setQuestionAnswer] = useState('');

  const submitApplication = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/clubs/${clubId}/applications`,
        { questionAnswer: questionAnswer },
        { withCredentials: true },
      );
      console.log(response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('참가 신청 제출 실패', error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <img className={styles.xButton} src={images.xButtonImage} alt="x" />
        </div>
        {isSubmitted ? (
          <ClubApplicationCompleted />
        ) : (
          <ClubApplicationQuestion
            clubId={clubId}
            clubName={clubName}
            setIsSubmitted={setIsSubmitted}
            setQuestionAnswer={setQuestionAnswer}
          />
        )}
      </div>
      {!isSubmitted && (
        <button className={styles.primaryButton} onClick={submitApplication}>
          다음
        </button>
      )}
      {isSubmitted && (
        <button
          className={styles.primaryButton}
          onClick={() => {
            navigate(`/clubs/${clubId}`);
          }}
        >
          완료
        </button>
      )}
    </div>
  );
};

export default ClubApplicationPage;

import * as styles from './ClubApplicationPage.css.ts';
import ClubApplicationQuestion from '@features/club/application/ClubApplicationQuestion.tsx';
import ClubApplicationCompleted from '@features/club/application/ClubApplicationCompleted.tsx';
import { useState } from 'react';
import images from '@assets/icons/images.ts';

const ClubApplicationPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <img className={styles.xButton} src={images.xButtonImage} alt="x" />
        </div>
        {isSubmitted ? <ClubApplicationCompleted /> : <ClubApplicationQuestion />}
      </div>
      <button
        className={styles.primaryButton}
        onClick={() => {
          setIsSubmitted(!isSubmitted);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default ClubApplicationPage;

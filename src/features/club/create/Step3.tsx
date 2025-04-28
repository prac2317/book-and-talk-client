import * as styles from './Step3.css';
import { StepProps } from '@type/club.ts';

const Step3 = ({ goToNextStep }: StepProps) => {
  return (
    <form className={styles.container}>
      <div className={styles.locationWrapper}>
        <h1 className={styles.title}>모임활동 장소를 정해주세요</h1>
        <input
          className={styles.locationSearchBar}
          placeholder="지역을 검색해주세요."
          readOnly={true}
        />
      </div>
      <div>
        <button className={styles.primaryButton} onClick={goToNextStep}>
          다음
        </button>
      </div>
    </form>
  );
};

export default Step3;

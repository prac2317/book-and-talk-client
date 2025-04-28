import * as styles from './Step2.css';
import images from '@assets/icons/images';
import { StepProps } from '@type/club';

const Step2 = ({ goToNextStep, formData, setFormData }: StepProps) => {
  return (
    <form className={styles.container}>
      <div className={styles.overviewWrapper}>
        <h1 className={styles.title}>모임을 소개해주세요</h1>
        <div className={styles.nameInputSection}>
          <h2 className={styles.nameInputTitle}>북클럽명</h2>
          <input
            className={styles.nameInput}
            type="text"
            placeholder="북클럽명을 정해주세요."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <div className={styles.nameCount}>{formData.name.length} / 15</div>
        </div>
        <div className={styles.descriptionInputSection}>
          <h2 className={styles.descriptionTitle}>모임 소개</h2>
          <textarea
            className={styles.descriptionInput}
            placeholder="모임을 소개해주세요."
            value={formData.clubDescription}
            onChange={(e) => setFormData({ ...formData, clubDescription: e.target.value })}
            required
          />
          <div className={styles.descriptionCount}>{formData.clubDescription.length} / 500</div>
        </div>
        <div className={styles.noticeSection}>
          <div className={styles.noticeTitle}>
            <img className={styles.lightBulbImage} src={images.lightBulb} alt="bulb" />
            <div>이런 내용으로 소개해보세요!</div>
          </div>
          <ul className={styles.noticeBox}>
            <li>저희는 이런 활동을 할 예정이에요.</li>
            <li>언제, 어디에서 활동할 예정이에요.</li>
            <li>이런 사람들과 함께하고 싶어요.</li>
            <li>우리 모임에서 이건 꼭 지켜주세요.</li>
          </ul>
        </div>
      </div>
      <div>
        {/*<button className={styles.primaryButton} onClick={goToPrevStep}>*/}
        {/*  이전*/}
        {/*</button>*/}
        <button className={styles.primaryButton} onClick={goToNextStep}>
          다음
        </button>
      </div>
    </form>
  );
};

export default Step2;

import * as styles from './Step4.css';
import { vars } from '../../../styles/global.css.ts';
import { StepProps } from '@type/club.ts';

const Step4 = ({ goToNextStep, formData, setFormData }: StepProps) => {
  const durations = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={styles.container}>
      <div className={styles.dateWrapper}>
        <h1 className={styles.dateTitle}>모임활동 기간을 정해주세요</h1>
        <div className={styles.startDateSection}>
          <h2 className={styles.startDateTitle}>시작 일시</h2>
          <input
            type="date"
            placeholder="시작일"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            required
          />
        </div>
        <div className={styles.durationSection}>
          <h2 className={styles.durationTitle}>기간</h2>
          <div className={styles.buttonGroup}>
            {durations.map((duration, index) => (
              <button
                className={styles.durationButton}
                key={index}
                onClick={() => {
                  setFormData({ ...formData, duration });
                }}
                style={
                  formData.duration == duration
                    ? { backgroundColor: vars.colors.border, outline: `1px solid #cccbcb` }
                    : { backgroundColor: vars.colors.surface }
                }
              >
                {duration}일
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button className={styles.primaryButton} onClick={goToNextStep}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step4;

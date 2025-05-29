import * as styles from './Step5.css';
import { selectButton } from './Step5.css';
import { vars } from '../../../styles/global.css.ts';
import { useState } from 'react';
import { Step5Props } from '@type/club.ts';

const Step5 = ({ formInput, setFormInput, handleSubmit }: Step5Props) => {
  const count = [3, 5, 10];
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h1 className={styles.headlineTitle}>어떤 사람들과 함께하고 싶나요?</h1>
        <div className={styles.selectSection}>
          <h2 className={styles.selectTitle}>최대 인원</h2>
          <div className={styles.buttonGroup}>
            {count.map((count, index) => (
              <button
                className={selectButton}
                key={index}
                onClick={() => {
                  setIsClicked(false);
                  setFormInput({ ...formInput, maxParticipants: Number(count) });
                }}
                style={
                  formInput.maxParticipants == count && !isClicked
                    ? { backgroundColor: vars.colors.border, outline: `1px solid #cccbcb` }
                    : { backgroundColor: vars.colors.surface }
                }
              >
                {count}명
              </button>
            ))}
            <button
              className={selectButton}
              onClick={() => {
                setIsClicked(true);
              }}
              style={
                isClicked
                  ? { backgroundColor: vars.colors.border, outline: `1px solid #cccbcb` }
                  : { backgroundColor: vars.colors.surface }
              }
            >
              직접입력
            </button>
          </div>
          {isClicked && (
            <input
              className={styles.countInput}
              type="number"
              placeholder="최대 참가자 수"
              value={String(formInput.maxParticipants)}
              onChange={(e) =>
                setFormInput({ ...formInput, maxParticipants: Number(e.target.value) })
              }
              required
            />
          )}
        </div>
        <div className={styles.answerSection}>
          <h2 className={styles.answerTitle}>가입신청 시 보여질 질문을 적어주세요</h2>
          <textarea
            className={styles.answerInput}
            placeholder="예비 모임원들에게 궁금한 내용을 적어주세요."
          />
          <div className={styles.answerCount}>0 / 200</div>
        </div>
      </div>

      <div>
        <button className={styles.primaryButton} onClick={handleSubmit}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Step5;

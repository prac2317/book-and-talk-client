import * as styles from './Step6.css';
import images from '../../../assets/icons/images.ts';

const Step6 = ({ goToPrevStep, navigate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.completeMessage}>모임 생성이 완료되었습니다</div>
      <img className={styles.logo} src={images.blurredLogoImage} alt="logo" />
      <div>
        {/*<button onClick={goToPrevStep}>이전으로</button>*/}
        <button
          className={styles.primaryButton}
          onClick={() => {
            navigate('/');
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default Step6;

import images from '@assets/icons/images.ts';
import * as styles from './JoinCompleted.css.ts';

const JoinCompleted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.completeMessage}>가입 신청이 완료되었습니다.</div>
      <img className={styles.logo} src={images.blurredLogoImage} alt="logo" />
    </div>
  );
};

export default JoinCompleted;

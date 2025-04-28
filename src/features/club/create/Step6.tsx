import * as styles from './Step6.css';
import images from '../../../assets/icons/images.ts';
import { useNavigate } from 'react-router-dom';

const Step6 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.completeMessage}>모임 생성이 완료되었습니다</div>
      <img className={styles.logo} src={images.blurredLogoImage} alt="logo" />
      <div>
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

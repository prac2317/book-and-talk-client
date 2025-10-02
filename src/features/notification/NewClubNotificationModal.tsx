import * as styles from './NewClubNotificationModal.css.ts';
import { useNavigate } from 'react-router-dom';

const NewClubNotificationModal = ({
  isModalOpen,
  setIsModalOpen,
  clubId,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  clubId: string | undefined;
}) => {
  const navigate = useNavigate();
  const goToClub = () => {
    navigate(`/clubs/${clubId}}`);
  };

  return (
    <div className={`${styles.container} ${!isModalOpen ? styles.hidden : ''}`}>
      <button onClick={() => setIsModalOpen(false)}>모달끄기</button>
      <div className={styles.title}>새로운 모임이 개설되었어요!</div>
      <div>
        <div>회원님이 즐겨찾기 한 책의 모임이 개설되었어요!</div>
        <div>개설된 모임을 확인해보세요!</div>
      </div>
      <button onClick={goToClub}>모임 확인하기</button>
    </div>
  );
};

export default NewClubNotificationModal;

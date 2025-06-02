import * as styles from './JoinApprovedNotificationModal.css.ts';
import { useNavigate } from 'react-router-dom';

const JoinApprovedNotificationModal = ({
  isModalOpen,
  clubId,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  clubId: string | undefined;
  setIsModalOpen: (isModalOpen: boolean) => void;
}) => {
  const navigate = useNavigate();
  const goToClubChat = () => {
    navigate(`/chat`);
  };

  return (
    <div className={`${styles.container} ${!isModalOpen ? styles.hidden : ''}`}>
      <button
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        모달끄기
      </button>
      <div className={styles.title}>북클럽에 가입 되었어요!</div>
      <div>
        <div>신청하신 모임에 가입 되었어요!</div>
        <div>가입하신 모임의 채팅에 참여해보세요!</div>
        <div>{clubId}</div>
      </div>
      <button onClick={goToClubChat}>채팅하러가기</button>
    </div>
  );
};

export default JoinApprovedNotificationModal;

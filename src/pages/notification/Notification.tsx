import * as styles from './Notification.css.ts';
import { useState, useEffect } from 'react';
import ClubApplicantModal from '@features/club/application/ApplicantManagement/ClubApplicantModal.tsx';
import JoinApprovedNotificationModal from '@features/notification/JoinApprovedNotificationModal.tsx';
import NewClubNotificationModal from '@features/notification/NewClubNotificationModal.tsx';
import { fetchNotificationList } from '@api/notification.ts';

interface Notification {
  id: string;
  content: string;
  toName: string;
  url: string;
  notificationType: NotificationType;
  isRead: boolean;
  createdAt: string;
}

enum NotificationType {
  NEW_CLUB_CREATED = 'NEW_CLUB_CREATED',
  CLUB_APPLICATION = 'CLUB_APPLICATION',
  CLUB_APPROVED = 'CLUB_APPROVED',
}

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedNotification, setClickedNotification] = useState<Notification | null>(null);
  const [notificationList, setNotificationList] = useState<Notification[]>([]);
  const [clubId, setClubId] = useState('');

  useEffect(() => {
    getNotificationList();
  }, []);

  const getNotificationList = async () => {
    const response = await fetchNotificationList('1'); //memberId 하드코딩 TODO: memberId 전역변수로 관리하기
    console.log(response);
    setNotificationList(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>알림</h2>
      </div>
      <div className={styles.notificationList}>
        {notificationList.map((notification) => (
          <div
            className={`${styles.notificationItem} ${notification.isRead ? '' : styles.notificationItemUnread}`}
            key={notification.id}
            onClick={() => {
              setClickedNotification(notification);
              setIsModalOpen(true);
              console.log(notification);
              console.log(notification.notificationType);
              const match = notification.url.match(/\/clubs\/(\d+)\//);
              if (match) {
                setClubId(match[1]);
              }
            }}
          >
            <div>
              <div>{notification.content}</div>
              <div>{notification.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen &&
        clickedNotification?.notificationType === NotificationType.CLUB_APPLICATION && (
          <ClubApplicantModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            clubId={clubId}
          />
        )}
      {isModalOpen && clickedNotification?.notificationType === NotificationType.CLUB_APPROVED && (
        <JoinApprovedNotificationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          clubId={clubId}
        />
      )}
      {isModalOpen &&
        clickedNotification?.notificationType === NotificationType.NEW_CLUB_CREATED && (
          <NewClubNotificationModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            clubId={clubId}
          />
        )}
    </div>
  );
};

export default Notification;

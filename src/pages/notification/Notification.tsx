import * as styles from './Notification.css.ts';
import { useState, useEffect } from 'react';
import ClubApplicantModal from '@features/club/application/ApplicantManagement/ClubApplicantModal.tsx';
import JoinApprovedNotificationModal from '@features/notification/JoinApprovedNotificationModal.tsx';
import NewClubNotificationModal from '@features/notification/NewClubNotificationModal.tsx';

interface NotificationOverview {
  notificationId: string;
  notificationType: NotificationType;
  image: string;
  contents: string;
  isRead: boolean;
  memberId: string;
  clubId?: string;
  isbn13?: string;
  createdAt: string;
}

enum NotificationType {
  newClub,
  approve,
  application,
}

const mockNotifications: NotificationOverview[] = [
  {
    notificationId: '1',
    notificationType: NotificationType.application,
    image: '이미지',
    contents: '회원님의 모임에 신규 참가 신청이 있습니다!',
    isRead: false,
    memberId: '1',
    clubId: '1',
    isbn13: '1234123412341',
    createdAt: '2021-09-01 12:00:00',
  },
  {
    notificationId: '2',
    notificationType: NotificationType.approve,
    image: '이미지',
    contents: '회원님의 참가신청이 승인되었습니다!',
    isRead: true,
    memberId: '1',
    isbn13: '1234123412341',
    createdAt: '2021-09-01 12:00:00',
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationOverview[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedNotification, setClickedNotification] = useState<NotificationOverview | null>(null);

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>알림</h2>
      </div>
      <div className={styles.notificationList}>
        {notifications.map((notification) => (
          <div
            className={`${styles.notificationItem} ${notification.isRead ? '' : styles.notificationItemUnread}`}
            key={notification.notificationId}
            onClick={() => {
              setClickedNotification(notification);
              setIsModalOpen(true);
            }}
          >
            <div>{notification.image}</div>
            <div>
              <div>{notification.contents}</div>
              <div>{notification.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && clickedNotification?.notificationType === NotificationType.application && (
        <ClubApplicantModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          clubId={clickedNotification.clubId}
        />
      )}
      {isModalOpen && clickedNotification?.notificationType === NotificationType.approve && (
        <JoinApprovedNotificationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          clubId={clickedNotification.clubId}
        />
      )}
      {isModalOpen && clickedNotification?.notificationType === NotificationType.newClub && (
        <NewClubNotificationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isbn13={clickedNotification.isbn13}
        />
      )}
    </div>
  );
};

export default Notification;

import * as styles from './Notification.css.ts';
import { useState, useEffect } from 'react';

interface NotificationOverview {
  notificationId: number;
  notificationType: string;
  image: string;
  contents: string;
  isRead: boolean;
  memberId: number;
  createdAt: string;
}

const mockNotifications: NotificationOverview[] = [
  {
    notificationId: 1,
    notificationType: '승인',
    image: '이미지',
    contents: '회원님의 모임에 신규 참가 신청이 있습니다!',
    isRead: false,
    memberId: 1,
    createdAt: '2021-09-01 12:00:00',
  },
  {
    notificationId: 2,
    notificationType: '참가신청',
    image: '이미지',
    contents: '회원님의 참가신청이 승인되었습니다!',
    isRead: true,
    memberId: 1,
    createdAt: '2021-09-01 12:00:00',
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationOverview[]>([]);

  useEffect(() => {
    setNotifications(mockNotifications);
  });

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>알림</h2>
      </div>
      <div className={styles.notificationList}>
        {notifications.map((notification) => (
          <div className={styles.notificationItem}>
            <div>{notification.image}</div>
            <div>
              <div>{notification.contents}</div>
              <div>{notification.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;

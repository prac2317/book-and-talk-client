import { useNavigate } from 'react-router-dom';
import * as styles from './ClubCard.css';
import { ClubCardProps } from '@type/club.ts';

const ClubCard = ({
  clubId,
  bookTitle,
  name,
  currentParticipants,
  maxParticipants,
  status,
  startDate,
  clubImage,
}: ClubCardProps) => {
  const navigate = useNavigate();

  const navigateToClubDetail = (clubId: number) => {
    navigate(`/clubs/${clubId}`);
  };

  return (
    <div className={styles.clubCard} onClick={() => navigateToClubDetail(clubId)}>
      <div>
        <img className={styles.clubThumbnail} src={clubImage} alt="thumbnail" />
        {/*<img className={styles.clubThumbnail} src={groupImageExampple} alt="thumbnail" />*/}
      </div>
      <div className={styles.clubOverview}>
        <div>{bookTitle}</div>
        <div>{name}</div>
        <div>
          {currentParticipants} / {maxParticipants}
        </div>
        <div>{status}</div>
        <div>{startDate}</div>
      </div>
    </div>
  );
};

export default ClubCard;

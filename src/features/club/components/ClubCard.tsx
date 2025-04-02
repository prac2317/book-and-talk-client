import { useNavigate } from 'react-router-dom';
import * as styles from './ClubCard.css';
import groupImageExampple from '@assets/icons/img.png';

interface ClubCardProps {
  clubId: number;
  bookTitle: string;
  name: string;
  currentParticipants: number;
  maxParticipants: number;
  status: string;
  startDate: string;
}

const ClubCard = ({
  clubId,
  bookTitle,
  name,
  currentParticipants,
  maxParticipants,
  status,
  startDate,
}: ClubCardProps) => {
  const navigate = useNavigate();

  const navigateToClubDetail = (clubId: number) => {
    navigate(`/clubs/${clubId}`);
  };

  return (
    <div
      className={styles.clubCard}
      onClick={() => navigateToClubDetail(clubId)}
    >
      <div>
        <img className={styles.clubThumbnail} src={groupImageExampple} alt="thumbnail" />
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
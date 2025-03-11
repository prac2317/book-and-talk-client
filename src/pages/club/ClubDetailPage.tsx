import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface getClubDetailResponse {
  clubId: string;
  name: string;
  currentParticipants: number;
  maxParticipants: number;
  startDate: string;
  duration: number;
  groupDescription: string;
  isbn13: string;
  createdAt: string;
}

const ClubDetailPage = () => {
  const { clubId } = useParams();
  const [clubDetail, setClubDetail] = useState<getClubDetailResponse>({
    clubId: '',
    name: '',
    currentParticipants: 0,
    maxParticipants: 0,
    startDate: '',
    duration: 0,
    groupDescription: '',
    isbn13: '',
    createdAt: '',
  });

  useEffect(() => {
    console.log(clubId);
    axios
      .get<getClubDetailResponse>(`http://localhost:8080/api/v1/clubs/${clubId}`)
      .then((response) => {
        setClubDetail(response.data);
      });
  }, []);

  const onClickDetail = () => {
    console.log(clubDetail);
  };

  return (
    <>
      <h2>모임 상세 페이지</h2>
      <div>{clubDetail.name}</div>
      <div>
        {clubDetail.maxParticipants} / {clubDetail.currentParticipants}
      </div>
      <div>{clubDetail.duration}</div>
      <div>{clubDetail.startDate}</div>
      <div>{clubDetail.groupDescription}</div>
      <button onClick={onClickDetail}>테스트용버튼</button>
    </>
  );
};

export default ClubDetailPage;

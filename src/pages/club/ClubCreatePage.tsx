import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

interface CreateClubRequest {
  name: string;
  bookTitle: string;
  isbn13: string;
  startDate: string;
  duration: number;
  maxParticipants: number;
  clubDescription: string;
}

const ClubCreatePage = () => {
  const location = useLocation();
  const { bookTitle, isbn13 } = location.state || { bookTitle: '', isbn13: '' };
  const [formData, setFormData] = useState<CreateClubRequest>({
    name: '',
    bookTitle: '',
    isbn13: '',
    startDate: '',
    duration: 0,
    maxParticipants: 0,
    clubDescription: '',
  });

  useEffect(() => {
    if (bookTitle && isbn13) {
      setFormData((prev) => ({ ...prev, bookTitle, isbn13 }));
      console.log(bookTitle);
      console.log(isbn13);
    }
  }, [bookTitle, isbn13]);

  const createGroup = async (data: CreateClubRequest) => {
    const response = await axios.post('http://localhost:8080/api/v1/clubs', data, {
      withCredentials: true,
    });
    return response.data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createGroup(formData);
      console.log('모임 생성 성공:', result);
    } catch (error) {
      console.error('모임 생성 실패:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6>모임 이름</h6>
      <input
        type="text"
        placeholder="모임 이름"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <h6>책 제목</h6>
      <input
        type="text"
        placeholder="책 제목"
        readOnly={true}
        value={formData.bookTitle}
        onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
        required
      />
      <h6>책 isbn</h6>
      <input
        type="number"
        placeholder="ISBN13"
        readOnly={true}
        value={formData.isbn13}
        onChange={(e) => setFormData({ ...formData, isbn13: e.target.value })}
        required
      />
      <h6>시작 날짜</h6>
      <input
        type="datetime-local"
        placeholder="시작일"
        value={formData.startDate}
        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
        required
      />
      <h6>모임 기간</h6>
      <input
        type="number"
        placeholder="모임 기간(일)"
        value={formData.duration}
        onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
        required
      />
      <h6>최대 참가자 수</h6>
      <input
        type="number"
        placeholder="최대 참가자 수"
        value={formData.maxParticipants}
        onChange={(e) => setFormData({ ...formData, maxParticipants: Number(e.target.value) })}
        required
      />
      <h6>모임 소개</h6>
      <textarea
        placeholder="모임 소개"
        value={formData.clubDescription}
        onChange={(e) => setFormData({ ...formData, clubDescription: e.target.value })}
        required
      />
      <button type="submit">모임 만들기</button>
    </form>
  );
};

export default ClubCreatePage;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import * as styles from './ClubCreatePage.css.ts';
import Step1 from '../../features/club/create/Step1.tsx';
import Step2 from '../../features/club/create/Step2.tsx';
import Step3 from '../../features/club/create/Step3.tsx';
import Step4 from '../../features/club/create/Step4.tsx';
import Step5 from '../../features/club/create/Step5.tsx';
import Step6 from '../../features/club/create/Step6.tsx';

interface CreateClubRequest {
  name: string;
  bookTitle: string;
  isbn13: string;
  startDate: string;
  duration: number;
  maxParticipants: number;
  clubDescription: string;
}

interface bookDetail {
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
}

const ClubCreatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookDetail } = (location.state as { bookDetail: bookDetail }) || {
    thumbnail: '',
    title: '',
    author: '',
    publishedDate: '',
    publisher: '',
    isbn13: '',
    description: '',
  };
  const [stepNumber, setStepNumber] = useState(1);
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
    if (bookDetail) {
      setFormData((prev) => ({ ...prev, bookTitle: bookDetail.title, isbn13: bookDetail.isbn13 }));
      console.log(bookDetail);
    }
  }, [bookDetail]);

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
      console.log('모임 생성 성공', result);
      goToNextStep();
    } catch (error) {
      console.log(formData);
      console.error('모임 생성 실패', error);
    }
  };

  const goToNextStep = () => {
    setStepNumber(stepNumber + 1);
  };

  const goToPrevStep = () => {
    setStepNumber(stepNumber - 1);
  };

  return (
    <div className={styles.container}>
      {stepNumber == 1 && <Step1 goToNextStep={goToNextStep} bookDetail={bookDetail} />}
      {stepNumber == 2 && (
        <Step2
          goToNextStep={goToNextStep}
          goToPrevStep={goToPrevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {stepNumber == 3 && (
        <Step3
          goToNextStep={goToNextStep}
          goToPrevStep={goToPrevStep}
          formData={formData}
          setFormData={setFormData}
          // isbn13={bookDetail.isbn13}
        />
      )}
      {stepNumber == 4 && (
        <Step4
          goToNextStep={goToNextStep}
          goToPrevStep={goToPrevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {stepNumber == 5 && (
        <Step5
          goToNextStep={goToNextStep}
          goToPrevStep={goToPrevStep}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}
      {stepNumber == 6 && <Step6 goToPrevStep={goToPrevStep} navigate={navigate} />}

      {/*<form onSubmit={handleSubmit}>*/}
      {/*  <h6>모임 이름</h6>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    placeholder="모임 이름"*/}
      {/*    value={formData.name}*/}
      {/*    onChange={(e) => setFormData({ ...formData, name: e.target.value })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <h6>책 제목</h6>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    placeholder="책 제목"*/}
      {/*    readOnly={true}*/}
      {/*    value={formData.bookTitle}*/}
      {/*    onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <h6>책 isbn</h6>*/}
      {/*  <input*/}
      {/*    type="number"*/}
      {/*    placeholder="ISBN13"*/}
      {/*    readOnly={true}*/}
      {/*    value={formData.isbn13}*/}
      {/*    onChange={(e) => setFormData({ ...formData, isbn13: e.target.value })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <h6>시작 날짜</h6>*/}
      {/*  <input*/}
      {/*    type="datetime-local"*/}
      {/*    placeholder="시작일"*/}
      {/*    value={formData.startDate}*/}
      {/*    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <h6>모임 기간</h6>*/}
      {/*  <input*/}
      {/*    type="number"*/}
      {/*    placeholder="모임 기간(일)"*/}
      {/*    value={formData.duration}*/}
      {/*    onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <h6>최대 참가자 수</h6>*/}
      {/*  <input*/}
      {/*    type="number"*/}
      {/*    placeholder="최대 참가자 수"*/}
      {/*    value={formData.maxParticipants}*/}
      {/*    onChange={(e) => setFormData({ ...formData, maxParticipants: Number(e.target.value) })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <h6>모임 소개</h6>*/}
      {/*  <textarea*/}
      {/*    placeholder="모임 소개"*/}
      {/*    value={formData.clubDescription}*/}
      {/*    onChange={(e) => setFormData({ ...formData, clubDescription: e.target.value })}*/}
      {/*    required*/}
      {/*  />*/}
      {/*  <button type="submit">모임 만들기</button>*/}
      {/*</form>*/}
    </div>
  );
};

export default ClubCreatePage;

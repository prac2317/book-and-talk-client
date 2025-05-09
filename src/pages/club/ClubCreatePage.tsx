import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as styles from './ClubCreatePage.css.ts';
import images from '@assets/icons/images';
import Step1 from '../../features/club/create/Step1.tsx';
import Step2 from '../../features/club/create/Step2.tsx';
import Step3 from '../../features/club/create/Step3.tsx';
import Step4 from '../../features/club/create/Step4.tsx';
import Step5 from '../../features/club/create/Step5.tsx';
import Step6 from '../../features/club/create/Step6.tsx';
import { createClub } from '@api/club.ts';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createClub(formData);
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

  // const goToPrevStep = () => {
  //   setStepNumber(stepNumber - 1);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.xButton}
          src={images.xButtonImage}
          alt="x"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className={styles.stepSection}>
        {stepNumber == 1 && <Step1 goToNextStep={goToNextStep} bookDetail={bookDetail} />}
        {stepNumber == 2 && (
          <Step2 goToNextStep={goToNextStep} formData={formData} setFormData={setFormData} />
        )}
        {stepNumber == 3 && (
          <Step3 goToNextStep={goToNextStep} formData={formData} setFormData={setFormData} />
        )}
        {stepNumber == 4 && (
          <Step4 goToNextStep={goToNextStep} formData={formData} setFormData={setFormData} />
        )}
        {stepNumber == 5 && (
          <Step5
            goToNextStep={goToNextStep}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        )}
        {stepNumber == 6 && <Step6 />}
      </div>
    </div>
  );
};

export default ClubCreatePage;

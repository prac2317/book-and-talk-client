export interface BookDetail {
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
}

interface CreateClubRequest {
  name: string;
  bookTitle: string;
  isbn13: string;
  startDate: string;
  duration: number;
  maxParticipants: number;
  clubDescription: string;
}

export interface BaseStepProps {
  goToNextStep: () => void;
  // goToPrevStep?: () => void;
}

export interface Step1Props extends BaseStepProps {
  bookDetail: BookDetail;
}

export interface StepProps extends BaseStepProps {
  formData: CreateClubRequest;
  setFormData: React.Dispatch<React.SetStateAction<CreateClubRequest>>;
}

export interface Step5Props extends StepProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

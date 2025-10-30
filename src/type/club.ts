export interface BookDetail {
  thumbnail: string;
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  isbn13: string;
  description: string;
}

export interface FormInput {
  name: string;
  bookTitle: string;
  isbn13: string;
  startDate: string;
  duration: number;
  maxParticipants: number;
  clubDescription: string;
  address: string;
  latitude: string;
  longitude: string;
}

export interface GetClubDetailResponse {
  clubId: number;
  name: string;
  bookTitle: string;
  currentParticipant: number;
  maxParticipants: number;
  startDate: string;
  duration: number;
  clubDescription: string;
  isbn13: string;
  createdAt: string;
  address: string;
  latitude: string;
  longitude: string;
  clubImage: string;
}

export interface ClubOverview {
  clubId: number;
  bookTitle: string;
  name: string;
  currentParticipants: number;
  maxParticipants: number;
  status: string;
  startDate: string;
  latitude?: number;
  longitude?: number;
  clubImage: string;
}

export interface ClubCardProps {
  clubId: number;
  bookTitle: string;
  name: string;
  currentParticipants: number;
  maxParticipants: number;
  status: string;
  startDate: string;
  clubImage: string;
}

export interface BaseStepProps {
  goToNextStep: () => void;
  // goToPrevStep?: () => void;
}

export interface Step1Props extends BaseStepProps {
  bookDetail: BookDetail;
}

export interface Step2Props extends BaseStepProps {
  formInput: FormInput;
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
  setClubImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export interface StepProps extends BaseStepProps {
  formInput: FormInput;
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
}

export interface Step5Props extends StepProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

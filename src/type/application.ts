export enum ApplicationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

export enum ProcessType {
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
}

export interface ApplicantOverview {
  clubApplicationId: string;
  questionAnswer: string;
  createdAt: string;
  status: ApplicationStatus;
  memberId: string;
  profileImage: string;
  nickname: string;
}
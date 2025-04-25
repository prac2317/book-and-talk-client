import api from './api.ts';

enum ProcessType {
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
}

export const cancelApplication = async (clubId: string) => {
  await api.post(`/clubs/${clubId}/applications/cancel`);
};

export const createApplication = async (clubId: string, questionAnswer: string) => {
  const res = await api.post(`api/v1/clubs/${clubId}/applications`, {
    questionAnswer,
  });
  return res.data;
};

export const fetchApplication = async (clubId: string) => {
  const res = await api.get(`/v1/clubs/${clubId}/applications`);
  return res.data;
};

export const processApplication = async (
  clubId: string,
  memberId: string,
  clubApplicationId: string,
  processType: ProcessType,
) => {
  const res = await api.post(`/v1/clubs/${clubId}/applications/process`, {
    memberId,
    clubApplicationId,
    processType,
  });
  return res.data;
};

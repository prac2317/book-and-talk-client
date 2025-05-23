import api from './api.ts';

interface bookListResponse {
  category: string;
  data: book[];
}

interface book {
  title: string;
  isbn13: string;
  cover: string;
}

export const getBookList = async (category: string) => {
  const res: bookListResponse = await api.get('/books', {
    params: { category },
  });
  return res.data;
};

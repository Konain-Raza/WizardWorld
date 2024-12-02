import { books } from '../data/books.js';

export const getBooks = (req, res) => {
  res.json(books);
};

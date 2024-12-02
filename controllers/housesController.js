import { houses } from '../data/houses.js';

export const getHouses = (req, res) => {
  res.json(houses);
};

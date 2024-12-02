import { spells } from '../data/spells.js';

export const getSpells = (req, res) => {
  res.json(spells);
};

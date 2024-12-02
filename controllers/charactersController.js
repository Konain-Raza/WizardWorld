import { characters } from "../data/characters.js";

export const getCharacters = (req, res) => {
  res.json(characters);
};
